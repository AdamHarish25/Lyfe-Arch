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
      <div className="mt-5">
        <div
          onMouseEnter={() => {
            this.setState({ paused: true });
          }}
          onMouseLeave={() => {
            this.setState({ paused: false });
          }}
          className="w-screen md:max-w-3xl lg:max-w-4xl h-100 grid place-items-center overflow-hidden relative ring rounded-md"
        >
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
                <div
                  className={`transform duration-200 ease-in-out w-full h-auto object-cover ${
                    index === this.state.currentSlide
                      ? "visible"
                      : "invisible hidden"
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
                    <p className="text-center font-Poppins font-normal text-xs sm:text-sm md:text-lg">
                      Most calendars are designed for teams. Slate is designed
                      for freelancers <br className="hidden md:block" /> who
                      want a simple way to plan their schedule.
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
                  className={`transform duration-300 ease-in-out ${
                    index === this.state.currentSlide
                      ? "h-2 w-5 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-gray-600/40 rounded-full mx-2 mb-2 cursor-pointer"
                  }`}
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-5 text-5xl inset-y-1/2 text-black/30 hover:text-black cursor-pointer transform duration-200"
          />

          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-5 text-5xl inset-y-1/2 text-black/30 hover:text-black cursor-pointer transform duration-200"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
