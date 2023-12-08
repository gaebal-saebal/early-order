import React from 'react';
import HomeInfo from '../icon/home/HomeInfo';
import { ListInfoStyle } from './ListInfoStyle';

const ListInfo = () => {
  return (
    <ListInfoStyle>
      <HomeInfo />
      <div className='text'> 가장 가까운 매장 순서로 정렬합니다.</div>
    </ListInfoStyle>
  );
};

export default ListInfo;
