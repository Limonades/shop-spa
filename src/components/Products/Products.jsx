import * as React from "react";
import "./index.scss";
import { ProductsNav } from "../";
import { ProductsSorter } from "../";
import { ProductsGrid } from "../";

class Products extends React.Component {
  render() {
    return (
      <section className='products'>
        <div className="products__container container">
          <div className='products__nav-wrap'>
            <ProductsNav />
            <ProductsSorter />
          </div>
          <div className='products__products-wrap'>
            <ProductsGrid />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
