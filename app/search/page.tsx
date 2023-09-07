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

const SearchPage = () => {
  const arr = ["아메리카노", "메가커피", "버블티", "바로수령"];
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
  return (
    <WholeContainer>
      <SearchContainer>
        <Search></Search>
        <CancleBtn>취소</CancleBtn>
      </SearchContainer>
      <RecentShopContainer>
        <Text>최근 검색 매장</Text>
        <ShopList />
        <div className="bottom-nav">
          <BottomNav />
        </div>
      </RecentShopContainer>
      <div>
        <RecentNav>
          <Text>최근 검색어</Text>
          <MiniButton fontSize={12}>전체 삭제</MiniButton>
        </RecentNav>
        {arr.map((item: string, idx: number) => {
          return (
            <RecentHistory>
              <div className="recent-words">
                <HomeHistory />
                <div className="search-word">{item}</div>
              </div>
              <div className="a">
                <HomeHistoryDelete />
              </div>
            </RecentHistory>
          );
        })}
      </div>
    </WholeContainer>
  );
};

export default SearchPage;
