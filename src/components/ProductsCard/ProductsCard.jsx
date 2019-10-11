import * as React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductSlider } from '../ProductSlider';
import { selectProduct } from '../../redux-modules/products/actions';

class ProductsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempImage: null,
    };
  }

  get image() {
    const { image } = this.props;
    const { tempImage } = this.state;

    if (tempImage) {
      return tempImage;
    }

    return image || 'http://placekitten.com/200/30';
  }

  setTempImage = image => {
    this.setState({ tempImage: image });
  };

  handleClick = ev => {
    ev.preventDefault();
  };

  render() {
    const { title, price, category, count, thumbnail, id, selectCurrentProduct } = this.props;

    return (
      <li className="products-grid__card">
        <Link
          className="products-grid__link"
          to={`/product/${id}`}
          onClick={() => selectCurrentProduct(id)}
        >
          <div className="products-grid__card-img-wrap">
            <picture className="products-grid__card-img">
              <img src={this.image} alt={`${title}`} />
            </picture>
            <div className="products-grid__slider-wrap" onClick={this.handleClick}>
              <ProductSlider images={thumbnail} setTempImage={this.setTempImage} />
            </div>
          </div>

          <div className="products-grid__card-content">
            <h3 className="products-grid__category">{category.name}</h3>
            <p className="products-grid__name">{title}</p>
            <div className="products-grid__info-wrap">
              <h2 className="products-grid__price">${price}</h2>
              <span className="products-grid__qty">на складе: {count}</span>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectCurrentProduct: id => dispatch(selectProduct(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(ProductsCard);
