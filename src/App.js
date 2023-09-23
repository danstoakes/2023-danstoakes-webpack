import React, { Component } from "react";

import Header from "./components/header";
import ImageBesideText from "./components/slide/image-beside-text";
import Footer from "./components/footer";

import "./scss/index.scss";

import About from "./assets/images/about.jpg";
import Work from "./assets/images/computer-generic-background.png";
import Furn from "./assets/images/furn.png";
import Powerhouse from "./assets/images/powerhouse.png";
import PHP from "./assets/images/PHP.jpg";
import Graduation from "./assets/images/graduation.jpg";

import promo from "./assets/images/promo.jpg";
import shopify from "./assets/images/logos/shopify.png";
import bg from "./assets/images/computer-source-code.jpg";
import Banner from "./components/slide/banner";
import TextWithIconSlider from "./components/slide/text-with-icon-slider";
import Button from "./components/button";
import ButtonGroup from "./components/button/group";
import Hero from "./components/slide/hero";

import styles from "./scss/_app.scss";
import MobileNav from "./nav/mobile-nav";

class App extends Component 
{
  constructor (props) {
    super(props);

    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav () {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }));
  }

  render () {
    const { navOpen } = this.state;

    const { bodyNav, bodyNavOpen, container, highlightedText, pageContainer } = styles;

    return (
      <>
        <Header onOpen={this.toggleNav} />
        <MobileNav isOpen={navOpen} />
        <div className={`${bodyNav} ${navOpen ? bodyNavOpen : ''}`}>
          <div className={pageContainer}>
            <Hero
              title={`Full-Stack Web Development`}
              content={`All-in-one UI and UX design platform to create UI assets, prototypes and simulations.`}
            />
            <div className={container}>
              <main>
                <ImageBesideText
                  fragment={`about`}
                  image={About}
                  imageAlt={`A picture of me at the office`}
                  imageAltHidden={true}
                  text={
                    <>
                      <h2>A bit <span className={highlightedText}>about</span> me</h2>
                      <p>I'm a Full-Stack Web Developer with 2 years of agency experience, starting in a junior position and working up to project lead across a range of different new build sites and ongoing retainers.</p>
                      <p>Crafting elegant and intuitive solutions for complex problems has been my focus for the best part of the last decade. With a diverse background in developing Android and iOS applications, games, and various tools, I've acquired a versatile skill set that spans a wide range of technologies.</p>
                    </>
                  }
                  buttons={
                    <ButtonGroup>
                      <Button href={`https://www.github.com`} text={`Projects I've done`} alt={``} />
                      <Button href={`https://www.github.com`} text={`Tech I work with`} alt={``} ternary />
                    </ButtonGroup>
                  }
                />
                <ImageBesideText
                  fragment={`work`}
                  backgroundImage={Work}
                  image={Furn}
                  imageAlt={`furn, an e-commerce website built using Shopify.`}
                  text={
                    <>
                      <h2>Some of my work</h2>
                      <p>My favourite framework to work on currently is Shopify, an e-commerce platform that was created in 2006. With over 4.5 million Shopify sites online, 10% of the global e-commerce market is possessed by Shopify.</p>
                      <p>Since being introduced to the framework, I've added to existing themes, as well as created new ones. Shopify is a very fast paced framework, so there's always a lot of features that can be implemented, such as advanced filtering, international markets, and pushing the boundaries on what can be sold on the platform.</p>
                    </>
                  }
                  secondText={
                    <>
                      <p>A framework that I work with quite frequently is Wordpress. With over 40% of all websites running on the platform, Wordpress is a beast in the website space, and a market leader with curated themes, excellent plugin support, and open source code.</p>
                      <p>The first project which I lead was a Wordpress site for Powerhouse Studios, a photography agency in Leeds. The project involved building a custom theme from scratch to reflect their brand, as well as taking care of planning, implementation, and testing.</p>
                      <p>For a full overview of my work, get in touch with me below!</p>
                    </>
                  }
                  secondImage={Powerhouse}
                  secondImageAlt={`Powerhouse, a photography website built using Wordpress.`}
                  imageFirst={false}
                  buttons={<Button href={`https://www.github.com`} text={`Get in touch`} alt={``} secondary />}
                />
                <TextWithIconSlider
                  fragment={`tech`}
                  text={
                    <>
                      <h2>Technologies and Frameworks</h2>
                      <p>One of the best aspects of web development is the sheer number of fantastic, high quality technologies and frameworks that are available.</p>
                      <p>The full list of technologies and frameworks I'm familiar with is available <a href=''>here</a>.</p>
                    </>
                  }
                />
                <Banner
                  fragment={`contact`}
                  backgroundImage={promo}
                  text={
                    <>
                      <h2>Get in touch</h2>
                      <p>Fill in the form below if you fancy having a chat.</p>
                    </>
                  }
                />
                <ImageBesideText
                  fragment={`more`}
                  image={PHP}
                  imageAlt={`The first HTML & PHP I ever wrote, December 2016.`}
                  text={
                    <>
                      <h2>A <span className={highlightedText}>career</span> in code</h2>
                      <p>I'm originally self-taught, with my programming journey beginning when I was 11. I started getting into code by reverse engineering people's games on the sandbox platform, ROBLOX. I experimented with creating games, simulations, and models that I would make available to other users. The games were pretty successful, boosting my confidence and pushing me to continue adding new features and updates.</p>
                      <p>By the time college came round, I'd been coding in my spare time for about 5 years. It was at college that I was introduced to coding as a career, and most importantly, it was when I was introduced to web development. Working with other like-minded programmers to solve complex problems rapidly propelled me forward and pushed me to focus on development as my career aspiration at University.</p>
                    </>
                  }
                  secondText={
                    <>
                      <p>At University, I continued to extend my knowledge across various programming languages and technologies, with a focus on Android app development. It was at University that I got a lot of exposure solving real world problems, prioritising the user experience, and working in a team environment. I continued to work on hobby projects after graduating, with a focus on learning new frameworks and processes.</p>
                      <p>Stepping up from a hobby programmer to a career developer has been the most beneficial experience of them all over the last decade. Working with talented colleagues and driven clients has pushed me to be on the cutting edge of development, and continues to motivate me to create amazing websites.</p>
                    </>
                  }
                  secondImage={Graduation}
                  secondImageAlt={`Graduating from Bangor University.`}
                />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default App;