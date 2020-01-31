import React from 'react';
// import './Hero.css';

const Hero = ({ products }) => (
	<div className="i-featured-wrapper">
			{products &&  products.map(item=>(
				<div className="i-featured-product" key={item.productId}>
					<img src={item.image.sourceUrl}/>
					<div className="i-wrapper h-100">
						<div className="product-details">
							<h2>{item.name}</h2>
							<p>{item.shortDescription}</p>
						</div>
					</div>
				</div>
			))}
      <style jsx>
        {
          `
          .i-featured-wrapper {
            width: 100%;
            height: 400px;
            overflow: hidden;
          }
          .i-featured-product {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .i-featured-product img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }

          .i-featured-product .product-details {
            position: absolute;
            bottom: 60px;
            right: 10%;
            z-index: 1;
            color: #000;
          }

          .i-featured-product .product-details::after {
            content: '';
            background: rgba(255, 255, 255, 0.2);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          `
        }
      </style>
	</div>
);

export default Hero;
