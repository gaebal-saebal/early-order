'use client';

import Image from 'next/image';
import mapImg from '../shop-information/image.png';
import NaverMap from '../NaverMap';
import {
  MapContainer,
  ShopInfoContainer,
  ShopInfoContent,
  ShopInfoTitle,
  ShopInfoWrapper,
} from './style';
import ShopAlram from '../icon/shop/ShopAlram';
import ShopCalendar from '../icon/shop/ShopCalendar';
import ShopCall from '../icon/shop/ShopCall';
import ShopLocationSmall from '../icon/shop/ShopLocationSmall';

const InfoDetails = () => {
  return (
    <ShopInfoContainer>
      <ShopInfoWrapper>
        <ShopInfoTitle>
          <div className='hour-info'>
            <ShopAlram />
            <span>운영시간</span>
          </div>
          <div>
            <ShopCalendar />
            <span>휴무일</span>
          </div>
          <div>
            <ShopCall />
            <span>전화번호</span>
          </div>
        </ShopInfoTitle>
        <ShopInfoContent>
          <span>월-금 11:00 - 18:00 </span>
          <span>토-일 08:00 - 22:00</span>
          <span>없음</span>
          <span>02-1234-5678</span>
        </ShopInfoContent>
      </ShopInfoWrapper>
      <MapContainer>
        <Image src={mapImg} alt='img' width={375} height={235} />
      </MapContainer>
      {/* <NaverMap lat={37.579272} lng={126.9860833} /> */}
      <ShopInfoWrapper>
        <ShopInfoTitle>
          <div>
            <ShopLocationSmall />
            <span>주소</span>
          </div>
        </ShopInfoTitle>
        <ShopInfoContent>
          <span className='adress'>서울 강남구 봉은사로 37길</span>
        </ShopInfoContent>
      </ShopInfoWrapper>
    </ShopInfoContainer>
  );
};

export default InfoDetails;
