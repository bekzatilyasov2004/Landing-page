import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Meeting from "./components/Meeting.jsx";
import Projects from "./components/Projects.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Meeting />
      <Projects />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
