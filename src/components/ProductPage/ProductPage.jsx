import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Header } from '../Header';
import { fetchProducts, selectProduct } from '../../redux-modules/products/actions';
import { addToCart } from '../../redux-modules/cart/actions';

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: '',
    };
  }

  componentDidMount() {
    const {
      selectedItem,
      match: {
        params: { id },
      },
      getProducts,
      selectCurrentProduct,
    } = this.props;

    if (!selectedItem && id) {
      getProducts();
      selectCurrentProduct(id);
    }
  }

  handleChange = ev => {
    this.setState({ size: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { addProductToCart, selectedItem } = this.props;

    addProductToCart({ ...selectedItem, qty: 1 });
  };

  render() {
    const { selectedItem } = this.props;
    const { size } = this.state;
    const createMarkup = text => ({ __html: text });

    return (
      <>
        {selectedItem ? (
          <>
            <Header />
            <form className="container" onSubmit={this.handleSubmit}>
              <div className="image">
                <img src="http://placekitten.com/450/800" alt="somealt" />
              </div>
              <div className="description">
                <Link to="/">Назад</Link>
                <div>{selectedItem.category.name}</div>
                <div>{selectedItem.title}</div>
                <select onChange={this.handleChange}>
                  <option value="" defaultValue>
                    Размер
                  </option>
                  {selectedItem.sizes.map((selectedSize, index) => (
                    <option key={index} value={selectedSize}>
                      {selectedSize}
                    </option>
                  ))}
                </select>
                <button type="submit" disabled={!size}>
                  В Корзину
                </button>
                <div dangerouslySetInnerHTML={createMarkup(selectedItem.description)} />
              </div>
            </form>
          </>
        ) : null}
      </>
    );
  }
}

const mapStateToProps = state => {
  const { selectedId, items } = state.products;
  const selectedItem = items.reduce((acc, val) => {
    if (val.id === selectedId) {
      acc = val;
    }
    return acc;
  }, null);

  return {
    selectedItem,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(fetchProducts()),
  selectCurrentProduct: id => dispatch(selectProduct(id)),
  addProductToCart: product => dispatch(addToCart(product)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductPage)
);
