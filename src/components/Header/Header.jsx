import * as React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/imgs/logo.svg';
import caret from '../../assets/imgs/caret.svg';
import { Cart } from '../Cart';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { cart } = this.props;
    return (
      <header className="header">
        <div className="header__container container">
          <Link className="header__logo" to="/">
            <img src={logo} alt="site-logo" />
          </Link>

          <div className="header__cart-wrap">
            <button type="button" className="header__cart" onClick={this.handleClick}>
              <img src={caret} alt="caret-icon" />
            </button>
            <div className="header__cart-counter">
              <span>{cart.length}</span>
            </div>
          </div>
        </div>
        {isOpen && <Cart />}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.items,
});

export default connect(
  mapStateToProps,
  null
)(Header);
