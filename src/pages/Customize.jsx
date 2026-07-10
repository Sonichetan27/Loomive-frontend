import AmbientGlow from "../components/AmbientGlow";

export default function Customize() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">

      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center max-w-4xl mx-auto mt-6 overflow-hidden">
        <AmbientGlow className="-top-10 -right-16 w-72 h-72" />
        <AmbientGlow className="bottom-0 -left-16 w-72 h-72 bg-wool-400/10" delay="1s" />
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Designed By You. <br />
          <span className="thread-underline block text-pink-600 mt-2">
            Handcrafted By Loomiva.
            <svg viewBox="0 0 300 24" preserveAspectRatio="none"><path d="M2 16C40 4 80 22 120 12C160 2 200 20 240 10C260 5 280 8 298 6" /></svg>
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Every wool piece we create carries warmth, intention, and your personal touch.
          Share your idea with us, and we’ll bring it to life.
        </p>
      </section>

      {/* WHAT YOU CAN CUSTOMIZE */}
      <section className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <AmbientGlow className="top-10 left-1/4 w-80 h-80" delay="0.5s" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-12">
            What You Can Customize
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 rounded-2xl bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif font-bold text-xl mb-3">Color Palette</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from soft pastels, warm neutrals, or vibrant festive shades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif font-bold text-xl mb-3">Design & Pattern</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal textures, traditional motifs, or completely custom patterns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-pink-600/10">
              <h3 className="font-serif font-bold text-xl mb-3">Personal Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Add names, initials, special dates, or meaningful messages.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION — alternating left/right steps along a thread */}
      <section className="relative py-20 px-6 overflow-hidden">
        <AmbientGlow className="top-1/3 -right-20 w-96 h-96" delay="0.8s" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-center mb-20">
            Our Customization Process
          </h2>

          <div className="relative">
            {/* the connecting thread — center on desktop, left on mobile */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500/50 via-wool-400/40 to-transparent md:-translate-x-1/2" />

            <div className="space-y-14 md:space-y-20">

              {/* Step 1 — right side on desktop */}
              <div className="relative flex items-start md:items-center gap-6 md:gap-12 pl-14 md:pl-0">
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-9 h-9 rounded-full bg-pink-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-pink-600/30 z-10">
                  1
                </span>
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Share Your Idea</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start a conversation with us on WhatsApp. Share references, colors,
                    sizing details, and any inspiration you have.
                  </p>
                </div>
              </div>

              {/* Step 2 — left side on desktop */}
              <div className="relative flex items-start md:items-center gap-6 md:gap-12 pl-14 md:pl-0 md:flex-row-reverse">
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-9 h-9 rounded-full bg-pink-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-pink-600/30 z-10">
                  2
                </span>
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Design Discussion</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We refine your idea together and finalize design details,
                    wool type, and finishing touches.
                  </p>
                </div>
              </div>

              {/* Step 3 — right side on desktop */}
              <div className="relative flex items-start md:items-center gap-6 md:gap-12 pl-14 md:pl-0">
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-9 h-9 rounded-full bg-pink-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-pink-600/30 z-10">
                  3
                </span>
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Handcrafting Begins</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our artisans carefully craft your piece with precision and care.
                  </p>
                </div>
              </div>

              {/* Step 4 — left side on desktop */}
              <div className="relative flex items-start md:items-center gap-6 md:gap-12 pl-14 md:pl-0 md:flex-row-reverse">
                <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-9 h-9 rounded-full bg-pink-600 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-pink-600/30 z-10">
                  4
                </span>
                <div className="hidden md:block md:w-1/2" />
                <div className="md:w-1/2 md:text-right">
                  <h3 className="text-xl font-semibold mb-2">Handovered With Warmth</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your custom creation is securely packed and handovered to you.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE & PRICING */}
      <section className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <AmbientGlow className="bottom-0 right-1/3 w-72 h-72 bg-wool-400/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-6">
            Timeline & Pricing
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Custom pieces typically take 5–10 working days depending on complexity.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            Pricing varies based on design intricacy, size, and personalization.
            Final quote is shared after consultation.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <AmbientGlow className="top-0 left-1/4 w-80 h-80" delay="0.4s" />
        <h2 className="relative font-display text-3xl font-bold mb-6">
          Ready to Create Something Unique?
        </h2>

        <a
          href="https://wa.me/918305804566"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block px-8 py-4 rounded-2xl 
                     bg-pink-600 hover:bg-pink-700 
                     text-white font-semibold 
                     shadow-lg hover:shadow-pink-600/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          Start Customizing on WhatsApp
        </a>
      </section>

    </div>
  );
}
