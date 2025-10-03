import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[74vh] sm:h-[83vh] bg-no-repeat bg-cover bg-center sm:bg-[url('https://static.vecteezy.com/system/resources/previews/063/105/116/large_2x/pink-vertical-background-with-glittering-flowers-soft-light-copy-space-for-baby-shower-birthday-or-women-s-day-design-free-photo.jpeg')] bg-[url('https://png.pngtree.com/background/20210717/original/pngtree-pink-gradient-flower-vintage-background-picture-image_1433070.jpg')]">
      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-8 md:px-16">
        <motion.div
          className="flex flex-col items-start gap-4 text-left max-w-lg"
          initial={{ opacity: 0, y: 50 }} // start slightly below
          animate={{ opacity: 1, y: 0 }} // animate up into view
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-xl sm:text-2xl underline mt-12 sm:mt-0 md:text-4xl font-bold text-pink-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Handmade Bouquets & Gifts
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Crafted with Love 💕
          </motion.p>

          <motion.p
            className="text-xs sm:text-sm md:text-base text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Starting from ₹499 | Same-day Delivery in Guwahati | Pan-India Shipping.
          </motion.p>

          <motion.button
            className="bg-pink-600 hover:bg-gray-600 font-semibold text-xs sm:text-sm md:text-base transition-all text-white rounded-3xl px-4 py-2 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
