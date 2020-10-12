import React from "react";
import './footer.scss';

const Footer = () => {
  return (
    <p className="footer border-top p-3 mb-0 text-center">
      Kdog App &copy; {new Date().getFullYear()}
    </p>
  );
};

export default Footer;