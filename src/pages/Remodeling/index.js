import React from "react";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigation from "../../components/navbar";
import Parallax from "../../components/parallax";
import Section from "../../components/section";
import "./style.css";

const Remodeling = () => {

    return(
        <div id="remodelingContainer">
            <Navigation />
            <Header>
                <Card />
            </Header>
            <Section>
                <Card />
            </Section>
            <Parallax>
                <Card />
            </Parallax>
            <Section>
                <Card />
            </Section>
            <Parallax>
                <Card />
            </Parallax>
            <Footer />
        </div>
    )
}

export default Remodeling;