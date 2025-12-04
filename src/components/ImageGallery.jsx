import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/img2.jpeg", text: "I still can’t believe you’re mine 😌" },
  { src: "/images/img1.jpeg", text: "My favorite smile ❤️" },
  { src: "/images/img3.jpeg", text: "You make my world beautiful ✨" },
  { src: "/images/img4.jpeg", text: "The cutest troublemaker ever 😉" },
];

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-white text-center">
      <h2 className="font-script text-4xl text-rose-700 mb-8">
        Our Memories
      </h2>

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
              className="w-full h-[380px] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-rose-900/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{img.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
