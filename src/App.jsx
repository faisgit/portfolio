import React from "react";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <AboutMe /> */}
    </div>
  );
};

export default App;
