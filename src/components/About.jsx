import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

// ✅ Add prop-types validation here
ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <div className="mt-[6rem] min-h-screen w-full relative">
      {/* // <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div> */}
      <div></div>
          
             <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] md:text-2xl max-w-3xl leading-[30px]"
        >
          <p className="">
            {" "}
            Hi there! 👋 I’m Malvis, a detail-driven and creative Frontend
            Developer with strong skills in React, Next.js, Tailwind CSS,
            Bootstrap, and modern web UI libraries like Shadcn and Flowbite.
          </p>
          <p className="my-5">
            I specialize in building fast, responsive, and pixel-perfect
            websites that look great on all devices — whether it’s a landing
            page, portfolio, business site, dashboard, or custom UI solution.
            Every line of code I write is optimized for performance, clarity,
            and real-world use.
          </p>
          <p>
            With hands-on experience in real projects and a strong focus on
            quality, I’ve helped individuals and businesses bring their visions
            to life using the latest frontend tools. Whether you’re a startup
            needing a full site or a busy agency looking for a reliable frontend
            partner, I’m ready to jump in and deliver.
          </p>
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

       
        <div>
        </div>
        <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute top-0 left-0 z-[-1]"
            >
              <source
                src="/assets/video_bg.mp4"
                type="video/mp4"
              />
            </video>
</ div>
       
  );
};

export default SectionWrapper(About, "about");
