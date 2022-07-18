import "./Components/backgroundImg.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div id="App" className="h-auto w-screen overflow-x-hidden">
      <section id="HomeSect">
        <div className="Bg-img bg-center w-screen h-screen bg-cover relative text-4xl md:text-6xl">
          <div className="absolute xs:top-1/3 left-2/4 -translate-y-2/4 -translate-x-2/4 w-full h-fit px-5">
            <h1 className="text-center font-bold font-Poppins">
              Live Love Lyfe
            </h1>
          </div>
          <div className="absolute top-1/3 left-2/4 mt-14 md:mt-20 -translate-y-2/4 -translate-x-2/4 w-full h-fit px-5 tracking-normal md:tracking-wide">
            <h1 className="text-center font-medium sm:font-normal font-Poppins text-sm sm:text-base md:text-xl">
              A minimalist home that feels warm and cozy
            </h1>
          </div>
          <div className="absolute top-2/4 left-2/4 -translate-y-2/4 mt-9 -translate-x-2/4 w-full h-fit px-5 flex justify-center">
            <button className="px-20 py-3 hover:px-24 hover:py-4 transform duration-200 bg-blue-500 font-Poppins text-base rounded-3xl text-white">
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <section id="FeatureSect">
        <div className="w-screen h-auto py-10">
          <div id="FeatureTitle" className="w-screen h-auto">
            <h1 className="font-Poppins font-medium text-2xl text-center">
              Features
            </h1>
            <h2 className="font-Poppins font-normal text-sm sm:text-base md:text-lg text-center">
              Home Decor Ideas and Ispiration
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-screen h-auto">
            <div></div>
          </div>
        </div>
      </section>
      <Navbar />
    </div>
  );
}

export default App;
