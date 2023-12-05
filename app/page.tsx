import NaverMap from '@/components/NaverMap';
import NaverSearch from '@/components/NaverSearch';
import { MiniButton } from '@/components/button/MiniButton';
import {
  FilterBtn,
  FilterContainer,
  FilterWrapper,
  HomeLoactionContainer,
  HomeNav,
  LocationIcon,
  OrderBtn,
  OrderSection,
  UnderArrow,
} from '@/components/homeFilterGroup/style';
import HomeFilter from '@/components/icon/home/HomeFilter';
import HomeFilterClock from '@/components/icon/home/HomeFilterClock';
import HomeFilterLocation from '@/components/icon/home/HomeFilterLocation';
import HomeFilterPopular from '@/components/icon/home/HomeFilterPopular';
import HomeFilterPrice from '@/components/icon/home/HomeFilterPrice';
import HomeLocationBottomArrow from '@/components/icon/home/HomeLoactionBottomArrow';
import Search from '@/components/search/Search';
import { SearchContainer } from './search/style';
import { ShopList } from '@/components/shoplist/ShopList';

export default function Home() {
  return (
    <main>
      <HomeNav>
        <HomeLoactionContainer>
          <LocationIcon>
            <HomeFilterLocation />
          </LocationIcon>
          <span>성북구 고려대로 24길 51</span>
          <UnderArrow>
            <HomeLocationBottomArrow />
          </UnderArrow>
        </HomeLoactionContainer>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </HomeNav>
      <FilterContainer>
        <FilterWrapper>
          <FilterBtn>
            <HomeFilter />
          </FilterBtn>
          <FilterBtn>
            <HomeFilterLocation /> 위치
          </FilterBtn>
          <FilterBtn>
            <HomeFilterPrice /> 가격순
          </FilterBtn>
          <FilterBtn>
            <HomeFilterClock /> 픽업시간
          </FilterBtn>
          <FilterBtn>
            <HomeFilterPopular /> 인기
          </FilterBtn>
        </FilterWrapper>
        <NaverMap lat={37.3595704} lng={127.105399} />
      </FilterContainer>
      <OrderSection>
        <OrderBtn>
          <button>리스트로 주문</button>
          <button>간편 주문</button>
        </OrderBtn>
      </OrderSection>
      <ShopList />
    </main>
  );
}
