/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ClientSectContent from "./Components/ClientSectContent";
import IntroSect from "./Components/IntroSect";
import SubscriptionSect from "./Components/SubscriptionSect";
import FeaturesSect from "./Components/FeaturesSect";
import HomeSect from "./Components/HomeSect";
import TestimonialSect from "./Components/TestimonialsSect";
import PricingSect from "./Components/PricingSect";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="App" className="h-auto w-screen">
      <HomeSect />

      <FeaturesSect />

      <IntroSect />

      <SubscriptionSect />

      <ClientSectContent />

      <TestimonialSect />

      <PricingSect />

      <Navbar />
    </div>
  );
}

export default App;
