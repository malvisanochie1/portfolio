import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";
import { useState, useEffect, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import { motion } from "framer-motion";
import { styles } from "./styles";
import {
  Slide,
  Fade,
  JackInTheBox,
  Bounce,
  Flip,
  Roll,
  Zoom,
} from "react-awesome-reveal";

const App = () => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const scrollSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    // Load audio from public folder
    scrollSoundRef.current = new Audio("/assets/audio/scroll-tick.mp3");
    clickSoundRef.current = new Audio("/assets/audio/button-click.mp3");

    const handleScroll = () => {
      if (!isSoundEnabled || scrollTimeoutRef.current) return;

      scrollSoundRef.current.currentTime = 0; // reset to start
      scrollSoundRef.current
        .play()
        .catch((err) => console.error("Scroll sound error:", err));

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 100); // debounce
    };

    const handleClick = () => {
      if (!isSoundEnabled) return;

      clickSoundRef.current.currentTime = 0; // reset to start
      clickSoundRef.current
        .play()
        .catch((err) => console.error("Click sound error:", err));
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("click", handleClick);
      clearTimeout(scrollTimeoutRef.current);
    };
  }, [isSoundEnabled]);

  return (
    <BrowserRouter>
      <div className="relative bg-slate-90 z-0 w-full">
        {/* Sound toggle button */}
        <div className="fixed  bottom-4 left-4 z-50 flex gap-4 bg-slate-950 p-2 rounded-lg shadow-lg">
          <button
            onClick={() => setIsSoundEnabled((prev) => !prev)}
            className={`p-2 rounded ${
              isSoundEnabled ? "bg-[#00B7EB] text-slate-950" : "text-slate-200"
            } hover:bg-[#00B7EB] hover:text-slate-950 transition-colors`}
            aria-label={isSoundEnabled ? "Disable sounds" : "Enable sounds"}
          >
            {isSoundEnabled ? (
              <FaVolumeUp size={24} />
            ) : (
              <FaVolumeMute size={24} />
            )}
          </button>
        </div>

        {/* Main content */}
        <Navbar />
        <Hero />

        <div className="relative min-h-[200vh] w-full">
          <div className="bg-black/90 absolute h-full w-full top-0 flex items-center- justify-center-">
            <div className="relative w-full px-5 py-10 sm:py-14 lg:py-24">
              <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12">
                <div className="col-span-7">
                  <p className={styles.sectionSubText}>Introduction</p>
                  <Fade cascade>
                    {" "}
                    <span
                      className="sm:text-battleGray 
                text-eerieBlack text-[34px] sm:text-3xl md:text-5xl font-mova-
                font-extrabold flex items-center whitespace-nowrap z-10 mt-3 mb-5 md:mb-10 lg:mb-14 font-poppins"
                    >
                      About Me{" "}
                    </span>{" "}
                  </Fade>{" "}
                  <div className="mt-4 text-taupe text-[18px] md:text-2xl max-w-3xl leading-[30px] text-end-">
                    <Zoom delay={1e3}>
                      <p className=""> </p>
                    </Zoom>
                    <Bounce delay={1e3} fraction={0.5}>
                      <p className="my-5"></p>
                    </Bounce>
                    <Zoom delay={1e1} fraction={0.5} triggerOnce>
                      <p>
                        Hi there! 👋 I’m Malvis, a detail-driven and creative
                        Frontend Developer with strong skills in React, Next.js,
                        Tailwind CSS, Bootstrap, and modern web UI libraries
                        like Shadcn and Flowbite.
                      </p>
                    </Zoom>
                    <Zoom delay={1e2} fraction={0.5} triggerOnce>
                      <p className="my-5">
                        I specialize in building fast, responsive, and
                        pixel-perfect websites that look great on all devices —
                        whether it’s a landing page, portfolio, business site,
                        dashboard, or custom UI solution. Every line of code I
                        write is optimized for performance, clarity, and
                        real-world use.
                      </p>
                    </Zoom>
                    <Zoom delay={1e3} fraction={0.5} triggerOnce>
                      <p>
                        With hands-on experience in real projects and a strong
                        focus on quality, I’ve helped individuals and businesses
                        bring their visions to life using the latest frontend
                        tools. Whether you’re a startup needing a full site or a
                        busy agency looking for a reliable frontend partner, I’m
                        ready to jump in and deliver.
                      </p>
                    </Zoom>
                  </div>
                </div>
              </div>

              <div className="o absolute right-0 top-0">
                <img src="/public/assets/about1.png" className="object-cover" alt="" />
              </div>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
          >
            <source src="/assets/video_bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-slate-950 bg-cover bg-center bg-no-repeat">
          <About />
        </div>

        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        <Projects />

        <div className="bg-experience bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[150px]">
          <div className="bg-experienceLight bg-cover bg-center bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
