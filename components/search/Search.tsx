'use client';
import React, { ChangeEvent, useState } from 'react';
import { SearchStyle, InputContainer, DeleteButton } from './SearchStyle';
import HomeSearch from '../icon/home/HomeSearch';
import HomeDelete from '../icon/home/HomeDelete';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleInputClick = () => {
    setIsClicked(true);
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
        onClick={handleInputClick}
      />
      <DeleteButton onClick={handleDelete}>
        {searchText.length > 0 ? <HomeDelete /> : ''}
      </DeleteButton>
    </InputContainer>
  );
};

export default Search;
