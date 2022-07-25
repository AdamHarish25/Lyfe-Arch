/* eslint-disable jsx-a11y/alt-text */
import IconPng from "../Attachments/Images/fontIcons.png";
import PencilWritepng from "../Attachments/Images/pencilWriting.png";
import BrushPng from "../Attachments/Images/brush.png";
import {
  BigPlayButton,
  ClosedCaptionButton,
  ControlBar,
  LoadingSpinner,
  Player,
  PlayToggle,
} from "video-react";
import AdVideo from "../Attachments/Video/IKEAad.mp4";
import AdCaptions from "../Attachments/VideoCaption/AdCaption.vtt";
import "video-react/dist/video-react.css";

export default function FeaturesSect() {
  return (
    <section id="FeatureSect">
      <div className="w-screen h-auto py-5 justify-center my-10">
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
              Help customer to choose <br /> which design match <br /> with
              their expectation.
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
              Our design is on of the best <br /> than build with aesthetic{" "}
              <br /> and real data.
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
              Our work is fast but clean. <br /> It will break your imagination.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-auto w-screen py-10">
          <div className="w-80 sm:w-96 shadow-xl md:w-100 lg:w-128 h-auto bg-slate-400/[.30] rounded-xl p-3">
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
  );
}