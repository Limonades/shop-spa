import * as React from "react";
import { ProductsCard } from "../";
import "./index.scss";

class ProductsGrid extends React.Component {
  render() {
    return (
      <ul className="products-grid">
        <ProductsCard />
      </ul>
    );
  }
}

export default ProductsGrid;
