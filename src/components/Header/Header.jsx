import * as React from 'react';
import './index.scss';
import logo from '../../assets/imgs/logo.svg';
import caret from '../../assets/imgs/caret.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <a className="header__logo" href="/">
            <img src={logo} alt="site-logo" />
          </a>

          <div className="header__cart-wrap">
            <button type="button" className="header__cart">
              <img src={caret} alt="caret-icon" />
            </button>
            <div className="header__cart-counter">
              <span>3</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
