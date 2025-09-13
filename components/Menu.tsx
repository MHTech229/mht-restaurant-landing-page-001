"use client";
import React from "react";
import Image from "next/image";
import QRcode from "../app/assets/qrcode.webp";

const MenuSection = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center gap-6 px-6 md:px-20 py-12 mt-32">
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white  font-extrabold mb-6 md:text-center">
        Please scan the <strong className="text-primary">QR code</strong> or
        click the button below to explore our{" "}
        <strong className="text-primary capitalize">digital menu</strong>.
      </h2>

      <p className="font-poppins text-gray-400 md:text-center text-md md:text-lg lg:text-xl mb-8 w-full md:w-full lg:w-3/4">
        By scanning the QR code, you can instantly access our full digital menu
        directly on your device. This convenient option allows you to browse
        through our dishes, discover detailed descriptions, and stay updated
        with the latest specials — all while reducing paper usage and supporting
        an eco-friendly experience.
      </p>

      <a
        href="https://tonmenu.digital" // Remplace par le lien réel
        target="_blank"
        rel="noopener noreferrer"
        className="w-72 h-72 md:w-96 md:h-96 overflow-hidden"
      >
        <Image
          src={QRcode}
          alt="QR code Menu"
          className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-full h-full"
        />
      </a>
    </section>
  );
};

export default MenuSection;
