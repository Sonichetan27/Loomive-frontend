// A soft blurred glow orb, the same ambient light used in the hero.
// Drop into any `relative overflow-hidden` section to warm up empty space.
const AmbientGlow = ({ className = "", color = "bg-pink-600/10", delay = "0s" }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute rounded-full blur-[100px] animate-float-slow ${color} ${className}`}
    style={{ animationDelay: delay }}
  />
);

export default AmbientGlow;
