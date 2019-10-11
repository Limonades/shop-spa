import * as React from 'react';
import { connect } from 'react-redux';
import { ProductsCard } from '..';
import './index.scss';
import { fetchProducts } from '../../redux-modules/products/actions';

class ProductsGrid extends React.Component {
  componentDidMount() {
    const { getProducts, products } = this.props;
    if (products.length === 0) {
      getProducts();
    }
  }

  get products() {
    const { filteredProducts, products } = this.props;

    if (filteredProducts) {
      return filteredProducts;
    }

    return products;
  }

  render() {
    const { isFetching } = this.props;
    return (
      <ul className="products-grid">
        {isFetching ? (
          <p>...Loading</p>
        ) : (
          this.products.map(product => <ProductsCard key={product.id} {...product} />)
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  isFetching: state.products.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsGrid);
