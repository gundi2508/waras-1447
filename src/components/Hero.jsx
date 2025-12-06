import React from "react";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Balloons from "./Balloons";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      <FloatingHearts />
      <Balloons />

      <motion.h1
        className="font-script text-5xl md:text-6xl text-rose-700 drop-shadow-sm mb-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Waras Mubarak, My Sweet Gundi 💕
      </motion.h1>

      <div className="max-w-[340px] w-4/6 md:w-2/6 max-w-5xl mx-auto flex items-center justify-center">
        <motion.div
          className="relative group overflow-hidden rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 * 0.15 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/img-11.webp`}
            alt="memory"
            className="w-full aspect-3/4 object-cover transition duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>

      <motion.p
        className="mt-4 max-w-xl text-lg md:text-xl text-rose-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Another year, another reason to fall even more in love with you.
      </motion.p>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#gallery" className="text-rose-600 text-sm animate-bounce">
          ▼ Scroll Down ▼
        </a>
      </motion.div>
    </section>
  );
}
