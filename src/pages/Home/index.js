import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navigation from "../../components/navbar";
import Parallax from "../../components/parallax";
import Section from "../../components/section";
import Barn from "../../assets/images/barn.png";
import BuiltIn from "../../assets/images/builtin2.jpg";
import Trellis from "../../assets/images/trellis.jpg";
import Home1 from "../../assets/images/home1.jpg";
import Kitchen from "../../assets/images/kitchen3.jpg"
import "./style.css";
import Card from "../../components/card";

const Home = () => {

    return(
        <div id="homeContainer">
            <Navigation />
            <Header bkgdImg={ Trellis } >
                <Card cardClass="headerCard" h2="TRUSTED HOME CONSTRUCTION SERVICE" 
                p1="Family and Locally Owned"
                p2="Providing New and Renovation Construction"
                p3="Serving Chambers County and Surrounding Areas" />
            </Header>
            <Section>
                <Card cardClass="card" h2="Heading" p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at odio justo. Proin aliquam iaculis arcu. Praesent egestas arcu nunc, ut condimentum tellus iaculis non. Suspendisse lobortis sodales pharetra. Suspendisse imperdiet libero eu neque lacinia sollicitudin. Vivamus lacus mauris, aliquam eu augue nec, rutrum suscipit tellus. Sed eget lectus imperdiet, posuere turpis eget, convallis purus. Mauris a nibh at libero condimentum scelerisque quis ac turpis. Donec vulputate ultrices venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam pulvinar ullamcorper elementum." />
            </Section>
            <Parallax custClass="builtin" bkgdImg={Home1}>
                <Card cardClass="card"  h2="Heading" p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at odio justo. Proin aliquam iaculis arcu. Praesent egestas arcu nunc, ut condimentum tellus iaculis non. Suspendisse lobortis sodales pharetra. Suspendisse imperdiet libero eu neque lacinia sollicitudin. Vivamus lacus mauris, aliquam eu augue nec, rutrum suscipit tellus. Sed eget lectus imperdiet, posuere turpis eget, convallis purus. Mauris a nibh at libero condimentum scelerisque quis ac turpis. Donec vulputate ultrices venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam pulvinar ullamcorper elementum." />
            </Parallax>
            <Section>
                <Card cardClass="card"  h2="Heading" />
            </Section>
            <Parallax custClass="porch" bkgdImg={BuiltIn}>
                <Card cardClass="card"  h2="Heading" p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at odio justo. Proin aliquam iaculis arcu. Praesent egestas arcu nunc, ut condimentum tellus iaculis non. Suspendisse lobortis sodales pharetra. Suspendisse imperdiet libero eu neque lacinia sollicitudin. Vivamus lacus mauris, aliquam eu augue nec, rutrum suscipit tellus. Sed eget lectus imperdiet, posuere turpis eget, convallis purus. Mauris a nibh at libero condimentum scelerisque quis ac turpis. Donec vulputate ultrices venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam pulvinar ullamcorper elementum." />
            </Parallax>
            <Footer />
        </div>
    )
}

export default Home;