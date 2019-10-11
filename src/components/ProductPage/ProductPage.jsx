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
            <form className="product-page__container container" onSubmit={this.handleSubmit}>
              <div className="product-page__photo-wrap">
                <img src={selectedItem.image} alt="product" />
              </div>
              <div className="product-page__description-wrap">
                <Link class="product-page__back-btn" to="/">
                  <i className="icon-caret-left-thin" />
                  <span>Назад</span>
                </Link>
                <div className="product-page__info-wrap">
                  <h3 className="product-page__category">{selectedItem.category.name}</h3>
                  <h2 className="product-page__name">{selectedItem.title}</h2>
                  <div className="product-page__attr-wrap">
                    <div className="product-page__form-el-wrap">
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
                    </div>
                    <button
                      className="product-page__form-el-wrap product-page__buy-btn"
                      type="submit"
                      disabled={!size}
                    >
                      В Корзину
                    </button>
                  </div>
                </div>
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
