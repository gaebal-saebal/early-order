'use client';
import { styled } from 'styled-components';

const HomeNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  padding: 0 20px;
`;

const HomeLoactionContainer = styled.div`
  display: flex;
  /* margin-left: 20px; */
  margin-bottom: 14px;
  span {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.BLACK_11};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  svg {
    width: 18px;
    height: 18px;
  }
`;
const FilterContainer = styled.div`
  position: relative;
`;

const UnderArrow = styled.div`
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

const FilterWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  z-index: 2;
  justify-content: space-around;
  /* position: absolute; */
`;

const FilterBtn = styled.button`
  padding: 7px 10px;
  border-radius: 20px;
  border: 1px solid var(--line, #dfdfdf);
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  /* position: absolute;
  z-index: 1; */
`;

const OrderSection = styled.div`
  /* border: 1px solid black; */
  display: flex;
  width: 100%;
  height: 338px;
  position: relative;
  bottom: 150px;
  background-color: white;
  z-index: 999;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const OrderBtn = styled.div`
  display: flex;
  width: 100%;
  padding: 35px 58px 9px 58px;
  height: 30px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.GRAY_F3};
  button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.BLACK_11};
  }
`;
const CardWrapper = styled.div`
  display: flex;
`;

export {
  HomeNav,
  OrderBtn,
  CardWrapper,
  SearchContainer,
  LocationIcon,
  HomeLoactionContainer,
  UnderArrow,
  FilterContainer,
  FilterWrapper,
  FilterBtn,
  OrderSection,
};
