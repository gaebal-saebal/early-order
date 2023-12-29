'use client';
import React, { ChangeEvent, useState } from 'react';
import { SearchStyle, InputContainer, DeleteButton } from './SearchStyle';
import HomeSearch from '../icon/home/HomeSearch';
import HomeDelete from '../icon/home/HomeDelete';
import router from 'next/router';
import { usePathname, useRouter } from 'next/navigation';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  // const pathname = usePathname()
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleInputClick();
    }
  };

  const handleInputClick = () => {
    setIsClicked(true);
    router.push('/search');
  };

  const handleDelete = () => {
    setSearchText('');
  };

  return (
    <InputContainer isClicked={isClicked}>
      <HomeSearch />
      <SearchStyle
        type='text'
        placeholder='매장, 위치로 검색하세요'
        onChange={handleInputChange}
        value={searchText}
        onKeyDown={(e) => {
          handleOnKeyPress(e);
        }}
        onClick={handleInputClick}
      />
      <DeleteButton onClick={handleDelete}>
        {searchText.length > 0 ? <HomeDelete /> : ''}
      </DeleteButton>
    </InputContainer>
  );
};

export default Search;
