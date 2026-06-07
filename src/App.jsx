import "./styles/global.css";

import Navbar         from "./components/Navbar/Navbar";
import Hero           from "./components/Hero/Hero";
import StripBanner    from "./components/StripBanner/StripBanner";
import Services       from "./components/Services/Services";
import About          from "./components/About/About";
import Community      from "./components/Community/Community";
import Accreditations from "./components/Accreditations/Accreditations";
import Gallery        from "./components/Gallery/Gallery";
import Contact        from "./components/Contact/Contact";
import Footer         from "./components/Footer/Footer";
import WhatsAppFloat  from "./components/WhatsAppFloat/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StripBanner />
      <Services />
      <About />
      <Community />
      <Accreditations />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
