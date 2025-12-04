import React from "react";
import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <section className="py-20 px-6 text-center bg-pink-50">

      <motion.h2
        className="font-script text-4xl text-rose-700 mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        To the one my heart chose
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-rose-800 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Another year of you being your dramatic, adorable, annoyingly perfect self — 
        and somehow, I’m still not tired of you.  
        You annoy me, distract me, steal my food…  
        and still manage to be my favorite human in the universe.
      </motion.p>

      <motion.p
        className="mt-6 text-rose-900 font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Happy Birthday, my love.  
        My heart celebrates you — today and every day.
      </motion.p>

      <a href="#top" className="mt-8 inline-block text-rose-600 underline">
        Back to top ↑
      </a>

    </section>
  );
}
