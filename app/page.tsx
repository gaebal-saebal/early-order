import NaverMap from '@/components/NaverMap';
import NaverSearch from '@/components/NaverSearch';
import { MiniButton } from '@/components/button/MiniButton';
import {
  CardWrapper,
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
import { ShopCard } from '@/components/shoplist/ShopCard';
import HomeInfo from '@/components/icon/home/HomeInfo';

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
        <NaverMap lat={37.579272} lng={126.9860833} />
      </FilterContainer>
      <OrderSection>
        <div className='top-btn-wrapper'>
          <div className='top-btn'></div>
        </div>
        <OrderBtn>
          <button className='order-left-btn'>리스트로 주문</button>
          <button className='order-right-btn'>간편 주문</button>
        </OrderBtn>
        <CardWrapper>
          <div className='list-info'>
            <HomeInfo />
            <div className='text'> 가장 가까운 매장 순서로 정렬합니다.</div>
          </div>
          <div className='shop-card-wrapper'>
            <ShopCard />
          </div>
        </CardWrapper>
      </OrderSection>
    </main>
  );
}
