import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <>
      <section id="upper-section">
        <Header />
        <HeroSection />
      </section>
      <Menu />
    </>
  );
}

export default App;
