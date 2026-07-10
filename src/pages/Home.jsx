import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WoolYarnBall = lazy(() => import("../components/WoolYarnBall"));

const BallPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-40 h-40 rounded-full bg-pink-600/20 animate-pulse" />
  </div>
);

const Home = () => {
  return (
    <div className="relative bg-gray-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[95vh] flex items-center text-white pt-28 pb-16 lg:pt-0 lg:pb-0">

        {/* background image */}
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/free-photo/close-up-wool-texture-details_23-2149620436.jpg?semt=ais_hybrid&w=740&q=80"
            alt="background"
            className="w-full h-full object-cover opacity-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
        </div>

        {/* ambient glow orbs */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-600/20 blur-[100px] animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-wool-400/10 blur-[110px] animate-float-slow"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serifcl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
            >
              Handmade Creations
              <span className="font-display thread-underline block text-pink-500 mt-2">
                Crafted with Love
                <svg viewBox="0 0 300 24" preserveAspectRatio="none">
                  <path d="M2 16C40 4 80 22 120 12C160 2 200 20 240 10C260 5 280 8 298 6" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-gray-400 text-lg max-w-md mx-auto lg:mx-0"
            >
              Discover premium handmade sweaters and custom products,
              designed uniquely for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Link
                to="/products"
                className="group relative px-6 py-3 rounded-xl overflow-hidden
                           backdrop-blur-md
                           bg-white/10
                           border border-white/20
                           text-white
                           transition-all duration-300
                           shadow-lg hover:shadow-pink-600/20
                           hover:border-pink-500/40"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-pink-600/30 to-transparent transition-transform duration-500 ease-out" />
                <span className="relative">Explore Products</span>
              </Link>

              <a
                href="https://wa.me/918305804566"
                target="_blank"
                rel="noreferrer"
                className="group relative px-6 py-3 rounded-xl overflow-hidden
                           backdrop-blur-md
                           bg-white/10
                           border border-white/20
                           text-white
                           transition-all duration-300
                           shadow-lg hover:shadow-wool-400/20
                           hover:border-wool-300/40"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-wool-400/30 to-transparent transition-transform duration-500 ease-out" />
                <span className="relative">Customize Now</span>
              </a>
            </motion.div>
          </div>

          {/* 3D wool ball */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[280px] sm:h-[360px] lg:h-[480px] cursor-grab active:cursor-grabbing"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 m-auto w-64 h-64 rounded-full bg-pink-600/10 blur-3xl"
            />
            <Suspense fallback={<BallPlaceholder />}>
              <WoolYarnBall />
            </Suspense>
          </motion.div>

        </div>

      </section>

    </div>

  );
};

export default Home;
