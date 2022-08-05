/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import { Carousel } from "3d-react-carousal";
import sliderComponent from "./FadingCarouselDatas";

class FadingCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-full">
        <Carousel slides={sliderComponent} autoplay={true} interval={5000} />
      </div>
    );
  }
}

export default FadingCarousel;
