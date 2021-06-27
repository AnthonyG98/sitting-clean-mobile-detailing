import './App.css';
import Nav from "./components/nav"
import MobNav from "./mobcomp/mobnav"
import MobHead from "./mobcomp/header"
import Home from "./components/home"
import MobHome from "./mobcomp/mobhome"
import Pricing from './components/pricing';
import MobPrices from "./mobcomp/mobprices"
import Gallery from "./components/gallery"
import MobGallery from "./mobcomp/mobgallery"
import Contact from "./components/contact"
import MobContact from "./mobcomp/mobnav"
import About from "./components/about"
import MobAbout from "./mobcomp/mobnav"
import Footer from "./components/footer"
import MobFooter from "./mobcomp/mobnav"
import "./responsive.css"
import { SliderData } from './components/sliderdata';
/*<Nav />
      <Home />
      <Pricing />
      <Gallery />
      <Contact />
      <About />
      <Footer />*/
function App() {
  return (
    <div className="App">
      <MobHead />
      <MobNav />
      <MobHome />
      <MobPrices />
      <Nav />
      <Home/>
      <Pricing />
      <Gallery slides={SliderData}/>
      <MobGallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
