import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact.jsx";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
// import Testimonials from './components/testimonials/testimonials';
import "./index.css";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
