import React from 'react';
import { WrapperHeader } from './styled';

const Header = ({theme, toggleDarkMode}) => {
  
  return (
      <WrapperHeader theme={theme}>
        <div className="container">
          <h1 className="title">Where is the word?</h1>
          <div role="button" className="button" onClick={toggleDarkMode}>
            <i className="fas fa-moon"></i>
            {theme.dark ? ' Light' : ' Dark'} Mode
          </div>
        </div>
      </WrapperHeader>
  );
};

export default Header;
