import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Competence from "./components/Competence/Competence.jsx";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Competence />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
