import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-pink-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-gray-800 dark:text-gray-200 shrink-0"
        >
          <img
            src="/logo.jpeg"
            alt="Loomiva Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />

          <div className="flex flex-col leading-tight">
            <span className=" text-xl font-bold">
              Loomiva
            </span>
            <span className="hidden sm:block text-sm font-normal text-gray-500 dark:text-gray-400">
              Where threads tell stories
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-10 lg:gap-14 font-medium">
          <Link to="/products" className="stitch-link hover:text-pink-600 transition-colors">Products</Link>
          <Link to="/customize" className="stitch-link hover:text-pink-600 transition-colors">Customize</Link>
          <Link to="/about" className="stitch-link hover:text-pink-600 transition-colors">About</Link>
          <Link to="/contact" className="stitch-link hover:text-pink-600 transition-colors">Contact</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Icon */}
          <div className="md:hidden">
            {open ? (
              <X onClick={() => setOpen(false)} className="cursor-pointer" />
            ) : (
              <Menu onClick={() => setOpen(true)} className="cursor-pointer" />
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex flex-col gap-4 text-lg">
          <Link to="/products" onClick={() => setOpen(false)} className="stitch-link hover:text-pink-600 transition-colors">Products</Link>
          <Link to="/customize" onClick={() => setOpen(false)} className="stitch-link hover:text-pink-600 transition-colors">Customize</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="stitch-link hover:text-pink-600 transition-colors">About</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="stitch-link hover:text-pink-600 transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
