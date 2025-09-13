"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Logo from "../app/assets/logo.png";

interface NavbarProps {
  activeTab: "home" | "about" | "menu" | "reservation" | "faq";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"home" | "about" | "menu" | "reservation" | "faq">
  >;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: {
    label: string;
    value: "home" | "about" | "menu" | "reservation" | "faq";
  }[] = [
    { label: "Home", value: "home" },
    { label: "About", value: "about" },
    { label: "Menu", value: "menu" },
    { label: "Réservation", value: "reservation" },
    { label: "FAQ", value: "faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          <Image src={Logo} alt="Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10 font-poppins text-white text-lg font-semibold">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className={`relative group cursor-pointer transition-all duration-300 ease-out
                hover:-translate-y-0.5 hover:text-primary ${
                  activeTab === item.value ? "text-primary" : ""
                }`}
              onClick={() => setActiveTab(item.value)}
            >
              <span className="transition-colors">{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Contact Icon Desktop */}
        <div className="hidden md:flex items-center">
          <Phone className="text-white w-6 h-6 cursor-pointer hover:text-primary transition-colors duration-300" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black ${
          isOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 space-y-6">
          <ul className="flex flex-col gap-4 font-poppins text-white text-lg font-semibold">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer text-white hover:bg-primary transition-all duration-300 ease-out p-4 ${
                  activeTab === item.value
                    ? "bg-primary text-black rounded-md"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab(item.value);
                  setIsOpen(false); // Ferme le menu mobile après clic
                }}
              >
                {item.label}
              </li>
            ))}
            <li className="cursor-pointer text-white hover:bg-primary transition-all duration-300 ease-out p-4">
              <Phone className="text-white w-6 h-6 cursor-pointer hover:text-primary transition-colors duration-300" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
