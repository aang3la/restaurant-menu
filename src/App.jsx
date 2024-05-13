import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Menu } from "./components/Menu/Menu";
import { RecommendedFood } from "./components/RecommendedFood/RecommendedFood";

function App() {
  return (
    <>
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
