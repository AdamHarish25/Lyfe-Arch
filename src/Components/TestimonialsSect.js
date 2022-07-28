/* eslint-disable jsx-a11y/alt-text */
import IBMLogo from "../Attachments/Images/IBMLogo.png";
import ProfilePic from "../Attachments/Images/ProfilePic.jpg";

export default function TestimonialSect() {
  return (
    <section id="TestimonialSect">
      <div className="w-screen h-auto my-28">
        <ul className="list-none space-y-10">
          <li>
            <h1 className="font-Poppins font-normal text-3xl text-center">
              Testimonials
            </h1>
          </li>
          <li>
            <div className="w-screen h-auto flex justify-center items-center">
              <img src={IBMLogo} className="h-10 w-24" />
            </div>
          </li>
          <li>
            <div className="w-screen h-auto px-10">
              <p className="text-center font-Poppins font-normal text-xs md:text-lg">
                Most calendars are designed for teams. Slate is designed for
                freelancers <br className="hidden md:block" /> who want a simple
                way to plan their schedule.
              </p>
            </div>
          </li>
          <li>
            <div className="w-screen h-auto flex justify-center items-center">
              <div className="w-auto h-auto grid grid-cols-2 place-items-center">
                <img
                  className="h-14 w-14 object-cover object-center ring-2 p-1 rounded-full"
                  draggable={false}
                  src={ProfilePic}
                />
                <div className="h-auto w-auto">
                  <ul className="list-none space-y-3">
                    <li>
                      <h1 className="font-Poppins font-medium text-xs">
                        Organize across
                      </h1>
                      <h1 className="font-Poppins font-normal text-xs">
                        Ui designer
                      </h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="w-screen h-auto flex justify-center items-center">
              <button className="w-60 h-12 hover:h-14 hover:w-64 transform duration-200 text-white bg-blue-500 font-Poppins font-medium text-base rounded-full">
                More Testimonials
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
