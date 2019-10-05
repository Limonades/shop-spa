import * as React from "react";
import "./index.scss";

class ProductsSorter extends React.Component {
  render() {
    return (
      <div className='products-sorter'>
        <div className='products-sorter__title-wrap'>
          <h3 className='products-sorter__title'>
            <span>
              Sorting
            </span>
            <i className='icon-caret-down'></i>
            <i className='icon-caret-up'></i>
          </h3>
        </div>
        <ul className='products-sorter__list'>
          <li className='products-sorter__item'>
            <button className='products-sorter__btn'>
              blabla
            </button>
          </li>

          <li className='products-sorter__item'>
            <button className='products-sorter__btn'>
              ololo
            </button>
          </li>

          <li className='products-sorter__item'>
            <button className='products-sorter__btn'>
              uurur
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductsSorter;
