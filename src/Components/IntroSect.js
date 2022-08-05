/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import FadingCarousel from "./Carousel/FadingCarousel";

export default class IntroSect extends Component {
  render() {
    return (
      <section id="IntroSect">
        <div className="w-screen h-screen py-20 bg-slate-700">
          <FadingCarousel />
        </div>
      </section>
    );
  }
}
