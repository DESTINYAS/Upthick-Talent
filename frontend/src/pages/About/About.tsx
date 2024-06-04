import Achievements from "./Achievements";
import Hero from "./Hero";
import Journey from "./Journey";
import React from "react";

const page = () => {
  return (
    <div className="bg-about-background " >
      <Hero />
     
      <Achievements />
      <Journey />
    </div>
  );
};

export default page;