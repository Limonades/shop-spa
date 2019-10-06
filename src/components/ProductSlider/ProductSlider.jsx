import * as React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './index.scss';

class ProductSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: '0',
    };
  }

  handleClick = ev => {
    const { setTempImage } = this.props;
    setTempImage(ev.target.currentSrc);

    this.setState({
      activeSlide: ev.target.dataset.index,
    });
  };

  render() {
    const { images } = this.props;
    const { activeSlide } = this.state;
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };

    return (
      <Slider className="products-grid__slider" {...settings}>
        {images.map((image, index) => (
          <div
            className={
              +activeSlide === index ? 'products-grid__slide --active' : 'products-grid__slide'
            }
            key={index}
          >
            <img
              style={{ width: '100%' }}
              src={image}
              alt="thumbnail"
              data-index={index}
              onClick={this.handleClick}
            />
          </div>
        ))}
      </Slider>
    );
  }
}
export default ProductSlider;
