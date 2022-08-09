/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import {
  faLocationDot,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="w-screen h-auto py-10 px-10 md:px-0 flex justify-center items-center">
      <div className="w-100 h-auto grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-5 place-items-center">
        <div className="w-auto h-auto mb-16">
          <h1 className="font-medium text-lg py-5 font-Poppins">Pages</h1>

          <ul className="list-none space-x-5 md:space-x-0 md:space-y-5 font-Poppins text-sm inline md:block">
            <li className="inline md:block">
              <a className="hover:text-base transform duration-200" href="#">
                Home
              </a>
            </li>
            <li className="inline md:block">
              <a
                className="hover:text-base transform duration-200"
                href="#FeatureSect"
              >
                Product
              </a>
            </li>
            <li className="inline md:block">
              <a
                className="hover:text-base transform duration-200"
                href="#PricingSect"
              >
                Pricing
              </a>
            </li>
            <li className="inline md:block">
              <a
                className="hover:text-base transform duration-200"
                href="#IntroSect"
              >
                About
              </a>
            </li>
            <li className="inline md:block">
              <a
                className="hover:text-base transform duration-200"
                href="#contactSect"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-auto h-auto">
          <div className="w-full h-auto grid grid-cols-1 gap-5 place-items-center">
            <div className="w-fit h-auto grid grid-cols-2 grid-rows-none md:grid-cols-none md:grid-rows-2 gap-8 md:gap-5 place-items-center">
              <div className="w-auto h-auto flex my-2">
                <FontAwesomeIcon
                  className="text-blue-500 text-2xl"
                  icon={faLocationDot}
                />
                <span className="font-Poppins font-light text-sm ml-2">
                  Alam Sutera
                </span>
              </div>
              <div className="w-auto h-auto flex my-2">
                <FontAwesomeIcon
                  className="text-blue-500 text-2xl"
                  icon={faMobilePhone}
                />
                <span className="font-Poppins font-light text-sm ml-2">
                  (021) xxx-xxx
                </span>
              </div>
            </div>
            <div className="w-auto h-auto">
              <ul className="list-none space-x-4 inline text-4xl text-blue-500">
                <li className="inline">
                  <TwitterOutlined />
                </li>
                <li className="inline">
                  <FacebookFilled />
                </li>
                <li className="inline">
                  <LinkedinFilled />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
