import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../redux-modules/cart/actions';

class Cart extends React.Component {
  render() {
    const { cart, increase, decrease } = this.props;
    return (
      <div>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <picture>
                <img src={process.env.PUBLIC_URL + item.image} alt="huyalt" />
              </picture>
              <p>{item.title}</p>
              <button type="button" onClick={() => decrease(item.id)}>
                -
              </button>
              {item.qty}
              <button type="button" onClick={() => increase(item.id)}>
                +
              </button>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>
        <p>
          Итого:{' '}
          {cart.reduce((acc, val) => {
            acc += val.price * val.qty;

            return acc;
          }, 0)}
        </p>
      </div>
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
