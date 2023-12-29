import { BtnStyle } from '@/components/order-list/style';
import { useState } from 'react';

interface TabButtonProps {
  tabArr: { tabName: string; idx: number }[];
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabButton = ({
  tabArr,
  currentTab,
  setCurrentTab,
}: {
  tabArr: TabButtonProps['tabArr'];
  currentTab: TabButtonProps['currentTab'];
  setCurrentTab: TabButtonProps['setCurrentTab'];
}) => {
  // const [currentTab, setCurrentTab] = useState(0);
  const onClick = (e: React.MouseEvent, i: number) => {
    console.log(e);
    setCurrentTab(i);
  };
  return (
    <BtnStyle>
      {tabArr.map((tab, idx) => {
        return (
          <li className={currentTab === idx ? 'clicked-tab' : 'tab'}>
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
    </BtnStyle>
  );
};

export default TabButton;
