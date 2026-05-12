import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { cn } from "./utils/lib";
import { useIsMobile } from "./hooks/useIsMobile";

// App
const App = () => {
  const [hide, setHide] = useState(true);
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      {/* Fixed top banner */}
      <Banner hide={hide} setHide={setHide} />

      <div className="relative z-0 bg-primary min-h-screen">
        {/* Hero background + dynamic top padding depending on banner */}
        <div
          className={cn(
            "bg-hero-pattern bg-cover bg-no-repeat bg-center transition-all duration-300",
            hide ? "pt-20" : "pt-32",
          )}
        >
          {/* Navbar position also depends on banner */}
          <Navbar hide={hide} />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          {/* Stars only on non‑mobile to reduce lag */}
          {!isMobile && <StarsCanvas />}
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;