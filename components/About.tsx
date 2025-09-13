"use client"; // pour Next.js 13+ app directory
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import img1 from "../app/assets/about-01.avif";
import img2 from "../app/assets/about-02.avif";
import img3 from "../app/assets/about-03.avif";
import img4 from "../app/assets/about-04.avif";
import { Button } from "./ui/button";

const AboutSection = () => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // cubic bezier (easeOut)
      },
    },
  };
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 px-6 md:px-20 py-12 mt-32">
      {/* Bloc gauche : texte + bouton */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white  font-extrabold mb-6 md:text-center">
        About <strong className="text-primary">Us</strong>
      </h2>
      <div className="w-full flex flex-col-reverse items-start justify-center lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="w-full flex flex-col justify-start items-start text-start space-y-4">
            <p className="font-poppins text-white text-md md:text-lg px-8 py-6 glass">
              Bienvenue dans notre restaurant moderne où la qualité et la
              fraîcheur des ingrédients sont notre priorité. Nous proposons une
              expérience culinaire unique, avec un menu varié pour satisfaire
              tous les goûts.
            </p>
            <p className="font-poppins text-white text-md md:text-lg px-8 py-6 glass">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit dolorem enim aperiam sequi vitae beatae iste quod, odio ipsa
              neque reprehenderit modi quas eos, ipsum ullam repellat! Omnis,
              eos?
            </p>
            <p className="font-poppins text-white text-md md:text-lg px-8 py-6 glass">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit dolorem enim aperiam sequi vitae beatae iste quod, odio ipsa
              neque reprehenderit modi quas eos, ipsum ullam repellat! Omnis,
              eos?
            </p>
            <p className="font-poppins text-white text-md md:text-lg px-8 py-6 glass">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              velit dolorem enim aperiam sequi vitae beatae iste quod, odio ipsa
              neque reprehenderit modi quas eos, ipsum ullam repellat! Omnis,
              eos?
            </p>
          </div>
          <Button className="bg-primary p-8 text-xl font-semibold w-full lg:w-1/2">
            Book a place
          </Button>
        </div>

        {/* Bloc droit : grille images */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {[img1, img2, img3, img4].map((img, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants}
              transition={{ delay: index * 0.15 }}
              className={`
         relative w-full h-64 overflow-hidden rounded-2xl
         shadow-md
         ${index === 1 ? "lg:mt-6" : ""}
         ${index === 2 ? "lg:mt-0" : ""}
         ${index === 3 ? "lg:mt-3" : ""}
         transition-transform duration-500 ease-in-out
       `}
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
