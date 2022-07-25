/* eslint-disable jsx-a11y/alt-text */
import NewspaperGraph from "../Attachments/Images/NewspaperGraphic.png";

export default function SubscriptionSect() {
  return (
    <section id="SubscribeSect">
      <div className="h-auto w-screen grid grid-cols-1 lg:grid-cols-2 gap-10 my-20">
        <div className="h-auto w-full flex justify-center lg:justify-end items-center">
          <img
            data-aos="fade-right"
            src={NewspaperGraph}
            className="h-64 sm:h-68 lg:h-96"
          />
        </div>
        <div className="h-auto w-full flex justify-center lg:justify-start py-5">
          <ul
            data-aos="fade-left"
            className="list-none space-y-6 text-center lg:text-start"
          >
            <li>
              <h1 className="font-Poppins font-bold text-sm sm:text-base">
                At your fingertips
              </h1>
            </li>
            <li>
              <h1 className="font-Poppins font-normal text-3xl md:text-4xl">
                Lightning fast <br /> prototyping{" "}
              </h1>
            </li>
            <li>
              <ul className="list-none space-y-1">
                <li>
                  <h1 className="font-Poppins font-bold text-base sm:text-lg">
                    Subscribe to our Newsletter
                  </h1>
                </li>
                <li>
                  <h1 className="font-Poppins font-normal text-base text-gray-600">
                    Available exclusively on Lyfe Arch
                  </h1>
                </li>
              </ul>
            </li>
            <li>
              <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center lg:place-items-start">
                <input
                  type={"email"}
                  id="subscribeEmail"
                  name="subscribeEmail"
                  className="w-full text-black rounded-full border-none bg-gray-200/[.70]"
                  placeholder="Your Email"
                />
                <button className="w-full sm:w-44 lg:w-40 h-11 rounded-full bg-blue-600 text-white font-Poppins font-medium text-lg">
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
