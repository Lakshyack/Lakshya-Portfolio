import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import HeroSec from "./components/HeroSec";
import Projects from "./components/Projects";
import MyServices from "./components/MyServices";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <h1 className='text-2xl text-center '>Hello world</h1> */}
      <NavBar></NavBar>
      <HeroSec></HeroSec>
      <Projects></Projects>
      <MyServices></MyServices>
      <Footer/>
    </>
  );
}

export default App;
