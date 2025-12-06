import React from "react";
import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <section className="py-20 px-6 text-center bg-pink-50 flex flex-col items-center">

      <motion.div className="shadow-2xl shadow-rose-800/60 w-5/6 w-auto p-4 border border-rose-400 rounded-2xl">
        <motion.h2
          className="font-script text-4xl text-rose-700 mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          To the one my heart chose 🩷
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-rose-800 text-lg text-justify leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          I think about you more than you proabably realize. When something funny happens, when I see something beautiful and or bhi bija moments ma and my first thought is "aa to sakina sathe share kris" 😙. I wish you could see how much space you take up in my heart, my mind, and every little part of my day.
          <br /><br />
          And you know, tame kitna bhi busy rho, even on the busiest day itna sb kaam maa somehow you still find time for me, for us 🥹. I can't express in words how much it means to me. The way you show up, even on your most chaotic days, makes me fall for you a little more every time.
          I hope I make you feel as special and loved as you make me feel 🫶🏼.
        </motion.p>
        <motion.p
          className="mt-6 text-rose-900 text-2xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Waras Mubarak, my Love🩷
        </motion.p>
        <motion.p className="font-script text-3xl text-rose-700 mt-4">
          I Love You 😘  — today and every day.
        </motion.p>
      </motion.div>

      <a href="#top" className="mt-10 inline-block text-rose-600 underline">
        Back to top ↑
      </a>

    </section>
  );
}
