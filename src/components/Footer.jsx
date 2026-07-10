import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import OceanWave from "./OceanWave";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-24 pb-8">

      {/* Wave */}
      <OceanWave />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Loomiva
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Where threads tell stories.<br />
            Minimal, premium fashion crafted for modern elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Shop</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            Contact
          </h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@loomiva.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 8305804566
            </p>
            <p className="flex items-center gap-2">
              <Instagram size={16} /> @loomiva
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Loomiva. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
