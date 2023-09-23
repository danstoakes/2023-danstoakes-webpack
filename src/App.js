import React, { Component } from "react";

import Header from "./components/header";
import ImageBesideText from "./components/slide/image-beside-text";
import Footer from "./components/footer";

import "./scss/index.scss";

import promo from "./assets/images/promo.jpg";
import shopify from "./assets/images/logos/shopify.png";
import bg from "./assets/images/computer-source-code.jpg";
import Banner from "./components/slide/banner";
import TextWithIconSlider from "./components/slide/text-with-icon-slider";
import Button from "./components/button";
import ButtonGroup from "./components/button/group";
import Hero from "./components/slide/hero";

import styles from "./scss/_app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen,
    }));
  }

  render() {
    const { navOpen } = this.state;

    const { bodyNav, bodyNavOpen } = styles;

    return (
      <div className={`${ bodyNav } ${ navOpen ? bodyNavOpen : '' }`}>
        <Header onOpen={this.toggleNav} />
        <Hero
          title={`Full-Stack Web Development`}
          content={`All-in-one UI and UX design platform to create UI assets, prototypes and simulations.`}
        />
        <main> {/* consider replacing with container, then have the footer outside again and make the container absolute */}
          <ImageBesideText
            fragment={`about`}
            image={ promo }
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
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
            backgroundImage={ bg }
            image={ promo }
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
            secondText={
              <>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
            secondImage={ shopify }
            imageFirst={ false }
            buttons={ <Button href={`https://www.github.com`} text={`Get in touch`} alt={``} secondary /> }
          />
          <TextWithIconSlider
            fragment={`tech`}
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
          />
          <Banner
            fragment={`contact`}
            backgroundImage={ promo }
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
          />
          <TextWithIconSlider
            fragment={`tech`}
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
          />
          <Footer />
        </main>
      </div>
    )
  }
};

export default App;