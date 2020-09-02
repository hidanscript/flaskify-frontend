import React from 'react';

function ProductInfo(props) {
  return (
    <div className={"product-info " + props.variant}>
      <div className="product-info-title-container">
        <h4 className="text-white product-info__title">{props.title}</h4>
        <span className="text-white text-muted">{props.sort}</span>
      </div>
      <h3 className="text-white">0</h3>
      <svg className="product-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,229.3C480,256,600,224,720,192C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default ProductInfo;
