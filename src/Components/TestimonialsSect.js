/* eslint-disable jsx-a11y/alt-text */

import { Component } from "react";
import Carousel from "./Carousel";

export default class TestimonialSect extends Component {
  render() {
    return (
      <section id="TestimonialSect">
        <div className="w-screen h-auto my-28">
          <h1 className="font-Poppins font-normal text-3xl text-center my-10">
            Testimonials
          </h1>
          <div className="flex justify-center">
            <Carousel />
          </div>
          ;
          <div className="w-screen h-auto my-10 flex justify-center items-center">
            <button className="w-60 h-12 hover:h-14 hover:w-64 transform duration-200 text-white bg-blue-500 font-Poppins font-medium text-base rounded-full">
              More Testimonials
            </button>
          </div>
        </div>
      </section>
    );
  }
}
