import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigation from "../../components/navbar";
import Parallax from "../../components/parallax";
import Section from "../../components/section";
import "./style.css";

const Barns = () => {

    return(
        <div id="barnsContainer">
            <Navigation />
            <Header />
            <Section />
            <Parallax />
            <Section />
            <Parallax />
            <Footer />
        </div>
    )
}

export default Barns;