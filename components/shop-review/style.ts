import styled from 'styled-components';
import { Tag } from '../tag/Tag';

export const ReviewsContainer = styled.div`
  display: flex;
  /* overflow: auto; */
  /* height: 100%; */
  /* width: 100%; */
  /* margin-left: 20px; */
  flex-direction: column;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* justify-content: center; */
  .profile-img {
    border-radius: 50%;
  }
  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.BLACK_11};
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const ReviewWrapper = styled.div`
  margin-top: 12px;
  overflow-x: scroll;
  .menu-name {
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.BLACK_11};
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }
  .reviews {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.BLACK_11};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  .review-img-wrapper {
    /* display: flex;
    width: 100%;
    justify-content: center; */
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-top: 17px;
`;

export const ReviewTag = styled.div`
  margin-right: 7.5px;
  display: flex;
  width: 63px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY_DF};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 4px;
    font-size: 17px;
    font-weight: 500;
    line-height: 30px;
  }
`;
