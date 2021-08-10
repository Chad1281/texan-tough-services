import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigation from "../../components/navbar";
import Parallax from "../../components/parallax";
import Section from "../../components/section";
import "./style.css";

const Construction = () => {

    return(
        <div id="constructionContainer">
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

export default Construction;