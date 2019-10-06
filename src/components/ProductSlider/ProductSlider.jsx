import * as React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './index.scss'

class ProductSlider extends React.Component {
	handleClick = ev => {
		console.dir(ev.target);
		const { setTempImage } = this.props;
		setTempImage(ev.target.currentSrc)
	};
	render() {
		const { images } = this.props
		const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				{images.map((image, index) =>	<div key={index} style={{height: '100%'}}><img style={{width: '100%'}} src={image} alt="" onClick={this.handleClick}/></div> )}
			</Slider>
		);
	}
}
export  default ProductSlider
