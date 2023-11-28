/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({ home, about, programs }) => {
  return (
    <div className="border-b-2 fixed w-full bg-white">
      <nav className="text-cyan-800 p-6">
        <div className="flex items-center justify-center text-xs md:justify-center md:text-xl lg:justify-end lg:text-xl">
          <div className="lg:space-x-8 md:space-x-4  space-x-2 uppercase ">
            <Link to="/" onClick={home}>
              Home
            </Link>
            <Link onClick={programs}>Programs</Link>
            <Link onClick={about}>About Us</Link>

            <Link to="/dashboard/overview" className="border-2 px-4 py-2">
              Mulai Belajar
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
