import React, { useState } from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiGithub,
  FiChevronDown,
} from "react-icons/fi";

const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectOption = (link) => {
    window.open(link, "_blank");
    closeDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleIconClick = () => {
    if (!dropdownOpen) {
      toggleDropdown();
    }
  };

  return (
    <footer className="bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 text-lg">
            <a
              href="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/logo.png"
                alt="Indonesia Travel"
                className="w-32"
              />
            </a>
            <div className="flex ml-6">
              <a
                href="https://instagram.com/chikogina_?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-4"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/ginatobing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mr-4"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/Ginasonia98?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FiGithub />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-white mr-4">Visit Other Website</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Select Website"
                className="bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
                onClick={toggleDropdown}
              />
              <div className="absolute right-2 top-2" onClick={handleIconClick}>
                <FiChevronDown className="text-white" />
              </div>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-1 w-48 bg-white rounded-md py-2">
                  <li>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-400  hover:text-white w-full text-left"
                      onClick={() =>
                        handleSelectOption(
                          "https://www.indonesia.travel/event/id/home"
                        )
                      }
                    >
                      Event
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-400 hover:text-white w-full text-left"
                      onClick={() =>
                        handleSelectOption(
                          "https://www.indonesia.travel/desawisata/id/home"
                        )
                      }
                    >
                      Desa Wisata
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-400 hover:text-white w-full text-left"
                      onClick={() =>
                        handleSelectOption(
                          "https://www.indonesia.travel/creative/id/home"
                        )
                      }
                    >
                      Creative
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex flex-wrap items-center mb-4 md:mb-0">
            <div className="flex flex-col md:flex-row justify-start">
              <p className="text-white mr-4 mb-2 md:mb-0">
                <a href="#" className="text-white">
                  Terms & Conditions
                </a>
              </p>
              <p className="text-white mr-4 mb-2 md:mb-0">
                <a href="#" className="text-white">
                  Privacy & Policy
                </a>
              </p>
              <p className="text-white mb-2 md:mb-0">
                <a href="#" className="text-white">
                  Call Us
                </a>
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-center md:text-right">
          This site is a site owned by Gina Sonia. This site aims to provide
          information about Indonesian culinary delights.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
