'use client';

import { MouseEvent, useState } from 'react';
import HomeInfo from '../icon/home/HomeInfo';
import { ShopCard } from '../shoplist/ShopCard';
import {
  OrderSection,
  OrderBtn,
  CardWrapper,
  SimpleOrderSection,
} from './style';
import OrderSimple from '../icon/order/OrderSimple';
import Button from '../button/Button';
// import { useRouter } from 'next/router';
import { usePathname, useRouter } from 'next/navigation';
import ListInfo from '../shoplist/ListInfo';

const OrderList = () => {
  const [curretTab, setCurrentTab] = useState(0);
  const router = useRouter();

  const tabArr = [
    { tabName: '리스트로 주문', idx: 0 },
    { tabName: '간편 주문', idx: 1 },
  ];
  const onClick = (e: React.MouseEvent, i: number) => {
    console.log(e);
    setCurrentTab(i);
  };

  return (
    <OrderSection>
      <div className='top-btn-wrapper'>
        <div className='top-btn'></div>
      </div>
      <OrderBtn>
        {tabArr.map((tab, idx) => {
          return (
            <li className={curretTab === idx ? 'clicked-tab' : 'tab'}>
              <button
                onClick={(e) => {
                  onClick(e, idx);
                }}
              >
                {tab.tabName}
              </button>
            </li>
          );
        })}
      </OrderBtn>
      <CardWrapper>
        {curretTab === 0 ? (
          <>
            {/* <div className='list-info'>
              <HomeInfo />
              <div className='text'> 가장 가까운 매장 순서로 정렬합니다.</div>
            </div> */}
            <ListInfo />
            <ShopCard />
          </>
        ) : (
          <SimpleOrderSection>
            <OrderSimple />
            <span>빠르게 주문해보세요!</span>
            {/* <link href='/simple-order'> */}
            <Button
              width={189}
              color='white'
              onClick={() => {
                router.push('/simple-order');
              }}
            >
              바로 등록하기
            </Button>
            {/* </link> */}
          </SimpleOrderSection>
        )}
        {/* </div> */}
      </CardWrapper>
    </OrderSection>
  );
};

export default OrderList;
