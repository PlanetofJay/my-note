import React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchNote = () => {
  return (
    <div className='search'>
      <HiSearch className='search-icons' size='1.3em' />
      <input type='text' placeholder='type to search...' />
    </div>
  );
};

export default SearchNote;