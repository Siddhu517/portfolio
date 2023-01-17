import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/container/Navbar";
import Bot from './components/container/Bot';
import Hero from "./components/container/Hero";
import About from "./components/container/About";
import Skills from "./components/container/Skills";
//import Hireme from "./components/container/Hireme";
import Projects from "./components/container/Projects";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer";

function App() {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      {/* <Hireme /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
