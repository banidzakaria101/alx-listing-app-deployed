import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-semibold">LuxStay</span>. All rights reserved.
          </p>

          {/* Center - Built by and social icons */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-gray-300">
            <span>
              Built by <span className="text-white font-medium">Zakaria Banid</span>
            </span>
            <div className="flex space-x-3">
              <a
                href="https://github.com/banidzakaria101"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/zakaria-banid-3052bb204/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://twitter.com/zakaria_banid"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Right - Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
