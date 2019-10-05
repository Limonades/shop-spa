import * as React from "react";
import "./index.scss";

class ProductsSorter extends React.Component {
  render() {
    return (
      <div className="products-sorter">
        <div className="products-sorter__toggle-wrap">
          <button className="products-sorter__toggle --open">
            <span className='products-sorter__toggle-txt'>Сортировать</span>
            <i className="products-sorter__toggle-icon icon-caret-down" />
          </button>
          <ul className="products-sorter__list">
            <li className="products-sorter__item">
              <button className="products-sorter__btn">
                От дорогих к дешевым
              </button>
            </li>

            <li className="products-sorter__item">
              <button className="products-sorter__btn">
                От дешевых к дорогим
              </button>
            </li>

            <li className="products-sorter__item">
              <button className="products-sorter__btn">Популярные</button>
            </li>

            <li className="products-sorter__item">
              <button className="products-sorter__btn">Новые</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsSorter;
