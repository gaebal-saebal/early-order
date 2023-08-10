'use client';

import Image from 'next/image';
import HomeClockSmall from '../icon/home/HomeClockSmall';
import HomeLocationSmall from '../icon/home/HomeLocationSmall';

import {
  DetailInfo,
  ShopDetailContainer,
  ShopDetailWrapper,
  ShopListContainer,
  TagInfo,
  TimeInfo,
} from './ShopListStyle';
export const ShopList = () => {
  return (
    <>
      <ShopListContainer>
        <ShopDetailContainer>
          <Image src='' alt='shop-img' />
          <ShopDetailWrapper>
            <TagInfo>바로 수령</TagInfo>
            <h4>셀렉토 고대점</h4>
            <DetailInfo>
              <div className='datail-wrapper'>
                <HomeLocationSmall />
                <p>도보 5분</p>
              </div>
              <div className='datail-wrapper'>
                <HomeClockSmall />
                <p>바로 수령</p>
              </div>
            </DetailInfo>
            <TimeInfo>
              <p className='open-status'>영업 중</p>
              <p className='lastorder-time'>21:00 라스트오더</p>
            </TimeInfo>
          </ShopDetailWrapper>
        </ShopDetailContainer>
      </ShopListContainer>
    </>
  );
};
