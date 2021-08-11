import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigation from "../../components/navbar";
import Parallax from "../../components/parallax";
import Section from "../../components/section";
import BuiltIn from "../../assets/images/builtin2.jpg";
import Trellis from "../../assets/images/trellis.jpg";
import Home1 from "../../assets/images/home1.png";
import Home2 from "../../assets/images/home2.png";
import "./style.css";
import Card from "../../components/card";

const Home = () => {

    return(
        <div id="homeContainer">
            <Navigation />
            <Header bkgdImg={ Trellis } >
                <Card cardClass="headerCard" 
                h2="TRUSTED HOME CONSTRUCTION SERVICES" 
                p1="Family and Locally Owned"
                p2="Providing New and Renovation Construction"
                p3="Serving Chambers County and Surrounding Areas" />
            </Header>
            <Section>
                <Card cardClass="topHomeCard" 
                h2="Heading" 
                p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            </Section>
            <Parallax custClass="builtin" bkgdImg={Home1}>
                <Card cardClass="card"  
                h2="You love your home but it needs a face lift?" 
                p1="We can help!"
                p2="Keep scrolling." />
            </Parallax>
            <Section>
                <Card cardClass="card"  h2="Just Like New!" />
            </Section>
            <Parallax custClass="builtin" bkgdImg={Home2}>
                <Card cardClass="card"  
                h2="Yes, this is the same house!" 
                p1="That's right!"
                p2="We do roofing, siding, and paint." />
            </Parallax>
            <Section>
                <Card cardClass="card"  
                h2="What about indoors?"
                p1="" />
            </Section>
            <Parallax custClass="porch" bkgdImg={BuiltIn}>
                <Card cardClass="card"  
                h2="We do that to!" 
                p1="Rather it's a kitchen that inspires or a custom built-in to display your special occasion tableset, our diligent team of carpenters and construction workers will go the extra mile to make your dreams come true." />
            </Parallax>
            <Footer />
        </div>
    )
}

export default Home;