import { Animated } from "react-animated-css";
import "../Components/backgroundImg.css";
export default function HomeSect() {
  return (
    <section id="HomeSect">
      <div className="Bg-img bg-center w-screen h-screenLg bg-cover relative mb-10">
        <ul className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 list-none space-y-6 w-screen h-auto text-white">
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
                <a
                  href="#FeatureSect"
                  className="px-14 py-3 hover:px-16 hover:py-3.5 transform duration-200 bg-blue-500 font-Poppins text-base rounded-3xl text-white"
                >
                  Explore Now
                </a>
              </Animated>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
