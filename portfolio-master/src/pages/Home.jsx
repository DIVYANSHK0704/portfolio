import HeroPage from "../components/HeroPage";
import ToolBox from "../components/ToolBox";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>

      <section id="home">
        <HeroPage />
      </section>

      <section id="work">
        <ToolBox />
      </section>

      <section id="contact">
        <Footer />
      </section>

    </div>
  );
}