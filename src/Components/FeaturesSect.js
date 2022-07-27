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
  VolumeMenuButton,
} from "video-react";
import AdVideo from "../Attachments/Video/Client'sVideo.mp4";
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
        <div className="flex items-center h-auto w-screen py-10">
          <div className="w-full h-full px-5 flex justify-center">
            <div className="w-full lg:w-128 2xl:w-256 shadow-xl h-auto bg-slate-400/[.30] rounded-xl p-3 grid place-items-center">
              <Player src={AdVideo} height={400} fluid={false} startTime={0}>
                <LoadingSpinner />
                <BigPlayButton position="center" />
                <ControlBar autoHide={true} autoHideTime={2000}>
                  <VolumeMenuButton vertical />
                  <PlayToggle />
                </ControlBar>
              </Player>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
