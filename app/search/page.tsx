"use client";

import Button from "@/components/button/Button";
import Search from "@/components/search/Search";
import { ShopList } from "@/components/shoplist/ShopList";
import HomeHistory from "@/components/icon/home/HomeHistory";
import HomeDelete from "@/components/icon/home/HomeDelete";
import HomeHistoryDelete from "@/components/icon/home/HomeHistoryDelete";
import theme from "@/theme/theme";
import {
  CancleBtn,
  RecentHistory,
  RecentNav,
  RecentShopContainer,
  SearchContainer,
  Text,
  WholeContainer,
} from "./style";
import { MiniButton } from "@/components/button/MiniButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShopListInfoTypes } from "@/types/interface";
import Carousel from "@/components/carousel/Carousel";
import "swiper/css";
import Link from "next/link";

const SearchPage = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [iseDeleted, setIsDeleted] = useState(false);
  const [removeAll, setRemoveAll] = useState(false);
  // 최근 검색어
  const getSearchHistory = () => {
    // db 구축되면 url 변경 예정
    axios("/api/shop/getInformation")
      .then((res) => {
        setSearchHistory(res.data);
        console.log("#recentData", res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSearchHistory();
  }, []);
  const BottomNav = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="6"
      viewBox="0 0 35 6"
      fill="none"
    >
      <circle cx="3.5" cy="3" r="3" fill="black" />
      <circle cx="17.5" cy="3" r="3" fill="#E6E6E6" />
      <circle cx="31.5" cy="3" r="3" fill="#E6E6E6" />
    </svg>
  );
  const handleCancleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // db 구축시 추후 변경 예정
    if (e.target) {
      setRemoveAll(true);
    }
  };

  const handleDeleteSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("##", e);
    console.log("###", e.target);

    if (e.target) {
      setIsDeleted(true);
      console.log("#isDelete", iseDeleted);
    }
    // setIsDeleted(true);
  };

  return (
    <WholeContainer>
      <SearchContainer>
        <Search />
        <Link href={"/"} className="link">
          <CancleBtn>취소 </CancleBtn>
        </Link>
      </SearchContainer>
      <RecentShopContainer>
        <Text>최근 검색 매장</Text>
        <ShopList />
      </RecentShopContainer>
      <div>
        <RecentNav>
          <Text>최근 검색어</Text>
          <MiniButton fontSize={12} onClick={handleCancleSearch}>
            전체 삭제
          </MiniButton>
        </RecentNav>
        {/* 연습 */}
        <Carousel />
        {!removeAll
          ? searchHistory.map((item: ShopListInfoTypes, idx: number) => {
              return (
                <RecentHistory key={idx}>
                  <div className="recent-words">
                    <HomeHistory />
                    <div className="search-word">{item.name}</div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={handleDeleteSearch(idx)}
                  >
                    <HomeHistoryDelete />
                  </button>
                </RecentHistory>
              );
            })
          : null}
      </div>
    </WholeContainer>
  );
};

export default SearchPage;
