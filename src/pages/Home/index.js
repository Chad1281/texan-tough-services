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
                p1="Family Owned and Operated"
                p2="Locally Owned and Operated"
                p3="Providing New and Renovation Construction">
                <p>Serving Chambers County and Surrounding Areas</p>
                </Card>
            </Header>
            <Section sectionClass="redSection">
                <Card cardClass="topHomeCard" 
                h2="Heading" 
                p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex id tellus laoreet laoreet. In tempus velit sed urna egestas, eu posuere nunc accumsan. Aliquam tempus, erat vel imperdiet scelerisque, velit metus condimentum leo, vitae suscipit ante diam faucibus quam. Maecenas eget mattis nisi, malesuada hendrerit diam. Morbi id mauris quis nunc bibendum ullamcorper. Morbi aliquam pharetra ligula. Mauris ac leo ut mauris ultricies gravida. Duis faucibus in dui in rutrum. Suspendisse sagittis, libero rutrum posuere fringilla, lorem velit vulputate orci, non suscipit sem sem eget tortor. Phasellus vel laoreet ipsum, ac dictum purus." />
            </Section>
            <Parallax custClass="builtin" bkgdImg={Home1}>
                <Card cardClass="card"  
                h2="You love your home but it needs a face lift?" 
                p1="We can help!"
                p2="Keep scrolling." />
            </Parallax>
            <Section sectionClass="redSection">
                <Card cardClass="card"  h2="Just Like New!" />
            </Section>
            <Parallax custClass="builtin" bkgdImg={Home2}>
                <Card cardClass="card"  
                h2="Yes, this is the same house!" 
                p1="That's right!"
                p2="We do roofing, siding, and paint." />
            </Parallax>
            <Section sectionClass="redSection">
                <Card cardClass="card"  
                h2="What about indoors?"
                p1="" />
            </Section>
            <Parallax custClass="porch" bkgdImg={BuiltIn}>
                <Card cardClass="card"  
                h2="We do that to!" 
                p1="Rather it's a kitchen that inspires or a custom dining room built-in to display your special occasion tableset, our diligent team of carpenters and construction workers will go the extra mile to make your dreams come true." />
            </Parallax>
            <Section sectionClass="vidSection">
                <Card cardClass="vidCard"
                h2="Heading"
                p1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ex id tellus laoreet laoreet. In tempus velit sed urna egestas, eu posuere nunc accumsan. Aliquam tempus, erat vel imperdiet scelerisque, velit metus condimentum leo, vitae suscipit ante diam faucibus quam. Maecenas eget mattis nisi, malesuada hendrerit diam. Morbi id mauris quis nunc bibendum ullamcorper. Morbi aliquam pharetra ligula. Mauris ac leo ut mauris ultricies gravida. Duis faucibus in dui in rutrum. Suspendisse sagittis, libero rutrum posuere fringilla, lorem velit vulputate orci, non suscipit sem sem eget tortor. Phasellus vel laoreet ipsum, ac dictum purus." />
                <iframe className="fbVidEmb" src="https://www.facebook.com/plugins/video.php?height=317&#38;href=https%3A%2F%2Fwww.facebook.com%2FTexantoughservices%2Fvideos%2F886705678537343%2F&#38;show_text=false&#38;width=560&#38;t=0" width="560" height="317" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </Section>
            <Footer />
        </div>
    )
}

export default Home;