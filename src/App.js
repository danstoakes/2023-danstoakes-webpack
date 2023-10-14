import React, { Component } from "react";

import Header from "./components/header";
import ImageBesideText from "./components/slide/image-beside-text";
import Footer from "./components/footer";
import getHeaderHeight from "./lib/header-height";
import MobileNav from "./nav/mobile-nav";

import About from "./assets/images/about.jpg";
import Work from "./assets/images/computer-generic-background.png";
import Furn from "./assets/images/furn.png";
import Powerhouse from "./assets/images/powerhouse.png";
import PHP from "./assets/images/PHP.jpg";
import Graduation from "./assets/images/graduation.jpg";

import promo from "./assets/images/promo.jpg";
import Banner from "./components/slide/banner";
import TextWithIconSlider from "./components/slide/text-with-icon-slider";
import Button from "./components/button";
import ButtonGroup from "./components/button/group";
import Hero from "./components/slide/hero";

import "./scss/index.scss";
import styles from "./scss/_app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.updateHtmlOverflow = this.updateHtmlOverflow.bind(this);
  }

  componentDidMount() {
    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        this.toggleNav();

        const hash = anchor.getAttribute("href");
        const target = document.querySelector(hash);

        if (!target) return;

        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - getHeaderHeight();

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        history.pushState(null, null, hash);
      });
    });

    // Call the updateHtmlOverflow function when the component mounts
    this.updateHtmlOverflow();
  }

  componentDidUpdate(prevProps, prevState) {
    // Call the updateHtmlOverflow function when the navOpen state changes
    if (prevState.navOpen !== this.state.navOpen) {
      this.updateHtmlOverflow();
    }
  }

  toggleNav() {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen,
    }));
  }

  updateHtmlOverflow() {
    // Get a reference to the <html> tag
    const htmlElement = document.documentElement;

    // Set the overflow property based on the navOpen state

    if (this.state.navOpen)
      htmlElement.style.overflow = "hidden";
    else
      htmlElement.style.overflow = "";
  }

  render() {
    const { navOpen } = this.state;

    const { bodyNav, bodyNavOpen, container, highlightedText, pageContainer } = styles;

    return (
      <>
        <Header onOpen={this.toggleNav} navOpen={this.state.navOpen} />
        <MobileNav isOpen={navOpen} />
        <div className={`${bodyNav} ${navOpen ? bodyNavOpen : ''}`}>
          <div className={pageContainer}>
            <Hero
              title={`Full-Stack Web Development`}
              content={`No-fuss web development made simple. Elegant and simple solutions coupled with highly customisable and user-friendly interfaces.`}
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
                      <h2>A bit<span className={highlightedText}> about </span>me</h2>
                      <p>I'm a Full-Stack Web Developer with 2 years of agency experience, starting in a junior position and working up to project lead across a range of different new build sites and ongoing retainers.</p>
                      <p>Crafting elegant and intuitive solutions for complex problems has been my focus for the best part of the last decade. With a diverse background in developing Android and iOS applications, games, and various tools, I've acquired a versatile skill set that spans a wide range of technologies.</p>
                    </>
                  }
                  buttons={
                    <ButtonGroup>
                      <Button href={`https://www.github.com`} text={`Projects I've done`} alt={``} target={`_blank`} />
                      <Button href={`#tech`} text={`Tech I work with`} alt={``} ternary />
                    </ButtonGroup>
                  }
                />
                <ImageBesideText
                  fragment={`work`}
                  backgroundImage={Work}
                  objectFit={`contain`}
                  image={Furn}
                  imageAlt={`furn, an e-commerce website built using Shopify.`}
                  text={
                    <>
                      <h2>Some of my work</h2>
                      <p>A framework I work with daily is Shopify, an e-commerce platform with over 4.5 million sites online. I've worked on numerous custom themes, including work on existing sites and new builds.</p>
                      <p>Some notable bits of work I've done on Shopify are:</p>
                      <ul>
                        <li>Made an intricate custom filtering system that significantly reduced costs for a client.</li>
                        <li>Expanded the platform's capabilities by implementing custom per-metre pricing for fabric products.</li>
                        <li>Enabled hassle-free international capabilities by integrating full translation and currency support for a global store.</li>
                        <li>Created a suite of customisable sections that could be effortlessly managed within the OS 2 framework.</li>
                      </ul>
                    </>
                  }
                  secondText={
                    <>
                      <p>Another Framework I use regularly is Wordpress. Given that over 40% of all websites online are driven by the platform, it's an essential tool for any web developer. I have experience working on a range of different themes, utilising custom Gutenberg blocks, and advanced custom fields.</p>
                      <p>My first major project involved leading a complete website build for Powerhouse Studios, a photography agency located in Leeds. This project involved crafting a tailor-made WordPress theme to faithfully represent their brand, as well as a straightforward and highly customisable Gutenberg backend.</p>
                    </>
                  }
                  secondImage={Powerhouse}
                  secondImageAlt={`Powerhouse, a photography website built using Wordpress.`}
                  imageFirst={false}
                  buttons={<Button href={`#contact`} text={`Get in touch`} alt={``} secondary />}
                />
                <TextWithIconSlider
                  fragment={`tech`}
                  text={
                    <>
                      <h2><span className={highlightedText}>Technologies</span> and Frameworks</h2>
                      <p>Making great websites is made a lot easier thanks to the range of fantastic frameworks that are available. View the <a href="https://github.com/danstoakes/2023-tech-stack/tree/master/tech">full list</a> of technologies and frameworks I'm familiar with.</p>
                    </>
                  }
                />
                <Banner
                  fragment={`contact`}
                  backgroundImage={promo}
                  text={
                    <>
                      <h2>Get in <span className={highlightedText}> contact</span></h2>
                      <p>Fill in the form below if you fancy having a chat.</p>
                    </>
                  }
                  hasForm
                />
                <ImageBesideText
                  fragment={`extra`}
                  image={PHP}
                  imageAlt={`The first HTML & PHP I ever wrote, December 2016.`}
                  text={
                    <>
                      <h2>A few <span className={highlightedText}>extra</span> details</h2>
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