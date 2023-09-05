import AboutCss from "./styles/About.css";
import FooterCss from "./styles/Footer.css";
import HeaderCss from "./styles/Header.css";
import NavbarCss from "./styles/Navbar.css";
import OfferCss from"./styles/Offer.css";
import AppCss from "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
