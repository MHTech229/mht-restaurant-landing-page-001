"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import BurgerImg from "../app/assets/burger.webp";
import PizzaImg from "../app/assets/pizza.webp";
import PastaImg from "../app/assets/pasta.webp";

interface HeroProps {
  setActiveTab: React.Dispatch<
    React.SetStateAction<"home" | "about" | "menu" | "reservation" | "faq">
  >;
}

const slides = [
  {
    title: "BURGER",
    subtitle: "Savoureux burger maison avec fromage fondant et légumes frais.",
    image: BurgerImg,
  },
  {
    title: "PIZZA",
    subtitle: "Pizza italienne croustillante avec garnitures de qualité.",
    image: PizzaImg,
  },
  {
    title: "PASTA",
    subtitle: "Pâtes artisanales avec sauce maison et herbes fraîches.",
    image: PastaImg,
  },
];

const HeroSection: React.FC<HeroProps> = ({ setActiveTab }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="w-screen h-screen relative flex items-center justify-center bg-black overflow-hidden mt-2 md:mt-32">
      {/* Social icons left */}
      <div className="hidden md:flex flex-col gap-6 absolute left-6 top-3/5 transform -translate-y-1/2 z-20">
        <a
          href="#"
          aria-label="facebook"
          className="text-white hover:text-orange-500 transition"
        >
          <Facebook size={28} />
        </a>
        <a
          href="#"
          aria-label="instagram"
          className="text-white hover:text-orange-500 transition"
        >
          <Instagram size={28} />
        </a>
        <a
          href="#"
          aria-label="twitter"
          className="text-white hover:text-orange-500 transition"
        >
          <Twitter size={28} />
        </a>
      </div>

      {/* Carrousel container */}
      <div className="relative z-10 flex items-center justify-center w-full md:w-3/4 h-3/4">
        {/* Big background title */}
        <h1 className="absolute top-[10vh] sm:top-[6vh] md:top-[8vh] lg:-top-[4vh]  text-white font-extrabold font-playfair text-[24vw] sm:text-[20vw] md:text-[16vw] lg:text-[12vw] select-none leading-none pointer-events-none z-0">
          {slides[current].title}
        </h1>

        {/* Centered Image */}
        <div className="relative flex justify-center items-center w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3"
            priority
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 text-white text-xl md:text-4xl font-bold z-20 px-2 py-2 rounded-full bg-primary transition"
          aria-label="Précédent"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 text-white text-xl md:text-4xl font-bold z-20 px-2 py-2 rounded-full bg-primary transition"
          aria-label="Suivant"
        >
          <ArrowRight />
        </button>
        {/*  */}
      </div>

      {/* Bottom-right description */}
      <div className="absolute bottom-6 right-6 z-20 max-w-xs text-right">
        <h2 className="text-primary font-extrabold text-3xl md:text-4xl">
          {slides[current].title}
        </h2>
        <p className="text-gray-400 mt-2 font-poppins">
          {slides[current].subtitle}
        </p>
        <button
          onClick={() => setActiveTab("reservation")}
          className="cursor-pointer mt-4 px-10 py-4 rounded-sm border border-primary text-primary hover:bg-primary hover:text-black font-bold transition"
        >
          Réserver
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
