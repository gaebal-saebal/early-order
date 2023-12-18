import styled from 'styled-components';

const SectionWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 338px;
  position: relative;
  bottom: 150px;
  background-color: white;
  z-index: 999;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);

  .top-btn-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .top-btn {
    width: 44px;
    height: 4px;
    flex-shrink: 0;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.GRAY_DF};
  }

  .list-info {
    /* width: 325px; */
    margin: 10px 0 5px 50px;
  }
`;

const BtnStyle = styled.ul`
  display: flex;
  padding: 15px 58px 0px 58px;
  height: 30px;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.GRAY_F3};
  list-style: none;
  button {
    border: none;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.BLACK_11};
    cursor: pointer;
    padding-bottom: 29px;
  }
  .clicked-tab {
    border-bottom: 2px solid ${({ theme }) => theme.colors.BLACK_11};
  }
  .tab > button {
    color: ${({ theme }) => theme.colors.GRAY_A3};
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  height: 200px;

  /* .list-info {
    display: flex;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.GRAY_78};
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
  }

  .text {
    text-align: center;
    margin-left: 3px;
  } */

  .shop-card-wrapper {
    width: 100%;
    display: flex;
    /* align-items: center;
    justify-content: center; */
  }
  .btn-style {
    margin: 30px 0;
  }
`;

const SimpleOrderSection = styled.div`
  margin-top: 35px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 137%;
    margin-bottom: 10px;
  }
`;

export { BtnStyle, CardWrapper, SectionWrapper, SimpleOrderSection };
