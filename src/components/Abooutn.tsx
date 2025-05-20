import React from "react";
import {
  // Slide,
  Fade,
  // JackInTheBox,
  Bounce,
  // Flip,
  // Roll,
  Zoom,
} from "react-awesome-reveal";
import { MacbookScrollDemo } from "./ui/macbook";
import { motion } from "framer-motion";
const Abooutn = () => {
  return (

    <div className="md:bg-[#0B0B0F] bg-slate-50 min-h-screen ">
      {" "}
      <div className="grid grid-cols-2 md:grid-cols-12 h-full">
        {/*  */}
        {/* <!-- Left Sidebar (Pink) --> */}
        <div className="col-span-2 w-full min-h-[100px] bg-[#858585] flex items-center justify-center">
          <div className="text-4xl font-bold text-black transform md:-rotate-90 whitespace-nowrap text-center ">
            <motion.h1
              initial={{ opacity: 0.5, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="capitalize text-4xl md:text-5xl font-bold text-center text-white- text-[#C5C5C7] text-shadow-2xs text-shadow-sky-300 "
            >
              about me
            </motion.h1>{" "}
          </div>
        </div>

        {/* <!-- Middle Section (White with Text) --> */}
        <div className="col-span-5 bg-slate-950 flex-1 p-8 flex items-center justify-center">
          <div className="max-w-lg text-xl ">
            <Zoom delay={1e1} fraction={0.5}>
              <p>
                Hi there! 👋 I’m Malvis, a detail-driven and creative Frontend
                Developer with strong skills in React, Next.js, Tailwind CSS,
                Bootstrap, and modern web UI libraries like Shadcn and Flowbite.
              </p>
            </Zoom>
            <Zoom delay={1e2} fraction={0.5}>
              <p className="my-5">
                I specialize in building fast, responsive, and pixel-perfect
                websites that look great on all devices — whether it’s a landing
                page, portfolio, business site, dashboard, or custom UI
                solution. Every line of code I write is optimized for
                performance, clarity, and real-world use.
              </p>
            </Zoom>
            <Zoom delay={1e3} fraction={0.5}>
              <p>
                With hands-on experience in real projects and a strong focus on
                quality, I’ve helped individuals and businesses bring their
                visions to life using the latest frontend tools. Whether you’re
                a startup needing a full site or a busy agency looking for a
                reliable frontend partner, I’m ready to jump in and deliver.
              </p>
            </Zoom>
          </div>
        </div>

        {/* <!-- Right Sidebar (Red) --> */}
        <div className="col-span-5 w-full bg-slate-950 md:bg-[#0B0B0F] max-h-fit full">
        <motion.h1
              initial={{ opacity: 0.5, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="capitalize text-4xl md:text-5xl font-bold text-center text-white"
            >
          <MacbookScrollDemo />
          </motion.h1>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Abooutn;
