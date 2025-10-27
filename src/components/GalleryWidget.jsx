 import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const GalleryWidget = () => {
  const [images, setImages] = useState([img1, img2, img3, img4]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const fileInputRef = useRef(null);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(currentIndex + 1);
    }
  };

  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages([...images, e.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleMouseEnter = (index) => {
    setSelectedImage(index);
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative rounded-[20px] p-6 pb-8 shadow-2xl w-full max-w-[720px]"
      style={{
        height: "316px",
        background: "#363C43",
        boxShadow: "5.67px 5.67px 3.78px 0px #00000066",
      }}
    >
   
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      
      <div className="flex items-center justify-between mb-6">
        
        <div className="flex items-center gap-6">
          {/* Question Mark Icon with Tooltip */}
          <div
            className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:opacity-80 transition-all relative"
            style={{
              background: "linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)",
              boxShadow: "inset 0px 4px 4px 0px #00000040",
            }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            ?
            
            {/* Tooltip */}
            {showTooltip && (
              <div 
                className="absolute left-8 top-0 px-3 py-1 rounded-md text-white text-xs font-medium whitespace-nowrap z-10"
                style={{
                  background: '#171717',
                  boxShadow: '0px 4px 10px 2px #00000040'
                }}
              >
                Gallery
              </div>
            )}
          </div>

          {/* Gallery Button */}
          <div
            className="px-10 py-3 rounded-[20px] text-white font-medium text-[20px]"
            style={{
              background: "#171717",
              boxShadow: "0px 4px 10px 2px #00000040",
            }}
          >
            Gallery
          </div>
        </div>

         
        <div className="flex items-center gap-8">
          {/* Add Image Button */}
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-[12px] hover:opacity-80 transition-all cursor-pointer"
            style={{
              background: "#FFFFFF08",
              boxShadow:
                "inset 0px 3.26px 3.26px 0px #FFFFFF26, inset 0px 0px 48.91px 0px #FFFFFF0D, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #FFFFFF40",
            }}
          >
            <span className="text-[16px]">+</span>
            <span>ADD IMAGE</span>
          </button>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 cursor-pointer group"
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                boxShadow:
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                cursor: currentIndex === 0 ? "default" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (currentIndex > 0) {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px 5px rgba(150, 190, 231, 0.6), 4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7";
                  e.currentTarget.style.background =
                    "linear-gradient(139.14deg, #404449 12.4%, #262728 94.96%)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7";
                e.currentTarget.style.background =
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)";
              }}
            >
              <svg
                className="w-5 h-5 text-[#6F787C] group-hover:text-[#FFFFFF] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 3}
              className="w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 cursor-pointer group"
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                boxShadow:
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                cursor: currentIndex >= images.length - 3 ? "default" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (currentIndex < images.length - 3) {
                  e.currentTarget.style.boxShadow =
                    "0 0 20px 5px rgba(150, 190, 231, 0.6), 4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7";
                  e.currentTarget.style.background =
                    "linear-gradient(139.14deg, #404449 12.4%, #262728 94.96%)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7";
                e.currentTarget.style.background =
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)";
              }}
            >
              <svg
                className="w-5 h-5 text-[#6F787C] group-hover:text-[#FFFFFF] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="relative flex gap-4 items-center mb-8">
        {/* Grid Icon (6 boxes) - Vertical on Left Side */}
        <div
          className="grid grid-cols-2 grid-rows-3 flex-shrink-0"
          style={{
            width: "24px",
            height: "30.69px",
            gap: "1.38px",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              style={{
                width: "9.31px",
                height: "9.31px",
                borderRadius: "1.16px",
                background: "#4A4E54",
                boxShadow: "0px 1px 2px 0px #00000040",
              }}
            ></div>
          ))}
        </div>

        {/* Images Container with Slide Animation */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex gap-5"
            >
              {images
                .slice(currentIndex, currentIndex + 3)
                .map((image, index) => (
                  <motion.div
                    key={currentIndex + index}
                    onClick={() => handleImageClick(currentIndex + index)}
                    onMouseEnter={() => handleMouseEnter(currentIndex + index)}
                    onMouseLeave={handleMouseLeave}
                    className="flex-1 rounded-[24px] overflow-hidden cursor-pointer"
                    style={{
                      height: "179px",
                      boxShadow: hoveredImage === currentIndex + index 
                        ? "0px 8px 24px 4px rgba(0, 0, 0, 0.5)" 
                        : "0px 4px 10px 2px #00000040",
                    }}
                    animate={{
                      y: hoveredImage === currentIndex + index ? -10 : 0,
                      scale: hoveredImage === currentIndex + index ? 1.08 : 
                             selectedImage === currentIndex + index ? 1.02 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    <motion.img
                      src={image}
                      alt={`Gallery ${currentIndex + index + 1}`}
                      className="w-full h-full object-cover"
                      style={{ cursor: "pointer" }}
                      animate={{
                        filter:
                          selectedImage === currentIndex + index || hoveredImage === currentIndex + index
                            ? "grayscale(0%) brightness(1.1)"
                            : "grayscale(100%)",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

     
    </div>
  );
};

export default GalleryWidget;
