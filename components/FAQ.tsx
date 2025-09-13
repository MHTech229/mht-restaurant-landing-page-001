"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you offer vegetarian dishes?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Can I make a reservation online?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Are there any parking facilities?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Do you offer vegetarian dishes?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Can I make a reservation online?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Do you provide delivery services?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
  {
    question: "Are there any parking facilities?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quis hic! Velit laudantium numquam, quae nihil a illo voluptatibus, officia possimus dignissimos vitae ex magni atque eius distinctio explicabo. Blanditiis.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-6 md:px-20 py-4 mt-32">
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white  font-extrabold mb-6 md:text-center">
        <strong className="text-primary">F</strong>requently{" "}
        <strong className="text-primary">F</strong>asked{" "}
        <strong className="text-primary">Q</strong>uestions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="glass rounded-lg p-6 cursor-pointer transition-all duration-300 shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-poppins text-lg font-semibold text-white">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <Minus className="text-orange w-5 h-5" />
              ) : (
                <Plus className="text-orange w-5 h-5" />
              )}
            </div>
            {activeIndex === index && (
              <p className="mt-4 font-poppins text-gray-400 text-md">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
