'use client';

import {
  ShopDetailInfoTop,
  ShopTitleInfo,
  ShopDetailsContainer,
  ShopDetailsWholeContainer,
} from './style';
import { useRouter } from 'next/navigation';
import Button from '@/components/button/Button';
import ShopImg from '../shop-details/ShopImg.png';
import {
  BtnStyle,
  CardWrapper,
  SectionWrapper,
} from '@/components/order-list/style';

import { useState } from 'react';
import TabButton from '@/components/button/TabButton/TabButton';
import InfoDetails from '@/components/shop-information/InfoDetails';
import {
  IconStyle,
  IconTitle,
  IconWrapper,
} from '@/components/shop-information/style';
import ShopDetailLocation from '@/components/icon/shop/ShopDetailLocation';
import ShopDetailClock from '@/components/icon/shop/ShopDetailClock';
import ShopCalendar from '@/components/icon/shop/ShopCalendar';
import ShopShare from '@/components/icon/shop/ShopShare';
import ShopDetailCar from '@/components/icon/shop/ShopDetailCar';
import Image from 'next/image';
import ShopReviews from '@/components/shop-review/ShopReviews';

const ShopDetails = () => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);

  const tabArr = [
    { tabName: '정보', idx: 0 },
    { tabName: '리뷰', idx: 1 },
  ];
  console.log('currentTab', currentTab);

  return (
    <ShopDetailsWholeContainer>
      <Image
        src={ShopImg}
        alt='shopImg'
        width={375}
        height={280}
        className='shop-img'
      />
      <ShopDetailsContainer>
        {/* <Image src={ShopImg} alt='shopImg' width={375} height={320} /> */}
        <ShopTitleInfo>
          <div className='shop-name'>셀렉토 커피</div>
          <div className='shop-detail-content'>
            "합리적인 가격으로 맛 좋고 질 좋은 커피"
          </div>
        </ShopTitleInfo>
        <ShopDetailInfoTop>
          <IconWrapper>
            <IconStyle>
              <ShopDetailLocation />
            </IconStyle>
            <IconTitle>도보 7분</IconTitle>
          </IconWrapper>
          <IconWrapper>
            <IconStyle>
              <ShopDetailClock />
            </IconStyle>
            <IconTitle>바로 수령</IconTitle>
          </IconWrapper>
          <IconWrapper>
            <IconStyle>
              <ShopDetailCar />
            </IconStyle>
            <IconTitle>차량 2분</IconTitle>
          </IconWrapper>
          <IconWrapper>
            <IconStyle>
              <ShopShare />
            </IconStyle>
            <IconTitle>공유하기</IconTitle>
          </IconWrapper>
        </ShopDetailInfoTop>
        {/* <SectionWrapper> */}
        {/* 탭버튼 */}
        <TabButton
          tabArr={tabArr}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <CardWrapper>
          {currentTab === 0 ? <InfoDetails /> : <ShopReviews />}
          <div className='btn-style'>
            <Button
              width={335}
              radius='small'
              color='white'
              onClick={() => {
                router.push('/shop-info/');
              }}
            >
              간편등록 하기
            </Button>
          </div>
        </CardWrapper>
        {/* </SectionWrapper> */}
      </ShopDetailsContainer>
    </ShopDetailsWholeContainer>
  );
};

export default ShopDetails;
