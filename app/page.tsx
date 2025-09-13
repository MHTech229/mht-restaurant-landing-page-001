"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HeroSection from "@/components/Hero";
import AboutSection from "@/components/About";
import MenuSection from "@/components/Menu";
import ReservationSection from "@/components/Reservation";
import FAQSection from "@/components/FAQ";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "home" | "about" | "menu" | "reservation" | "faq"
  >("home");

  const [loading, setLoading] = useState(true);

  // Simule le chargement complet (images, scripts, etc.)
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000); // petit délai pour un effet fluide
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // Variants pour Framer Motion
  const sectionVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative flex flex-col justify-start items-start w-screen h-screen overflow-x-hidden overflow-y-scroll">
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Navbar */}
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Conteneur des sections */}
          <div className="relative w-full h-full">
            <AnimatePresence mode="wait">
              {activeTab === "home" && (
                <motion.div
                  key="home"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <HeroSection setActiveTab={setActiveTab} />
                </motion.div>
              )}

              {activeTab === "about" && (
                <motion.div
                  key="about"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <AboutSection />
                </motion.div>
              )}

              {activeTab === "menu" && (
                <motion.div
                  key="menu"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <MenuSection />
                </motion.div>
              )}

              {activeTab === "reservation" && (
                <motion.div
                  key="reservation"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <ReservationSection />
                </motion.div>
              )}

              {activeTab === "faq" && (
                <motion.div
                  key="faq"
                  variants={sectionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  <FAQSection />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  );
}
