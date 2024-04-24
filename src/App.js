import Menu from "./components/menu.js";
import Carousel from "./components/carousel";
import Biography from "./components/biography";
import Separator from "./components/separator";
import AccordionCode from "./components/accordion";
import Autoscroll from "./components/autoscroll";
import Footer from "./components/footer";
import "./styles/style.css";
import "./index";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Carousel />
        <Biography />
        <Separator />
        <AccordionCode />
        <Autoscroll />
        <Footer />
      </header>
    </div>
  );
}

export default App;
