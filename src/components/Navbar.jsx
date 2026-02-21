import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-10">

          <Link
            to="/"
            className="flex items-center gap-3 text-gray-800 dark:text-gray-200"
          >
            <img
              src="/logo.jpeg"
              alt="Loomiva Logo"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold">
                Loomiva
              </span>
              <span className="text-sm font-normal">
                Where threads tell stories
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-14 font-medium ml-52">
            <Link to="/products">Products</Link>
            <Link to="/customize">Customize</Link>
            <Link to="/about">About</Link>
          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

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
        <div className="md:hidden bg-whitegray shadow-md px-6 py-4 space-y-4 flex flex-row">
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
