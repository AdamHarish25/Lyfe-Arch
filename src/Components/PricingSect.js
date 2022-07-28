export default function PricingSect() {
  return (
    <section id="PricingSect">
      <div className="w-screen h-auto bg-slate-700 py-20">
        <div id="PriceTitle" className="w-screen h-auto text-white">
          <h1 className="font-Poppins text-3xl text-center">Pricing</h1>
          <p className="font-Poppins font-light text-center text-sm sm:text-base lg:text-lg my-3">
            Most calendars are designed for teams. <br /> Slate is designed for
            freelancers
          </p>
        </div>
        <div className="w-screen h-auto grid place-items-center my-10 py-5 px-10">
          <div className="w-64 h-110 lg:w-72 bg-blue-500 text-white rounded-lg py-8 z-10">
            <div className="w-full h-auto my-5">
              <h1 className="font-Poppins font-bold text-lg text-center">
                STANDARD
              </h1>
              <p className="font-Poppins font-light text-center text-light text-sm">
                Organize across all <br /> apps by hand
              </p>
            </div>
            <div className="w-full h-auto grid grid-cols-2 gap-2 my-5">
              <div>
                <h1 className="text-6xl font-Poppins font-bold text-end">10</h1>
              </div>
              <div className="text-start">
                <h1 className="font-Poppins font-bold">$</h1>
                <p className="font-Poppins font-light text-sm">Per Month</p>
              </div>
            </div>
            <div className="h-auto w-full">
              <ul className="list-none space-y-4">
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
                <li>
                  <p className="font-Poppins text-sm text-center">
                    Pricing Feature
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full h-auto flex justify-center items-center my-10">
              <button className="w-52 h-10 hover:h-12 hover:w-56 transform duration-200 text-blue-500 bg-white font-Poppins font-medium text-base rounded-full">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
