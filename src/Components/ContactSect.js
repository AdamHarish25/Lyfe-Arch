/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import {
  faEnvelope,
  faLocationDot,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSect() {
  return (
    <section id="contactSect">
      <div className="w-screen h-auto py-20 bg-slate-700 text-white">
        <div className="w-screen h-auto text-center">
          <h1 className="font-Poppins font-medium text-3xl">Contact Us</h1>
          <p className="font-Poppins text-sm md:text-base my-3">
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </p>
        </div>
        <div className="w-screen h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 2xl:gap-32 place-items-center py-10 lg:py-0 md:my-20">
          <div className="w-full h-auto flex justify-center lg:justify-end items-center order-2 lg:order-1">
            <div
              id="Contact_Card"
              className="w-80 lg:w-96 2xl:w-110 h-100 shadow-lg rounded-xl py-14 bg-white text-black"
            >
              <h1 className="text-center font-Poppins font-bold">Contact Us</h1>
              <div className="w-full h-full p-5 text-sm lg:text-lg 2xl:text-xl">
                <form action="" className="space-y-8">
                  <input
                    type={"text"}
                    className="w-full rounded-full bg-gray-300/[.30] border-none font-Poppins"
                    placeholder="Your Name"
                  />
                  <input
                    type={"email"}
                    className="w-full rounded-full bg-gray-300/[.30] border-none font-Poppins"
                    placeholder="Your Email"
                  />
                  <textarea
                    className="w-full resize-none h-20 rounded-md bg-gray-300/[.30] border-none font-Poppins"
                    placeholder="Your Message"
                  />
                  <button
                    type={"submit"}
                    className="w-32 h-10 bg-blue-500 rounded-full font-Poppins text-white"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="h-auto w-full grid place-items-center lg:place-items-start order-1 lg:order-2">
            <div className="w-auto h-fit grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3 gap-5 md:gap-0 my-5 md:my-0">
              <div className="w-auto h-auto flex md:grid md:place-items-center">
                <FontAwesomeIcon
                  className="text-blue-500 text-2xl"
                  icon={faLocationDot}
                />
                <span className="font-Poppins font-light text-sm mx-2 md:my-5">
                  Alam Sutera
                </span>
              </div>
              <div className="w-auto h-auto flex md:grid md:place-items-center">
                <FontAwesomeIcon
                  className="text-blue-500 text-2xl"
                  icon={faMobilePhone}
                />
                <span className="font-Poppins font-light text-sm mx-2 md:my-5">
                  (021) xxx-xxx
                </span>
              </div>
              <div className="w-auto h-auto flex md:grid md:place-items-center">
                <FontAwesomeIcon
                  className="text-blue-500 text-2xl"
                  icon={faEnvelope}
                />
                <span className="font-Poppins font-light text-sm mx-2 md:my-5">
                  email@example.com
                </span>
              </div>
            </div>
            <div className="w-auto h-auto flex justify-center items-center md:my-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3025242214467!2d106.65834555004427!3d-6.223783162664919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbd89324cc0d%3A0xb2c6327f3b8251cd!2sAlam%20Sutera%2C%20Kunciran%2C%20Kec.%20Pinang%2C%20Kota%20Tangerang%2C%20Banten!5e0!3m2!1sen!2sid!4v1658975410079!5m2!1sen!2sid"
                className="border-none w-80 h-72 md:w-100 md:h-80 hidden md:block"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
