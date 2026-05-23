import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Organizers from './components/Organizers';
import CallForPapers from './components/CallForPapers';
import Schedule from './components/Schedule';
import Travel from './components/Travel';
import Registration from './components/Registration';
import AboutKIT from './components/AboutKIT';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import IESProceedings from './components/IESProceedings';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="home">
        <Hero />
        <About />
        <Organizers />
        <CallForPapers />
        <IESProceedings/>
        <Schedule />
 
        <Gallery/>

        <Travel />
        <Registration />
        <AboutKIT />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
