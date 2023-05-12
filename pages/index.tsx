import React from "react";
import { NextSeo } from "next-seo";
import Hero from "@components/LandingPage/Hero"
import Features from "@components/LandingPage/Features";
import ContactUs from "@components/LandingPage/ContactUs";


const Home = () => {
  return (
    <div className="App">
      <NextSeo title="Home" />
      <Hero />
      <Features />
      <ContactUs />
    </div>
  );
};

export default Home;
