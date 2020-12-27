import React from "react";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Main from "./components/Main";
import Cards from "./components/Cards";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles.css";

export default function App(){
    return(
         <div className="App">
             <Header />
             <Showcase />
             <Main />
             <Cards />
             <About />
             <Footer />
         </div>
    )
}