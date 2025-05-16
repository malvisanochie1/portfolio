import { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa"; // Icons

const PortfolioSection = () => {
  // State to manage viewport width
  const [viewportWidth, setViewportWidth] = useState("100%"); // Default: full width

  // Device widths (in pixels)
  const deviceWidths = {
    laptop: "1280px",
    tablet: "768px",
    mobile: "360px",
  };

  // Handle icon click to set viewport width
  const handleDeviceChange = (device) => {
    setViewportWidth(deviceWidths[device]);
  };

  // Animation variants
  const imageVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 0.8, ease: "easeOut" }, // 800ms slide
        opacity: { duration: 0.8 },
        when: "beforeChildren",
      },
    },
    zoom: {
      scale: [1, 1.2, 0.8, 1],
      transition: {
        scale: {
          times: [0, 0.4, 0.7, 1],
          duration: 0.4, // 400ms zoom
          ease: "easeInOut",
          delay: 0.8,
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "#121212", // Obsidian Black
        color: "#F5F5F5", // Soft White
        minHeight: "100vh",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Responsive Preview Toolbar */}
      <div className="fixed top-4 left-4 z-50 flex gap-4 bg-[#1A1A1A] p-2 rounded-lg shadow-lg">
        <button
          onClick={() => handleDeviceChange("laptop")}
          className={`p-2 rounded ${viewportWidth === deviceWidths.laptop ? "bg-[#00B7EB] text-[#121212]" : "text-[#F5F5F5]"} hover:bg-[#00B7EB] hover:text-[#121212] transition-colors`}
          aria-label="Switch to laptop view"
        >
          <FaLaptop size={24} />
        </button>
        <button
          onClick={() => handleDeviceChange("tablet")}
          className={`p-2 rounded ${viewportWidth === deviceWidths.tablet ? "bg-[#00B7EB] text-[#121212]" : "text-[#F5F5F5]"} hover:bg-[#00B7EB] hover:text-[#121212] transition-colors`}
          aria-label="Switch to tablet view"
        >
          <FaTabletAlt size={24} />
        </button>
        <button
          onClick={() => handleDeviceChange("mobile")}
          className={`p-2 rounded ${viewportWidth === deviceWidths.mobile ? "bg-[#00B7EB] text-[#121212]" : "text-[#F5F5F5]"} hover:bg-[#00B7EB] hover:text-[#121212] transition-colors`}
          aria-label="Switch to mobile view"
        >
          <FaMobileAlt size={24} />
        </button>
        <button
          onClick={() => setViewportWidth("100%")}
          className={`p-2 rounded ${viewportWidth === "100%" ? "bg-[#00B7EB] text-[#121212]" : "text-[#F5F5F5]"} hover:bg-[#00B7EB] hover:text-[#121212] transition-colors`}
          aria-label="Reset to full width"
        >
          Full
        </button>
      </div>

      {/* Resizable Container */}
      <div
        style={{
          width: viewportWidth,
          maxWidth: "100%", // Prevent overflow
          margin: "0 auto", // Center the container
          overflow: "hidden", // Hide content outside the width
          position: "relative",
        }}
      >
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={["visible", "zoom"]} // Trigger on mount
          className="relative w-full h-[90vh] sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
        >
          <img
            className="absolute bottom-0 left-1/2 lg:left-3/4 md:left-[60%] xmd:left-[60%] 2xl:left-[83%] 
                       transform -translate-x-1/2 w-auto h-full object-cover max-w-full"
            style={{ boxShadow: "0 0 15px rgba(0, 183, 235, 0.3)" }} // Electric Blue glow
            src={shaq}
            alt="shaquille"
            aria-label="Decorative image of Shaquille"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSection;