/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import "./Components/backgroundImg.css";
import Navbar from "./Components/Navbar";
import IconPng from "./Attachments/Images/fontIcons.png";
import PencilWritepng from "./Attachments/Images/pencilWriting.png";
import BrushPng from "./Attachments/Images/brush.png";
import Macbook from "./Attachments/Images/Macbook.png";
import NewspaperGraph from "./Attachments/Images/NewspaperGraphic.png";
import {
  BigPlayButton,
  ClosedCaptionButton,
  ControlBar,
  LoadingSpinner,
  Player,
  PlayToggle,
} from "video-react";
import AdVideo from "./Attachments/Video/IKEAad.mp4";
import AdCaptions from "./Attachments/VideoCaption/AdCaption.vtt";
import "video-react/dist/video-react.css";
import { Animated } from "react-animated-css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="App" className="h-auto w-screen overflow-x-hidden">
      <ul className="list-none space-y-5 w-screen h-auto">
        <li>
          <section id="HomeSect">
            <div className="Bg-img bg-center w-screen h-screen bg-cover relative">
              <ul className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 list-none space-y-6 w-screen h-auto">
                <li>
                  <div className="w-full h-fit px-5">
                    <Animated
                      animationIn="fadeInLeft"
                      animationOut="fadeOutRight"
                      isVisible={true}
                    >
                      <h1 className="text-center font-extrabold font-Poppins text-4xl md:text-6xl">
                        Live Love Lyfe
                      </h1>
                    </Animated>
                  </div>
                </li>
                <li>
                  <div className="w-full h-fit px-5 tracking-normal md:tracking-wide">
                    <Animated
                      animationIn="fadeInRight"
                      animationOut="fadeOutLeft"
                      animationInDelay={500}
                      animationOutDelay={500}
                      isVisible={true}
                    >
                      <h1 className="text-center font-medium sm:font-normal font-Poppins text-sm sm:text-base md:text-xl">
                        A minimalist home that feels warm and cozy
                      </h1>
                    </Animated>
                  </div>
                </li>
                <li className="py-10">
                  <div className="w-full h-fit px-5 flex justify-center">
                    <Animated
                      animationIn="zoomIn"
                      animationOut="zoomOut"
                      animationInDelay={1500}
                      animationOutDelay={1500}
                      isVisible={true}
                    >
                      <button className="h-10 w-56 hover:h-12 hover:w-60 transform duration-200 bg-blue-500 font-Poppins text-base rounded-3xl text-white">
                        Explore Now
                      </button>
                    </Animated>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </li>
        <li>
          <section id="FeatureSect">
            <div className="w-screen h-auto py-5 justify-center">
              <div id="FeatureTitle" className="w-screen h-auto">
                <h1 className="font-Poppins font-medium text-2xl text-center">
                  Features
                </h1>
                <h2 className="font-Poppins font-normal text-sm sm:text-base md:text-lg text-center">
                  Home Decor Ideas and Inspiration
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 w-screen h-auto place-items-center  ">
                <div data-aos="fade-right" className="w-auto h-auto py-3 px-4">
                  <div className="flex justify-center w-full h-auto my-5">
                    <img src={IconPng} className="h-9 w-9" />
                  </div>
                  <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                    Free consultation
                  </h1>
                  <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                    Help customer to choose <br /> which design match <br />{" "}
                    with their expectation.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className="order-3 md:order-2 w-auto h-auto py-3 px-4"
                >
                  <div className="flex justify-center w-full h-auto my-5">
                    <img src={PencilWritepng} className="h-9 w-9" />
                  </div>
                  <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                    Design with real data
                  </h1>
                  <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                    Our design is on of the best <br /> than build with
                    aesthetic <br /> and real data.
                  </p>
                </div>
                <div
                  data-aos="fade-left"
                  className="order-2 md:order-3 w-auto h-auto py-3 px-4"
                >
                  <div className="flex justify-center w-full h-auto my-5">
                    <img src={BrushPng} className="h-9 w-9" />
                  </div>
                  <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                    Clean and Fast
                  </h1>
                  <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                    Our work is fast but clean. <br /> It will break your
                    imagination.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center h-auto w-screen py-10">
                <div className="w-72 sm:w-96 shadow-xl md:w-100 lg:w-128 h-auto bg-slate-400/[.30] rounded-xl p-3">
                  <Player src={AdVideo} startTime={0}>
                    <track
                      kind="captions"
                      src={AdCaptions}
                      srcLang="en"
                      label="English"
                      default
                    ></track>
                    <LoadingSpinner />
                    <BigPlayButton position="center" />
                    <ControlBar autoHide={true} autoHideTime={2000}>
                      <ClosedCaptionButton order={7} />
                      <PlayToggle />
                    </ControlBar>
                  </Player>
                </div>
              </div>
            </div>
          </section>
        </li>
      </ul>

      <ul className="w-screen list-none space-y-36 my-20">
        <li>
          <section id="IntroSect">
            <div className="h-auto w-screen grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="order-2 lg:order-1 h-auto py-10 w-full flex justify-center lg:justify-end items-center">
                <ul
                  data-aos="fade-right"
                  className="list-none space-y-5 text-center lg:text-left"
                >
                  <li>
                    <h1 className="font-Poppins font-medium text-2xl sm:text-3xl lg:text-4xl">
                      Fastest way to <br /> organize
                    </h1>
                  </li>
                  <li>
                    <h1 className="font-Poppins font-normal text-sm sm:text-base md:text-xl">
                      Most calendars are designed for teams,
                      <br />
                      Slate is designed for freelancers.
                    </h1>
                  </li>
                  <li className="py-7">
                    <button className="w-52 h-10 hover:h-12 hover:w-60 transform duration-200 bg-blue-500 text-white font-Poppins font-medium rounded-3xl">
                      Try for free
                    </button>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 h-auto w-full py-10 flex justify-center lg:justify-start items-center">
                <img
                  src={Macbook}
                  data-aos="fade-left"
                  className="h-36 sm:h-48 md:h-64"
                />
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="SubscribeSect">
            <div className="h-auto w-screen grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="h-auto w-full flex justify-center lg:justify-end items-center">
                <img
                  data-aos="fade-right"
                  src={NewspaperGraph}
                  className="h-64 sm:h-72 lg:h-96"
                />
              </div>
              <div className="h-auto w-full flex justify-center lg:justify-start py-5">
                <ul
                  data-aos="fade-left"
                  className="list-none space-y-6 text-center lg:text-start"
                >
                  <li>
                    <h1 className="font-Poppins font-bold text-sm sm:text-base">
                      At your fingertips
                    </h1>
                  </li>
                  <li>
                    <h1 className="font-Poppins font-normal text-3xl md:text-4xl">
                      Lightning fast <br /> prototyping{" "}
                    </h1>
                  </li>
                  <li>
                    <ul className="list-none space-y-1">
                      <li>
                        <h1 className="font-Poppins font-bold text-base sm:text-lg">
                          Subscribe to our Newsletter
                        </h1>
                      </li>
                      <li>
                        <h1 className="font-Poppins font-normal text-sm sm:text-base text-gray-600">
                          Available exclusively on Figmaland
                        </h1>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center lg:place-items-start">
                      <input
                        type={"email"}
                        id="subscribeEmail"
                        name="subscribeEmail"
                        className="w-full text-black rounded-full border-none bg-gray-200/[.70]"
                        placeholder="Your Email"
                      />
                      <button className="w-full sm:w-44 lg:w-40 h-11 rounded-full bg-blue-600 text-white font-Poppins font-medium text-lg">
                        Subscribe
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </li>
      </ul>
      <Navbar />
    </div>
  );
}

export default App;
