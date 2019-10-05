import * as React from "react";
import "./index.scss";

class ProductsNav extends React.Component {
  render() {
    return (
      <nav className='products-nav'>
        <ul className='products-nav__list'>
          <li className='products-nav__item'>
            <a className='products-nav__link' href="/">
              nav item
            </a>
          </li>

          <li className='products-nav__item'>
            <a className='products-nav__link' href="/">
              nav item
            </a>
          </li>

          <li className='products-nav__item'>
            <a className='products-nav__link' href="/">
              nav item
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProductsNav;
