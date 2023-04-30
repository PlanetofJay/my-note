import React from 'react';
import { GrSearchAdvanced } from 'react-icons/gr';

const SearchNote = () => {
  return (
    <div className='search'>
      <GrSearchAdvanced className='search-icons' size='1.3em' />
      <input type='text' placeholder='type to search...' />
    </div>
  );
};

export default SearchNote;