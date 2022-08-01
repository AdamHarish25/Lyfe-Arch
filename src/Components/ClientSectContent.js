/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import AOS from "aos";

import DPRRI from "../Attachments/Images/Lyfe Home/DPRRI.png";
import Erfolg from "../Attachments/Images/Lyfe Home/Erfolg.png";
import KaisarRes from "../Attachments/Images/Lyfe Home/KaisarR.png";
import KempDo from "../Attachments/Images/Lyfe Home/Kempdo.png";
import KemPer from "../Attachments/Images/Lyfe Home/KemPer.png";
import Taqychan from "../Attachments/Images/Lyfe Home/Taqychan.png";

export default function ClientSectContent() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="ClientsSect">
      <div className="w-screen h-auto my-28">
        <div className="w-screen h-auto">
          <ul className="space-y-3 list-none">
            <li>
              <h1 className="font-Poppins font-normal text-3xl text-center">
                Partners
              </h1>
            </li>
            <li>
              <p className="font-Poppins font-normal text-sm sm:text-base md:text-lg text-center">
                Most calendars are designed for teams, <br /> Slate is designed
                for freelancers.
              </p>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-screen h-100 overflow-y-auto md:h-auto place-items-center gap-4 my-10 px-10">
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Kementerian Pemuda dan Olahraga <br /> Republik Indonesia
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={KempDo} className="h-20 w-40" />
              </div>
            </div>
          </div>
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Dewan Perwakilan Rakyat <br /> Republik Indonesia
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={DPRRI} className="h-24 w-44" />
              </div>
            </div>
          </div>
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Kementerian Pertanian <br /> Republik Indonesia
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={KemPer} className="h-20 w-28" />
              </div>
            </div>
          </div>
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Taqychan Saffron Office
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={Taqychan} className="h-24 w-32" />
              </div>
            </div>
          </div>
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Kaisar Residence
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={KaisarRes} className="h-24 w-36" />
              </div>
            </div>
          </div>
          <div className="h-auto w-80 lg:w-full flex justify-center items-center border py-5">
            <div>
              <h1 className="font-Poppins font-normal text-center text-base">
                Erfolg Studio
              </h1>
              <div className="flex justify-center items-center w-full h-auto my-3">
                <img src={Erfolg} className="h-28 w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
