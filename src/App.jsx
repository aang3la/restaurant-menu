import React from 'react';
import { Helmet } from 'react-helmet';
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Menu } from "./components/Menu/Menu";
import { RecommendedFood } from "./components/RecommendedFood/RecommendedFood";

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Website for a restaurant with menu" />
        <meta property="og:title" content="Kaj stara lipa" />
        <meta property="og:description" content="Website for a restaurant with menu" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kajstaralipa.netlify.app/" />
        <meta property="og:image" content="https://kajstaralipa.netlify.app/assets/logo-Uol14nM4.png" />
      </Helmet>
      <Navigation />
      <HeroSection />
      <RecommendedFood />
      <h1 id="headline">Мени</h1>
      <Menu />
      <h1 id="headline">Зошто Кај Стара Липа?</h1>
      <About />
      <Footer />
    </>
  );
}

export default App;
