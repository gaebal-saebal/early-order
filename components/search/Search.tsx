'use client';
import React, { ChangeEvent, useState } from 'react';
import SearchStyle from './SearchStyle';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleInputClick = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <SearchStyle
        type='text'
        placeholder='매장, 위치로 검색하세요'
        onChange={handleInputChange}
        value={searchText}
        onClick={handleInputClick}
        isClicked={isClicked}
      />
    </div>
  );
};

export default Search;
