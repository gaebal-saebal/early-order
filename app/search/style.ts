"use client";
import theme from "@/theme/theme";
import { styled } from "styled-components";

export const WholeContainer = styled.div`
  margin: 0;
  padding: 0 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: row; */
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.GRAY_64};
`;

export const RecentShopContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: column;
  justify-content: center;

  .bottom-nav {
    display: flex;
    margin-top: 22px;
    align-items: center;
    justify-content: center;
  }
  .history-delete-btn {
    cursor: pointer;
  }
`;
export const RecentNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const RecentHistory = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;

  .recent-words {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 24px;
    vertical-align: top;
  }
  .search-word {
    margin-left: 10px;
  }
  .delete-btn {
    cursor: pointer;
    border: 0;
    background: none;
  }
`;

export const CancleBtn = styled.button`
  /* display: inline-block; */
  cursor: pointer;
  /* flex-direction: row; */
  width: 40px;
  align-items: center;
  padding-inline: 0;
  margin-left: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.BLACK_11};
  border: 0;
  background-color: transparent;
`;
