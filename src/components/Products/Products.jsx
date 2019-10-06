import * as React from 'react';
import './index.scss';
import { ProductsNav, ProductsSorter, ProductsGrid } from '..';

class Products extends React.Component {
  render() {
    return (
      <section className="products">
        <div className="products__container container">
          <div className="products__nav-wrap">
            <ProductsNav />
            <ProductsSorter />
          </div>
          <div className="products__products-wrap">
            <ProductsGrid />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
