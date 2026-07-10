// A two-layer wave that drifts sideways in an endless loop, like the sea.
// Each <svg> holds the same tileable path twice, side by side; animating
// the container by exactly one tile-width (-50%) makes the loop seamless.
const OceanWave = () => (
  <div
    aria-hidden="true"
    className="absolute -top-[3.2rem] md:-top-[4.5rem] left-0 w-full h-[3.2rem] md:h-[4.5rem] overflow-hidden pointer-events-none"
  >
    {/* back layer: soft pink/wool tint, slower drift, peeks above the front wave */}
    <svg
      className="wave-back absolute bottom-0 left-0 w-[200%] h-full text-pink-500/15 dark:text-pink-500/10"
      viewBox="0 0 2880 120"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,48 C120,10 240,10 360,48 C480,86 600,86 720,48 C840,10 960,10 1080,48 C1200,86 1320,86 1440,48 C1560,10 1680,10 1800,48 C1920,86 2040,86 2160,48 C2280,10 2400,10 2520,48 C2640,86 2760,86 2880,48 L2880,120 L0,120 Z"
      />
    </svg>

    {/* front layer: matches the footer background, faster drift */}
    <svg
      className="wave-front absolute bottom-0 left-0 w-[200%] h-full text-gray-100 dark:text-gray-900"
      viewBox="0 0 2880 120"
      preserveAspectRatio="none"
    >
      <path
        fill="currentColor"
        d="M0,64 C120,102 240,102 360,64 C480,26 600,26 720,64 C840,102 960,102 1080,64 C1200,26 1320,26 1440,64 C1560,102 1680,102 1800,64 C1920,26 2040,26 2160,64 C2280,102 2400,102 2520,64 C2640,26 2760,26 2880,64 L2880,120 L0,120 Z"
      />
    </svg>
  </div>
);

export default OceanWave;
