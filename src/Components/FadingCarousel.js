/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import { FadingCarouselData } from "./FadingCarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

let CardPosition = 0;
let CardOpacity = 0;

class FadingCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      //   paused: false,
    };
  }

  //   componentDidMount() {
  //     setInterval(() => {
  //       if (this.state.paused === false) {
  //         let newSlide =
  //           this.state.currentSlide === FadingCarouselData.length - 1
  //             ? 0
  //             : this.state.currentSlide + 1;
  //         this.setState({ currentSlide: newSlide });
  //       }
  //     }, 5000);
  //   }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === FadingCarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
    CardPosition += 10;
    CardOpacity += 10;
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? FadingCarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
    CardPosition -= 10;
    CardOpacity -= 10;
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="w-full h-full grid place-items-center relative">
        {FadingCarouselData.map((slide, index) => {
          return (
            <div
              className={`max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg place-items-center bg-white py-8 px-4 lg:px-6 rounded-xl ${
                index === this.state.currentSlide
                  ? `grid`
                  : `hidden`
              }`}
            >
              <img key={index} src={slide.Image} className="h-52 md:h-64"></img>
              <ul className="list-none space-y-5 text-center my-10">
                <li>
                  <h1
                    key={index}
                    className="font-Poppins font-medium text-2xl lg:text-3xl xl:text-4xl"
                  >
                    {slide.Title}
                  </h1>
                </li>
                <li>
                  <h1
                    key={index}
                    className="font-Poppins font-normal text-sm sm:text-base md:text-xl"
                  >
                    {slide.Subtitle}
                  </h1>
                </li>
              </ul>
            </div>
          );
        })}

        <div className="absolute w-full flex justify-center bottom-0">
          {FadingCarouselData.map((_element, index) => {
            return (
              <div
                className={`transform duration-300 ease-in-out font-Poppins text-white ${
                  index === this.state.currentSlide
                    ? "px-5 bg-blue-500 rounded-full mx-2 mb-2 cursor-pointer"
                    : "px-2 bg-gray-600/40 rounded-full mx-2 mb-2 cursor-pointer"
                }`}
                key={index}
                onClick={() => {
                  this.setCurrentSlide(index);
                }}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
        <AiOutlineLeft
          onClick={this.prevSlide}
          className="absolute left-0 md:left-2 lg:left-5 text-5xl inset-y-1/2 text-black/30 hover:text-black cursor-pointer transform duration-200"
        />

        <AiOutlineRight
          onClick={this.nextSlide}
          className="absolute right-0 md:right-2 lg:right-5 text-5xl inset-y-1/2 text-black/30 hover:text-black cursor-pointer transform duration-200"
        />
      </div>
    );
  }
}

export default FadingCarousel;
