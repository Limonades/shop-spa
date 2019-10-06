import * as React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { sortItems } from '../../redux-modules/products/actions';

class ProductsSorter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      activeSorting: null,
    };
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleClick = ev => {
    const { name } = ev.target;
    const { sortProducts } = this.props;
    sortProducts(name);
    this.setState({ activeSorting: name });
  };

  render() {
    const { isOpen, activeSorting } = this.state;

    return (
      <div className="products-sorter">
        <div className="products-sorter__toggle-wrap">
          <button
            type="button"
            className={isOpen ? 'products-sorter__toggle --open' : 'products-sorter__toggle'}
            onClick={this.handleToggle}
          >
            <span className="products-sorter__toggle-txt">Сортировать</span>
            <i className="products-sorter__toggle-icon icon-caret-down" />
          </button>
          <ul className="products-sorter__list">
            <li className="products-sorter__item">
              <button
                type="button"
                className={
                  activeSorting === 'priceDown'
                    ? 'products-sorter__btn --active'
                    : 'products-sorter__btn'
                }
                name="priceDown"
                onClick={this.handleClick}
              >
                От дорогих к дешевым
              </button>
            </li>

            <li className="products-sorter__item">
              <button
                type="button"
                className={
                  activeSorting === 'priceUp'
                    ? 'products-sorter__btn --active'
                    : 'products-sorter__btn'
                }
                name="priceUp"
                onClick={this.handleClick}
              >
                От дешевых к дорогим
              </button>
            </li>

            <li className="products-sorter__item">
              <button
                type="button"
                className={
                  activeSorting === 'popular'
                    ? 'products-sorter__btn --active'
                    : 'products-sorter__btn'
                }
                name="popular"
                onClick={this.handleClick}
              >
                Популярные
              </button>
            </li>

            <li className="products-sorter__item">
              <button
                type="button"
                className={
                  activeSorting === 'new' ? 'products-sorter__btn --active' : 'products-sorter__btn'
                }
                name="new"
                onClick={this.handleClick}
              >
                Новые
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  sortProducts: name => dispatch(sortItems(name)),
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsSorter);
