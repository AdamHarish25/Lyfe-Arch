/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import "./Components/backgroundImg.css";
import Navbar from "./Components/Navbar";
import IconPng from "./Attachments/Images/fontIcons.png";
import PencilWritepng from "./Attachments/Images/pencilWriting.png";
import BrushPng from "./Attachments/Images/brush.png";
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

function App() {
  return (
    <div id="App" className="h-auto w-screen overflow-x-hidden">
      <section id="HomeSect">
        <div className="Bg-img bg-center w-screen h-screen bg-cover relative text-3xl sm:text-4xl md:text-6xl">
          <div className="absolute xs:top-1/3 left-2/4 -translate-y-2/4 -translate-x-2/4 w-full h-fit px-5">
            <h1 className="text-center font-extrabold font-Poppins">
              Live Love Lyfe
            </h1>
          </div>
          <div className="absolute top-1/3 left-2/4 mt-14 md:mt-20 -translate-y-2/4 -translate-x-2/4 w-full h-fit px-5 tracking-normal md:tracking-wide">
            <h1 className="text-center font-medium sm:font-normal font-Poppins text-sm sm:text-base md:text-xl">
              A minimalist home that feels warm and cozy
            </h1>
          </div>
          <div className="absolute top-2/4 left-2/4 -translate-y-2/4 mt-9 -translate-x-2/4 w-full h-fit px-5 flex justify-center">
            <button className="py-2 px-16 md:px-20 md:py-3 md:hover:px-24 md:hover:py-4 transform duration-200 bg-blue-500 font-Poppins text-base rounded-3xl text-white">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      <section id="FeatureSect">
        <div className="w-screen h-auto py-10 justify-center">
          <div id="FeatureTitle" className="w-screen h-auto">
            <h1 className="font-Poppins font-medium text-2xl text-center">
              Features
            </h1>
            <h2 className="font-Poppins font-normal text-sm sm:text-base md:text-lg text-center">
              Home Decor Ideas and Inspiration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 w-screen h-auto place-content-center">
            <div className="w-auto h-auto py-3 px-4">
              <div className="flex justify-center w-full h-auto my-5">
                <img src={IconPng} className="h-9 w-9" />
              </div>
              <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                Free consultation
              </h1>
              <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                Help customer to choose <br /> which design match <br /> with
                their expectation.
              </p>
            </div>
            <div className="w-auto h-auto py-3 px-4">
              <div className="flex justify-center w-full h-auto my-5">
                <img src={PencilWritepng} className="h-9 w-9" />
              </div>
              <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                Design with real data
              </h1>
              <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                Our design is on of the best <br /> than build with aesthetic{" "}
                <br /> and real data
              </p>
            </div>
            <div className="w-auto h-auto py-3 px-4">
              <div className="flex justify-center w-full h-auto my-5">
                <img src={BrushPng} className="h-9 w-9" />
              </div>
              <h1 className="font-Poppins font-semibold text-base md:text-xl text-center">
                Clean and Fast
              </h1>
              <p className="font-Poppins font-light text-center text-sm md:text-base 2xl:text-lg my-3">
                Our work is fast but clean. <br /> It will break your
                imagination
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center h-auto w-screen py-10">
            <div className="w-96 lg:w-128 h-auto bg-slate-400/[.20] rounded-xl p-3">
              <Player src={AdVideo} className="rounded-xl" startTime={0}>
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

      <section id="thrdPage">
        <div className="">

        </div>
      </section>

      <Navbar />
    </div>
  );
}

export default App;
