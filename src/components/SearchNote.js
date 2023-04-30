import React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <HiSearch className='search-icons' size='1.3em' />
      <input 
        onChange={(e) => 
          handleSearchNote(e.target.value)
        } 
        type='text' 
        placeholder='type to search...' 
      />
    </div>
  );
};

export default SearchNote;