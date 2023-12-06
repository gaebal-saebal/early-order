"use client";

import Image from "next/image";
import HomeClockSmall from "../icon/home/HomeClockSmall";
import HomeLocationSmall from "../icon/home/HomeLocationSmall";
import {
  DetailInfo,
  ShopDetailWrapper,
  ShopListContainer,
  ShopListWholeContainer,
  TagInfo,
  TimeInfo,
} from "./ShopListStyle";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { ShopListInfoTypes } from "@/types/interface";
import {
  CardDetailContainer,
  CardDetailWrapper,
  ShopCardContainer,
  ShopCardListContainer,
  ShopCardWrapper,
} from "./ShopCardStyle";

export const ShopCard = () => {
  const [shopInfo, setShopinfo] = useState([]);

  const getShopInfo = async () => {
    await axios("/api/shop/getInformation")
      .then((res) => {
        setShopinfo(res.data);
        console.log("#data", res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getShopInfo();
    console.log("#shopInfo", shopInfo);
  }, []);

  return (
    <ShopCardContainer>
      <div>
        {shopInfo.map((item: ShopListInfoTypes, idx: number) => {
          return (
            <ShopCardListContainer key={item._id}>
              <ShopCardWrapper>
                <CardDetailContainer>
                  <Image src={item.imgURL} width="89" height="89" alt="shop" />
                  <CardDetailWrapper>
                    <TagInfo>바로 수령</TagInfo>
                    <h4>{item.name}</h4>
                    <DetailInfo>
                      <div className="datail-wrapper">
                        <HomeLocationSmall />
                        <p>도보 5분</p>
                      </div>
                      <div className="datail-wrapper">
                        <HomeClockSmall />
                        <p>바로 수령</p>
                      </div>
                    </DetailInfo>
                    <TimeInfo>
                      <p className="open-status">영업 중</p>
                      <p className="lastorder-time">21:00 라스트오더</p>
                    </TimeInfo>
                  </CardDetailWrapper>
                </CardDetailContainer>
              </ShopCardWrapper>
            </ShopCardListContainer>
          );
        })}
      </div>
    </ShopCardContainer>
  );
};
