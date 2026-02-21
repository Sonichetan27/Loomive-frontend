const phoneNumber = "918770932665";

const handleWhatsApp = () => {
  const message = `
Hi Loomiva,
I want to customize a product.
Please guide me further.
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

import { useState } from "react";

export default function Customize() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">

      {/* HERO SECTION */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto mt-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Designed By You. <br />
          <span className="block text-pink-600 mt-2">
            Handcrafted By Loomiva.
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Every wool piece we create carries warmth, intention, and your personal touch.
          Share your idea with us, and we’ll bring it to life.
        </p>
      </section>

      {/* WHAT YOU CAN CUSTOMIZE */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            What You Can Customize
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Color Palette</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Choose from soft pastels, warm neutrals, or vibrant festive shades.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Design & Pattern</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal textures, traditional motifs, or completely custom patterns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Personal Touch</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Add names, initials, special dates, or meaningful messages.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Our Customization Process
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-2">1. Share Your Idea</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start a conversation with us on WhatsApp. Share references, colors,
                sizing details, and any inspiration you have.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">2. Design Discussion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We refine your idea together and finalize design details,
                wool type, and finishing touches.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3. Handcrafting Begins</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our artisans carefully craft your piece with precision and care.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4. Delivery With Warmth</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your custom creation is securely packed and delivered to your doorstep.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TIMELINE & PRICING */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
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
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Ready to Create Something Unique?
        </h2>

        <a
          href="https://wa.me/918770932665"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-2xl 
                     bg-pink-600 hover:bg-pink-700 
                     text-white font-semibold 
                     shadow-lg transition"
        >
          Start Customizing on WhatsApp
        </a>
      </section>

    </div>
  );
}