import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: `${process.env.PUBLIC_URL}/images/img-10.webp`, text: "If I had to choose again, it would still be you. Always you 💍" },
  { src: `${process.env.PUBLIC_URL}/images/img-12.webp`, text: "How can one smile be this perfect? 💙" },
  { src: `${process.env.PUBLIC_URL}/images/img-1.webp`, text: "You’re cute. I’m cute. Perfect combo 😌" },
  { src: `${process.env.PUBLIC_URL}/images/img-3.webp`, text: "Behold - The cutest troublemaker 😉" },
  { src: `${process.env.PUBLIC_URL}/images/img-8.webp`, text: "Every moment with you is my new favorite memory 🥹" },
  { src: `${process.env.PUBLIC_URL}/images/img-6.webp`, text: "The prettiest goofball 😝" },
  { src: `${process.env.PUBLIC_URL}/images/img-7.webp`, text: "Even in the simplest moments, you look beautiful ✨" },
  { src: `${process.env.PUBLIC_URL}/images/img-5.webp`, text: "Softest smile, warmest heart ❤️" },
  { src: `${process.env.PUBLIC_URL}/images/img-2.webp`, text: "We look like we’re judging the entire world 😂" },
];

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-white text-center">
      <h2 className="font-script text-4xl text-rose-700 mb-2">
        Our Memories
      </h2>
      <motion.p
        className="text-rose-600 text-sm animate-bounce mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        (click each image)
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <img
              src={img.src}
              alt="memory"
              className="w-full aspect-3/4 object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-rose-900/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-semibold px-2">{img.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
