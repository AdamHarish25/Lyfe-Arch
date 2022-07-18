/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import OutsideClick from "./OutsideClick";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwitterLogo from "../Attachments/Images/Twitter.png";
import FBLogo from "../Attachments/Images/Facebook.png";
import LinkedInLogo from "../Attachments/Images/Linkedin.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <header
          id="Navbar"
          className="inset-x-0 py-8 px-6 lg:py-10 absolute top-0 flex lg:items-center justify-end lg:justify-around"
        >
          <div className="hidden lg:block w-auto mx-10 h-auto">
            <ul className="space-x-8 inline font-Poppins text-gray-700 list-none">
              <li className="inline">
                <a href="#">Home</a>
              </li>
              <li className="inline">
                <a href="#">Product</a>
              </li>
              <li className="inline">
                <a href="#">Pricing</a>
              </li>
              <li className="inline">
                <a href="#">About</a>
              </li>
              <li className="inline">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="w-auto h-auto hidden lg:block mx-10">
            <ul className="space-x-6 inline fill-gray-600 list-none">
              <li className="inline">
                <a href="#">
                  <img
                    src={TwitterLogo}
                    className="h-6 w-7 hover:h-7 hover:w-8 transform duration-200 inline"
                  ></img>
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src={FBLogo}
                    className="h-6 w-7 hover:h-7 hover:w-8 transform duration-200 inline"
                  ></img>
                </a>
              </li>
              <li className="inline">
                <a href="#">
                  <img
                    src={LinkedInLogo}
                    className="h-6 w-7 hover:h-7 hover:w-8 transform duration-200 inline"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
          {!isOpen ? (
            <button
              className="block lg:hidden p-3 rounded-md transform duration-200 text-white bg-gray-500/[.10]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          ) : (
            <button
              className="block lg:hidden p-6 text-black hover:text-gray-400 transform duration-200 fixed top-4 right-4 text-xl z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
          <aside
            className={`inset-y-0 -right-1 fixed bg-white shadow-xl shadow-gray-400 lg:translate-x-full p-10 w-72 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }  duration-300 ease-in-out`}
          >
            <ul className="list-none space-y-5">
              <li>
                <a href="" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl text-pink-400 transform duration-200`}
                  >
                    Home
                  </h3>
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-pink-400 transform duration-200 text-black`}
                  >
                    Product
                  </h3>
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-pink-400 transform duration-200 text-black`}
                  >
                    Pricing
                  </h3>
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-pink-400 transform duration-200 text-black`}
                  >
                    About
                  </h3>
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-pink-400 transform duration-200 text-black`}
                  >
                    Contact
                  </h3>
                </a>
              </li>
            </ul>
            <div className="h-10 my-10">
              <hr className="border-b-4 rounded-xl text-gray-600"></hr>
            </div>
            <ul className="list-none space-y-5">
              <li>
                <a href="#" className="group">
                  <img
                    src={TwitterLogo}
                    className="h-6 w-7 group-hover:h-7 group-hover:w-8 transform duration-200 inline"
                  ></img>
                  <span className="ml-3 text-sm text-gray-400 font-Poppins">
                    Follow us on Twitter
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <img
                    src={FBLogo}
                    className="h-6 w-7 group-hover:h-7 group-hover:w-8 transform duration-200 inline"
                  ></img>
                  <span className="ml-3 text-sm text-gray-400 font-Poppins">
                    Follow us on Facebook
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <img
                    src={LinkedInLogo}
                    className="h-6 w-7 group-hover:h-7 group-hover:w-8 transform duration-200 inline"
                  ></img>
                  <span className="ml-3 text-sm text-gray-400 font-Poppins">
                    LinkedIn
                  </span>
                </a>
              </li>
            </ul>
          </aside>
        </header>
      </div>
    </>
  );
}
