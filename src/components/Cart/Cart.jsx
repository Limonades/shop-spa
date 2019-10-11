import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import close from '../../assets/imgs/close.svg';
import { decreaseQuantity, increaseQuantity } from '../../redux-modules/cart/actions';

class Cart extends React.Component {
  render() {
    const { cart, increase, decrease, cartToggle, isEmpty } = this.props;
    return (
      <aside className="cart">
        <button onClick={cartToggle} className="cart__close-btn" type="button">
          <img className="" src={close} alt="" />
        </button>

        {isEmpty.length ? (
          <ul className="cart__product-list">
            {cart.map(item => (
              <li className="cart__product-item" key={item.id}>
                <picture className="cart__product-img">
                  <img src={process.env.PUBLIC_URL + item.image} alt="product" />
                </picture>
                <div className="cart__product-info-wrap">
                  <p className="cart__product-title">{item.title}</p>
                  <div className="cart__product-qty-info">
                    <div>
                      <button
                        className="cart__product-qty-btn --minus"
                        type="button"
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="cart__product-qty-btn --plus"
                        type="button"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <span>$ {item.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="cart__empty-msg">В вашей корзине пусто..</p>
        )}

        <div className="cart__total-info">
          <p>Итого:</p>
          <p>
            ${' '}
            {cart.reduce((acc, val) => {
              acc += val.price * val.qty;

              return acc;
            }, 0)}
          </p>
        </div>
        {isEmpty.length ? (
          <div className="cart__buy-btn-wrap">
            <button type="button">Купить</button>
          </div>
        ) : null}
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  increase: id => dispatch(increaseQuantity(id)),
  decrease: id => dispatch(decreaseQuantity(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
