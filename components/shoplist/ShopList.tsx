"use client";

import Image from "next/image";
import HomeClockSmall from "../icon/home/HomeClockSmall";
import HomeLocationSmall from "../icon/home/HomeLocationSmall";
import {
  DetailInfo,
  ShopDetailContainer,
  ShopDetailWrapper,
  ShopListContainer,
  TagInfo,
  TimeInfo,
} from "./ShopListStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShopListInfoTypes } from "@/types/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const ShopList = () => {
  const [shopInfo, setShopinfo] = useState([]);

  const getShopInfo = async () => {
    await axios("/api/shop/getInformation")
      // .then((res) => res.json())
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
    <>
      {/* <ShopListContainer> */}
      {/* <ShopDetailContainer>
          <Image src="" alt="shop-img" /> */}
      {shopInfo.map((item: ShopListInfoTypes, idx: number) => {
        return (
          <ShopListContainer key={idx}>
            <ShopDetailContainer>
              <Image src={item.imgURL} width="300" height="500" alt="shop" />
              <ShopDetailWrapper>
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
              </ShopDetailWrapper>
            </ShopDetailContainer>
          </ShopListContainer>
        );
      })}
      {/* <ShopDetailWrapper>
            <TagInfo>바로 수령</TagInfo>
          
            <h4>셀렉토 고대점</h4>
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
          </ShopDetailWrapper> */}
      {/* </ShopDetailContainer>
      </ShopListContainer> */}
      {/* </ShopListContainer> */}
    </>
  );
};
