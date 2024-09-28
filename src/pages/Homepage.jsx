import { Button } from "@/components/button";

import Navigation from "../components/Navigation";

import Heading from "../components/Heading";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Trial from "../components/Trial";

export default function Homepage() {

  return (
    <div className="flex flex-col min-h-screen">
     <Navigation/>
      <main className="flex-1">
      <Heading/>
       <Features/>
     <Trial/>
      </main>
    <Footer/>
    </div>
  );
}
