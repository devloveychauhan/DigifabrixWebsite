import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Solutions from "./component/Solutions";
import WhyUs from "./component/WhyUs";
import OEE from "./component/OEE";
import Features from "./component/Feature";
import Testimonials from "./component/Testimonial";
import { Route, Routes } from "react-router-dom";
import Career from "./component/Career";
import ScrollToTop from "./utils/Scroll";

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/oee" element={<OEE />} />
        <Route path="/features" element={<Features />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
