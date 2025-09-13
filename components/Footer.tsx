import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full py-4 text-center text-sm text-white absolute bottom-0">
      © {year} Created by
      <a
        href="https://www.linkedin.com/in/ange-marie-charbel-mehinto/"
        className="text-orange underline"
      >
        MEHINTO Charbel
      </a>
    </footer>
  );
};

export default Footer;
