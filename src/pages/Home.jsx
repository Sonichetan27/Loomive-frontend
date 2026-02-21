import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (

    <div className="relative bg-gray-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[95vh] flex items-center justify-center text-white">

        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/close-up-wool-texture-details_23-2149620436.jpg?semt=ais_hybrid&w=740&q=80"
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Handmade Creations
            <span className="block text-pink-600">
              Crafted with Love
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-400 text-lg"
          >
            Discover premium handmade sweaters and custom products,
            designed uniquely for you.
          </motion.p>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
  className="mt-8 flex justify-center gap-4"
>
  <Link
    to="/products"
    className="px-6 py-3 rounded-xl 
               backdrop-blur-md 
               bg-white/10 
               border border-white/20 
               text-white 
               hover:bg-white/20 
               transition-all duration-300 
               shadow-lg"
  >
    Explore Products
  </Link>

  <a
    href="https://wa.me/918770932665"
    target="_blank"
    rel="noreferrer"
    className="px-6 py-3 rounded-xl 
               backdrop-blur-md 
               bg-white/10 
               border border-white/20 
               text-white 
               hover:bg-white/20 
               transition-all duration-300 
               shadow-lg"
  >
    Customize Now
  </a>
</motion.div>

        </div>

      </section>

    </div>

  );
};

export default Home;
