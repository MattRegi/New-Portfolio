import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Knowledge from "./components/Knowledge";
import Navbar from "./components/navbar";
import SocialsBar from "./components/SocialsBar";


function App() {
  return (
    <div>
      <Navbar />
      <SocialsBar />
      <Home />
      <About />
      <Knowledge />
      <Experience />
      <Contact />
    </div>
  );
}

export default App
