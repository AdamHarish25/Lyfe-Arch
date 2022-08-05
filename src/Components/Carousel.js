/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { Component } from "react";
import { CarouselData } from "./CarouselData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div
        onMouseEnter={() => {
          this.setState({ paused: true });
        }}
        onMouseLeave={() => {
          this.setState({ paused: false });
        }}
        className="w-screen md:max-w-3xl lg:max-w-4xl h-110 grid place-items-center overflow-hidden relative ring ring-transparent transform duration-300 hover:ring-blue-500 rounded-none md:rounded-lg ease-in-out"
      >
        <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          {CarouselData.map((slide, index) => {
            return (
              <div
                className={`transform duration-200 ease-in-out w-full h-auto px-0 md:px-10 ${
                  index === this.state.currentSlide ? "block" : "hidden"
                }`}
              >
                <div className="w-auto h-auto grid place-items-center my-10">
                  <img
                    src={slide.Logo}
                    className={slide.LogoSize}
                    key={index}
                  />
                </div>
                <div className="w-auto h-auto px-10 my-10">
                  <p
                    key={index}
                    className="text-center font-Poppins font-normal text-xs sm:text-sm md:text-lg"
                  >
                    {slide.TextContained}
                  </p>
                </div>
                <div className="w-full h-auto flex justify-center items-center">
                  <div className="w-auto h-auto grid grid-cols-2 place-items-center">
                    <img
                      src={slide.ProfileImg}
                      key={index}
                      className="h-14 w-14 object-cover object-center ring-2 p-1 rounded-full"
                    />
                    <div className="h-auto w-auto">
                      <ul className="list-none space-y-3">
                        <li>
                          <h1 className="font-Poppins font-medium text-xs">
                            Organize across
                          </h1>
                          <h1 className="font-Poppins font-normal text-xs">
                            Ui designer
                          </h1>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Swipe>
        <div className="absolute w-full flex justify-center bottom-5">
          {CarouselData.map((_element, index) => {
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

export default Carousel;
