import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

const Logo = () => {
  return (
    <strong className="logo">
      <Link to="/">
        <i className="fas fa-bullhorn"></i>
        <span>SingIT</span>
      </Link>
    </strong>
  );
};

export default Logo;
