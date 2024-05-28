import React from 'react';

const Header = ({ handleDarkMode }) => {
  return (
    <div className='header'>
      <h1>Noti</h1>
      <button 
        onClick={() => 
          handleDarkMode(
            (prevDarkMode) => !prevDarkMode 
          )
        }
        className='btn'
      >
        Dark / Light
      </button>
    </div>
  );
};

export default Header;