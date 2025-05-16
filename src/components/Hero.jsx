import { motion } from "framer-motion";
// import { Link } from 'react-router-dom';
import { styles } from "../styles";
// import { navLinks } from '../constants';
import { bwmap, worldmap } from "../assets";
import HeroImg from "../assets/malvis/black.png";
import { Slide, Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="overflow-x-hidden relative w-full">
      <div className="absolute overflow-x-hidden top-0 left-0 z-0 h-[100vh] w-screen ">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex md:grid grid-cols-12 sm:flex-row flex-col w-full md:min-h-screen  md:h-[141vh]  lg:h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden pt-20"
      >
        <div
          className={`md:absolute inset-0 col-span-5 sm:top-[250px] top-[250px] pt-12 md:pt-0
          lg:top-[150px] w-full xl:top-[225px] sm:ps-7 ps-2
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <Slide direction="up" cascade damping={0.1}>
            <div className="flex flex-col justify-center items-center ml-3">
              <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden-" />
              <div className="w-1 sm:h-[400px] h-40 bw-gradient sm:hidden-" />
            </div>
          </Slide>
          <div className="min-h-40- w-full">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              <Slide direction="left"> Hi, I&apos;m </Slide>{" "}
              <Fade cascade>
                {" "}
                <span
                  className="sm:text-battleGray 
                text-eerieBlack text-[34px] sm:text-3xl md:text-8xl font-mova
                font-extrabold uppercase flex items-center whitespace-nowrap z-10 mt-"
                >
                  Malvis Anochie
                </span>{" "}
              </Fade>
            </h1>
            <Fade direction="right">
              <p
                className={`${styles.heroSubText} mt-2 md:text-eerieBlack text-gray-600  text-2xl block`}
              >
                Creative Frontend Web Developer crafting visually stunning,
                responsive, and high-performing websites with precision and
                passion.
                <br className="sm:block hidden" />
              </p>
            </Fade>
          </div>

          <div
            className="hidden w-screen md:flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>


          <div></div>
        </div>
        <div className="col-span-7 flex justify-end">
          <img
            className="md:hidden h-full    
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] object-cover object-left-top md:h-[70vh] xl:h-[80vh] right-0 z-0  sm:w-auto"
            src={HeroImg}
            alt="shaquille"
          />
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex z-40
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Image*/}

        <div>
          <img
            className="hidden md:flex absolute bottom-0  ml-[20vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] right-0 z-0 w-full sm:w-auto"
            src={HeroImg}
            alt="shaquille"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
