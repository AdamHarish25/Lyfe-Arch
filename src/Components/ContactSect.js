/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  faEnvelope,
  faLocationDot,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSect() {
  return (
    <section id="contactSect">
      <div className="w-screen h-auto my-20">
        <div className="w-screen h-auto text-center">
          <h1 className="font-Poppins font-medium text-3xl">Contact Us</h1>
          <p className="font-Poppins text-base my-3">
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </p>
        </div>
        <div className="w-screen h-auto grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center md:my-20">
          <div
            id="Contact_Card"
            className="w-80 h-100 shadow-lg rounded-xl py-14 order-2 lg:order-1"
          >
            <h1 className="text-center font-Poppins font-bold">Contact Us</h1>
            <div className="w-full h-full p-5">
              <form action="" className="space-y-8">
                <input
                  type={"text"}
                  className="w-full rounded-full bg-gray-300/[.30] border-none font-Poppins text-sm"
                  placeholder="Your Name"
                />
                <input
                  type={"email"}
                  className="w-full rounded-full bg-gray-300/[.30] border-none font-Poppins text-sm"
                  placeholder="Your Email"
                />
                <textarea
                  className="w-full resize-none h-20 rounded-md bg-gray-300/[.30] border-none font-Poppins text-sm"
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

          <div className="h-auto w-full grid place-items-center lg:place-items-start order-1 lg:order-2">
            <div className="w-auto h-fit grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3 gap-5 md:gap-0 order-3 md:order-1 my-5 md:my-0">
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
            <div className="w-auto h-auto flex justify-center items-center md:my-10 order-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895640275!2d-74.26055843565727!3d40.69766840340678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1658813898849!5m2!1sen!2sid"
                className="border-none w-80 h-72 md:w-100 md:h-80 hidden md:block"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-auto h-auto my-5 order-1 md:order-3">
              <ul className="list-none inline space-x-5 text-4xl text-blue-500">
                <li className="inline">
                  <a href="#">
                    <TwitterOutlined />
                  </a>
                </li>
                <li className="inline">
                  <a href="#">
                    <FacebookFilled />
                  </a>
                </li>
                <li className="inline">
                  <a href="#">
                    <LinkedinFilled />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
