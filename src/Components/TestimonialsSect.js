/* eslint-disable jsx-a11y/alt-text */

import { Component } from "react";
import Carousel from "./Carousel";

export default class TestimonialSect extends Component {
  render() {
    return (
      <section id="TestimonialSect">
        <div className="w-screen h-auto my-28">
          <h1 className="font-Poppins font-normal text-3xl text-center my-5">
            Testimonials
          </h1>
          <div className="flex justify-center">
            <Carousel />
          </div>
        </div>
      </section>
    );
  }
}
