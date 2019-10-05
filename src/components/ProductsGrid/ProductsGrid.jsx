import * as React from "react";
import "./index.scss";

class ProductsGrid extends React.Component {
  render() {
    return (
      <ul className='products-grid'>
        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <h3 className='products-grid__category'>
              rybashki
            </h3>
            <p className='products-grid__name'>
              name
            </p>
            <div className='products-grid__info-wrap'>
              <h2 className='products-grid__price'>
                3grn
              </h2>
              <span>
                na sklade net nihera
              </span>
            </div>
          </a>

          <div className='products-grid__slider'>
            <div className='products-grid__slide' />
          </div>
        </li>

        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <h3 className='products-grid__category'>
              rybashki
            </h3>
            <p className='products-grid__name'>
              name
            </p>
            <div className='products-grid__info-wrap'>
              <h2 className='products-grid__price'>
                3grn
              </h2>
              <span>
                na sklade net nihera
              </span>
            </div>
          </a>

          <div className='products-grid__slider'>
            <div className='products-grid__slide' />
          </div>
        </li>

        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <h3 className='products-grid__category'>
              rybashki
            </h3>
            <p className='products-grid__name'>
              name
            </p>
            <div className='products-grid__info-wrap'>
              <h2 className='products-grid__price'>
                3grn
              </h2>
              <span>
                na sklade net nihera
              </span>
            </div>
          </a>

          <div className='products-grid__slider'>
            <div className='products-grid__slide' />
          </div>
        </li>

      </ul>
    );
  }
}

export default ProductsGrid;
