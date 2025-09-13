"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner"; // import direct depuis sonner
import { set } from "react-hook-form";

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });

        toast.success("Réservation zffectuée avec succès 🎉");
        setIsLoading(false);
      } else {
        toast.error("❌ Erreur", {
          description: "Impossible d’envoyer votre réservation, réessayez.",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Erreur inattendue", {
        description: "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full px-6 md:px-20 py-12 gap-8 mt-32 flex flex-col">
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold mb-6 md:text-center">
        Book a <strong className="text-primary">Table</strong>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Bloc Google Maps */}
        <div className="w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            loading="lazy"
            style={{ border: 0 }}
            className="w-full h-full"
            title="Google Maps - Restaurant Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Bloc Formulaire */}
        <div className="w-full flex flex-col gap-4">
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white"
            />
            <textarea
              name="message"
              placeholder="Votre message / demande spéciale"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-lg bg-black border border-gray-700 text-white"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 p-8 font-bold text-xl"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Envoi...
                </span>
              ) : (
                "Envoyer"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
