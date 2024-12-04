import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Introduction from "./components/Introduction/Introduction";
import VideoSection from "./components/VideoSection/VideoSection";
import CallToAction from "./components/CallToAction/CallToAction";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-main-section">
      <div className="header-section">
        <Header />
      </div>
      <div className="main-section">
        <HeroSection />
        <Introduction />
        <VideoSection />
        <CallToAction />
        <HowItWorks />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default App;
