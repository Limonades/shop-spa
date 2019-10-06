import * as React from "react";
import { ProductsCard } from "../";
import "./index.scss";
import {fetchProducts} from "../../redux-modules/products/actions";
import {connect} from "react-redux";

class ProductsGrid extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    getProducts()
  }

  get products() {
      if (this.props.filteredProducts) {
        return this.props.filteredProducts
      } else {
        return this.props.products
      }
  }

  render() {
    const { isFetching } = this.props;
    return (
      <ul className="products-grid">
        {isFetching ? <p>...Loading</p> : this.products.map(product => <ProductsCard key={product.id} {...product}/>)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  isFetching: state.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  getProducts:()  => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsGrid);
