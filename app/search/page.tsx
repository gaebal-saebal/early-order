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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ShopListInfoTypes } from "@/types/interface";
import "swiper/css";
import Link from "next/link";
import { SwiperSlider } from "@/components/Swiper/SwiperSlider";
import { SwiperSlideItem } from "@/components/Swiper/SwiperSlideItem";

const SearchPage = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [iseDeleted, setIsDeleted] = useState(false);
  const [removeAll, setRemoveAll] = useState(false);
  const history = useRef(null);
  console.log("#searchHistory", searchHistory);
  console.log("#history", history);
  // 최근 검색어
  const getSearchHistory = () => {
    // db 구축되면 url 변경 예정
    axios("/api/shop/getInformation")
      .then((res) => {
        setSearchHistory(res.data);
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
  const handleCancleSearch = (e: React.ChangeEvent<HTMLButtonElement>) => {
    // db 구축시 추후 변경 예정
    if (e.target) {
      setRemoveAll(true);
    }
  };

  const handleDeleteSearch = (id: string) => {
    setSearchHistory(
      searchHistory.filter((shop: ShopListInfoTypes) => {
        return shop._id !== id;
      })
    );
  };

  const BackBtn = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M9 1L2 8L9 15"
        stroke="#646464"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
  return (
    <WholeContainer>
      <SearchContainer>
        <Link style={{ marginRight: "25px" }} href={"/"}>
          {BackBtn}
        </Link>
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
        {!removeAll
          ? searchHistory.map((item: ShopListInfoTypes, idx: number) => {
              return (
                <RecentHistory key={item._id}>
                  <div className="recent-words" ref={history}>
                    <HomeHistory />
                    <div className="search-word">{item.name}</div>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      handleDeleteSearch(item._id);
                    }}
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
