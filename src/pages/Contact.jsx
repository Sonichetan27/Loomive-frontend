import AmbientGlow from "../components/AmbientGlow";

export default function Contact() {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
  
        {/* HERO */}
        <section className="relative py-24 px-6 text-center max-w-4xl mt-8 mx-auto overflow-hidden">
          <AmbientGlow className="-top-6 -left-16 w-72 h-72" />
          <AmbientGlow className="bottom-0 -right-16 w-72 h-72 bg-wool-400/10" delay="1s" />
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Let’s Create Something Beautiful <span className="text-pink-600">Together</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Have a question, a custom idea, or just want to say hello?  
            We’d love to hear from you.
          </p>
        </section>
  
        {/* CONTACT OPTIONS */}
        <section className="relative py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <AmbientGlow className="top-10 left-1/3 w-96 h-96" delay="0.6s" />
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
  
            {/* WhatsApp */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800  bg-white/60 dark:bg-gray-800/60 
                           border border-gray-200 dark:border-gray-700 
                           shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Quick replies for customization & order queries.
              </p>
              <a
                href="https://wa.me/918305804566"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl 
                           bg-pink-600 hover:bg-pink-700 
                           text-white transition"
              >
                Chat Now
              </a>
            </div>
  
            {/* Email */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800  bg-white/60 dark:bg-gray-800/60 
                           border border-gray-200 dark:border-gray-700 
                           shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                For collaborations, bulk orders & partnerships.
              </p>
              <a
                href="mailto:hello@loomiva.com"
                className="inline-block px-6 py-3 rounded-xl 
                           bg-pink-600 hover:bg-pink-700 
                           text-white transition"
              >
                support@loomiva.com
              </a>
            </div>
  
            {/* Instagram */}
            <div className="p-8 rounded-2xl bg-white dark:bg-gray-800  bg-white/60 dark:bg-gray-800/60 
                           border border-gray-200 dark:border-gray-700 
                           shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif text-xl font-bold mb-3">Instagram</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                See our latest handmade creations on instagram.
              </p>
              <a
                href="https://instagram.com/loomiva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl 
                           bg-pink-600 hover:bg-pink-700  
                          text-white transition"
              >
                @loomiva
              </a>
            </div>
  
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-6 text-center px-6 pb-20">
            We usually respond within 24 hours.
          </p>
        </section>
  
        {/* CONTACT FORM */}
        {/* <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Send Us a Message
            </h2>
  
            <form className="space-y-6">
  
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border 
                           border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-900"
              />
  
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl border 
                           border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-900"
              />
  
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border 
                           border-gray-300 dark:border-gray-700
                           bg-white dark:bg-gray-900"
              />
  
              <button
                type="submit"
                className="w-full py-4 rounded-2xl 
                           bg-pink-600 hover:bg-pink-700 
                           text-white font-semibold 
                           shadow-lg transition"
              >
                Send Message
              </button>
  
            </form>
          </div>
        </section> */}
  
        {/* FOOTER NOTE */}
        {/* <section className="pb-20 text-center px-6">
          
        </section> */}
  
      </div>
    );
  }