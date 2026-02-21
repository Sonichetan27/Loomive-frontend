import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-24 pb-8">

{/* Wave */}
<div className="absolute -top-20 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 320"
    className="w-full h-24 drop-shadow-[0_-6px_15px_rgba(0,0,0,0.15)]"
    preserveAspectRatio="none"
  >
    <path
      className="fill-gray-100 dark:fill-gray-900"
      d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192V320H0Z"
    />
  </svg>
</div>

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
              <Phone size={16} /> +91 8770932665
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
