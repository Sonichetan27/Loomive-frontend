import { motion } from "framer-motion";
import AmbientGlow from "../components/AmbientGlow";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6 text-center overflow-hidden mt-6">
        <AmbientGlow className="-top-10 -left-16 w-72 h-72" />
        <AmbientGlow className="top-10 -right-10 w-80 h-80 bg-wool-400/10" delay="1.2s" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold"
        >
          We Don’t Just Create Products.
          <span className="thread-underline block text-pink-600 mt-2">
            We Weave Stories.
            <svg viewBox="0 0 300 24" preserveAspectRatio="none">
              <path d="M2 16C40 4 80 22 120 12C160 2 200 20 240 10C260 5 280 8 298 6" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400"
        >
          Loomiva was born from a simple vision — to build a brand
          that blends craftsmanship, creativity, and emotion into every thread.
        </motion.p>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center overflow-hidden">
        <AmbientGlow className="top-1/3 left-1/2 w-96 h-96 bg-pink-600/5" />

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/public/founder.jpg"   // 👈 apni image public folder me daal dena
              alt="Founder"
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl font-bold mb-6">
            Meet The Founder
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Loomiva started with one idea — to build something of our own.
            Not just another brand, but a space where creativity and craftsmanship
            come together.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            Founded by Chetan, Loomiva represents a passion for handmade
            excellence. From woolen winter wear to artistic wall pieces and
            fashion accessories, every product is carefully handcrafted by our team.
          </p>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We believe in detail, personalization, and the emotional value
            behind handmade creations.
          </p>
        </motion.div>

      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <AmbientGlow className="bottom-0 -left-20 w-80 h-80" delay="0.6s" />
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-display text-3xl font-bold mb-12"
          >
            What Makes Loomiva Different
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Handcrafted Precision",
                desc: "Every product is carefully handmade by our skilled team, ensuring unmatched quality."
              },
              {
                title: "Personalized Creations",
                desc: "We offer customization so each piece reflects your unique story."
              },
              {
                title: "Premium Minimal Aesthetic",
                desc: "Clean, elegant designs crafted for modern lifestyles."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-8 rounded-2xl 
                           backdrop-blur-md 
                           bg-white/60 dark:bg-gray-800/60 
                           border border-gray-200 dark:border-gray-700 
                           shadow-lg transition-all duration-300
                           hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10"
              >
                <h3 className="font-serif text-xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <AmbientGlow className="top-0 right-1/4 w-72 h-72 bg-wool-400/10" />
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-display text-3xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>

        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          To create meaningful handmade products that combine warmth,
          creativity, and individuality — while building a brand that stands
          for quality, authenticity, and emotional connection.
        </p>
      </section>

    </div>
  );
};

export default About;