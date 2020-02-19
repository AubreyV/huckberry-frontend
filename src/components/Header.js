import React from 'react';
import Announcement from './Announcement';
import Banner from './Banner';
import NavContainer from './NavContainer';

import '../styles/Utilities.css';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <Announcement />
      <div className="container">
        <Banner />
        <hr/>
        <NavContainer />
      </div>
    </div>
  );
}

export default Header;
