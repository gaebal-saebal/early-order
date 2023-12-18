import React from 'react';
import { SimpleOrderContainer, SimpleOrderNav, SimpleShopList } from './style';
import BackButton from '@/components/button/BackButton';
import Search from '@/components/search/Search';
import { ShopCard } from '@/components/shoplist/ShopCard';
import ListInfo from '@/components/shoplist/ListInfo';

const SimpleOrderPage = () => {
  return (
    <SimpleOrderContainer>
      <SimpleOrderNav>
        <div className='simple-nav-top'>
          <div className='content'>
            <BackButton />
          </div>
          <span className='content'>매장 선택</span>
        </div>
        <div className='simple-nav-search'>
          <Search />
        </div>
      </SimpleOrderNav>
      <SimpleShopList>
        <ListInfo />
        <ShopCard />
      </SimpleShopList>
    </SimpleOrderContainer>
  );
};

export default SimpleOrderPage;
