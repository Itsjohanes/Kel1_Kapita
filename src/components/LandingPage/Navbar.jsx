/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ home, about, programs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="border-b-2 fixed w-full bg-white">
      <nav className="text-cyan-800 p-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="./lung-logo.png"
            alt="Deskripsi Gambar"
            className="w-20 h-20 mr-4"
          />
        </div>
        <div className="flex items-center">
          <div
            className={`${
              isMenuOpen ? "flex flex-col" : "hidden"
            } md:flex items-center space-x-4 uppercase my-4 md:my-0`}
          >
            <Link to="/" onClick={home} className="my-2">
              Home
            </Link>
            <Link onClick={programs} className="my-2">
              Programs
            </Link>
            <Link onClick={about} className="my-2">
              About Us
            </Link>
            <Link
              to="/dashboard/disclaimer"
              className="border-2 px-4 py-2 my-2 hover:bg-button"
            >
              Mulai Belajar
            </Link>
          </div>
          <div className="md:hidden">
            {isMenuOpen ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
