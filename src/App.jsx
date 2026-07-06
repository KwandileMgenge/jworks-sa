import './styles/global.css';

import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import StripBanner   from './components/StripBanner';
import Services      from './components/Services';
import About         from './components/About';
import Director      from './components/Director';
import Gallery       from './components/Gallery';
import Community     from './components/Community';
import Contact       from './components/Contact';
import Statutory     from './components/Statutory';
import Footer        from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StripBanner />
      <Services />
      <About />
      <Director />
      <Gallery />
      <Community />
      <Contact />
      <Statutory />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
