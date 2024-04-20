import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Menu } from "./components/Menu/Menu";
import { RecommendedFood } from "./components/RecommendedFood/RecommendedFood";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <RecommendedFood />
      <h1 id="headline">Мени</h1>
      <Menu />
    </>
  );
}

export default App;
