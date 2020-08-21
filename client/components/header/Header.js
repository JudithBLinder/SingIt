import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/Logo';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="border-bottom d-flex justify-content-between align-items-center py-2 pl-3">
          <Logo />
        </div>
        <div className="border-bottom d-flex justify-content-between align-items-center py-3">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
