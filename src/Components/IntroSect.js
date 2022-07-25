/* eslint-disable jsx-a11y/alt-text */
import Macbook from "../Attachments/Images/Macbook.png";

export default function IntroSect() {
  return (
    <section id="IntroSect">
      <div className="h-auto w-screen grid grid-cols-1 lg:grid-cols-2 gap-10 my-20">
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
  );
}
