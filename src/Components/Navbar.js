/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <header
          id="Navbar"
          className="inset-x-0 py-8 px-6 lg:py-10 absolute top-0 flex lg:items-center justify-end lg:justify-center"
        >
          <div className="hidden lg:block w-auto mx-10 h-auto">
            <ul className="space-x-10 inline font-Poppins font-medium text-white list-none">
              <li className="inline">
                <a href="#">Home</a>
              </li>
              <li className="inline">
                <a href="#FeatureSect">Product</a>
              </li>
              <li className="inline">
                <a href="#PricingSect">Pricing</a>
              </li>
              <li className="inline">
                <a href="#IntroSect">About</a>
              </li>
              <li className="inline">
                <a href="#contactSect">Contact</a>
              </li>
            </ul>
          </div>
          {!isOpen ? (
            <button
              className="block lg:hidden p-3 rounded-md transform duration-200 text-white bg-gray-500/[.10]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
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
            className={`overflow-y-scroll inset-y-0 -right-1 fixed bg-white lg:translate-x-full p-10 w-72 ${
              isOpen
                ? "translate-x-0 shadow-xl shadow-gray-400"
                : "translate-x-full"
            }  duration-300 ease-in-out`}
          >
            <ul className="list-none space-y-5">
              <li>
                <a href="#" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl text-blue-500 transform duration-200`}
                  >
                    Home
                  </h3>
                </a>
              </li>
              <li>
                <a href="#FeatureSect" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-blue-500 transform duration-200 text-black`}
                  >
                    Product
                  </h3>
                </a>
              </li>
              <li>
                <a href="#PricingSect" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-blue-500 transform duration-200 text-black`}
                  >
                    Pricing
                  </h3>
                </a>
              </li>
              <li>
                <a href="#IntroSect" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-blue-500 transform duration-200 text-black`}
                  >
                    About
                  </h3>
                </a>
              </li>
              <li>
                <a href="#contactSect" onClick={() => setIsOpen(!isOpen)}>
                  <h3
                    className={`text-xl hover:text-blue-500 transform duration-200 text-black`}
                  >
                    Contact
                  </h3>
                </a>
              </li>
            </ul>
          </aside>
        </header>
      </div>
    </>
  );
}
