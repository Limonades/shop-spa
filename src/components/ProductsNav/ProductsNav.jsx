import * as React from "react";
import "./index.scss";
import {filterProducts, filterReset} from "../../redux-modules/products/actions";
import {connect} from "react-redux";

class ProductsNav extends React.Component {
  state = {
    activeId: 'reset'
  };
  handleClick = ev => {
    const { filter, filterReset } = this.props;
    const { id } = ev.target.dataset;
    this.setState({
      activeId: id
    });
    if (id === 'reset') {
      return filterReset()
    }
    filter(id)

  };
  render() {
    const { activeId } = this.state;
    return (
      <nav className='products-nav'>
        <ul className='products-nav__list'>
          <li className='products-nav__item'>
            <button className={activeId ===  'reset' ? 'products-nav__link --active' : 'products-nav__link'} data-id="reset" type="button" onClick={this.handleClick}>
              Все
            </button>
          </li>

          <li className='products-nav__item'>
            <button className={activeId ===  '3' ? 'products-nav__link --active' : 'products-nav__link'} type="button"  data-id="3" onClick={this.handleClick}>Рубашки</button>
          </li>

          <li className='products-nav__item'>
            <button className={activeId ===  '2' ? 'products-nav__link --active' : 'products-nav__link'} type="button" data-id="2" onClick={this.handleClick}>Кроссовки</button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  filter: id => dispatch(filterProducts(id)),
  filterReset: () => dispatch(filterReset())
});

export default connect(null, mapDispatchToProps)(ProductsNav);
