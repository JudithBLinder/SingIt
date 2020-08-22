import React, { useState } from 'react';

import './banner.scss';

const Banner = ({ slogan, title, imgSrc, imgAlt }) => {

  const [align] = useState('left');

  return (
    <div className={`row banner banner-${align} border-bottom`}>
      {imgSrc && (
        <img alt={imgAlt} src={imgSrc} className="img-fluid col-md-6" />
      )}
    </div>
  );
};

export default Banner;
