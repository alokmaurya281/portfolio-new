// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import Header from './components/Header';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ReachOutMe from "./components/ReachOutMe";
import Footer from "./components/Footer";
import Certficates from "./components/Certificates";
import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <>
      <Header/>
      <ScrollToTop />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Certficates />
      <Projects />
      <ReachOutMe />
      <Footer />

    </>
  );
}

export default App;
