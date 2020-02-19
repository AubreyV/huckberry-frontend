import React from 'react';
import { ReactComponent as Logo } from '../assets/huckberry-logo.svg';
import { ReactComponent as IconBag } from '../assets/icon-bag.svg';

import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner d-flex">
      <div className="row d-flex align-items-center">
        <div className="col-4"></div>
        <div className="col-4">
          <a href="#"><Logo /></a>
        </div>
        <div className="col-4">
          <ul className="links d-flex align-items-center">
            <li className="mr-20">
              <div className="d-flex align-items-center">
                <a href="#" className="mr-3">Subscribe</a>
                <img src={"https://huckberry.com/assets/images/shared/button-icon-email-17a48a6cb74c340048a50f3d5e8c1ee0.svg"} style={{'height': '1em'}}/>
              </div>
            </li>
            <li className="mr-20">
              <div>
                <a>Log In</a>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center">
                <IconBag className="mr-3" style={{ 'width': '40%' }}/>
                <span>(0)</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;