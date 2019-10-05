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
            <div className='products-grid__slider'>
              <div className='products-grid__slide' />
            </div>
            <div className='products-grid__card-content'>
              <h3 className='products-grid__category'>
                РУБАШКИ
              </h3>
              <p className='products-grid__name'>
                Рубашка с принтом
              </p>
              <div className='products-grid__info-wrap'>
                <h2 className='products-grid__price'>
                  $ 120
                </h2>
                <span className='products-grid__qty'>
                  на складе: 11
                </span>
              </div>
            </div>
          </a>
        </li>

        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <div className='products-grid__slider'>
              <div className='products-grid__slide' />
            </div>
            <div className='products-grid__card-content'>
              <h3 className='products-grid__category'>
                РУБАШКИ
              </h3>
              <p className='products-grid__name'>
                Рубашка с принтом Рубашка с принтом
              </p>
              <div className='products-grid__info-wrap'>
                <h2 className='products-grid__price'>
                  $ 120
                </h2>
                <span className='products-grid__qty'>
                  на складе: 11
                </span>
              </div>
            </div>
          </a>
        </li>

        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <div className='products-grid__slider'>
              <div className='products-grid__slide' />
            </div>
            <div className='products-grid__card-content'>
              <h3 className='products-grid__category'>
                РУБАШКИ
              </h3>
              <p className='products-grid__name'>
                Рубашка с принтом
              </p>
              <div className='products-grid__info-wrap'>
                <h2 className='products-grid__price'>
                  $ 120
                </h2>
                <span className='products-grid__qty'>
                  на складе: 11
                </span>
              </div>
            </div>
          </a>
        </li>

        <li className='products-grid__card'>
          <a className='products-grid__link' href="/">
            <picture className='products-grid__card-img'>
              <img src="http://placekitten.com/200/300" alt=""/>
            </picture>
            <div className='products-grid__slider'>
              <div className='products-grid__slide' />
            </div>
            <div className='products-grid__card-content'>
              <h3 className='products-grid__category'>
                Рубашка с принтом
              </h3>
              <p className='products-grid__name'>
                Рубашка с принтом
              </p>
              <div className='products-grid__info-wrap'>
                <h2 className='products-grid__price'>
                  $ 120
                </h2>
                <span className='products-grid__qty'>
                  на складе: 11
                </span>
              </div>
            </div>
          </a>
        </li>

      </ul>
    );
  }
}

export default ProductsGrid;
