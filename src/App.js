import React, { Component } from "react";

import Header from "./components/header";
import ImageBesideText from "./components/slide/image-beside-text";
import Footer from "./components/footer";

import "./scss/index.scss";

import promo from "./assets/images/promo.jpg";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <ImageBesideText
            image={ promo }
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
          />
          <ImageBesideText 
            backgroundImage={ promo }
            image={ promo }
            text={
              <>
                <h2>Full-Stack Web Development</h2>
                <p>Innovative and intent software developer with experience making mobile and web applications. Clear understanding of the project lifecycle, including planning, design, testing, and evaluation. Motivated and driven to learn and improve software development practices and also gain experience working for a company and in a team-based environment.</p>
              </>
            }
          />
        </main>
        <Footer />
      </>
    )
  }
};

export default App;