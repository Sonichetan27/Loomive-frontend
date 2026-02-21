import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          We Don’t Just Create Products.
          <span className="block text-pink-600 mt-2">
            We Weave Stories.
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
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/founder.jpg"   // 👈 apni image public folder me daal dena
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
          <h2 className="text-3xl font-bold mb-6">
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
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-12"
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
                           shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">
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
      <section className="py-24 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
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