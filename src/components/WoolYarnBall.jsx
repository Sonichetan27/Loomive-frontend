import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Generated once when the module loads (not during render), so each
// strand keeps a stable random orientation for the lifetime of the app.
const YARN_COLORS = ["#db2777", "#ec5eaa", "#c9a472", "#b98a55", "#f4c9de"];
const STRANDS = Array.from({ length: 46 }, (_, i) => ({
  rotX: Math.random() * Math.PI,
  rotY: Math.random() * Math.PI,
  rotZ: Math.random() * Math.PI,
  radius: 1.22 + Math.random() * 0.1,
  tube: 0.026 + Math.random() * 0.016,
  color: YARN_COLORS[i % YARN_COLORS.length],
}));

// A ball of "yarn" built from many overlapping torus rings pointed in
// random directions — the same trick used for wireframe scribble-ball
// effects, just with a soft, matte wool material instead of wireframe.
function YarnStrands({ autoRotate }) {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current && autoRotate) {
      group.current.rotation.y += delta * 0.15;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      {STRANDS.map((s, i) => (
        <mesh key={i} rotation={[s.rotX, s.rotY, s.rotZ]}>
          <torusGeometry args={[s.radius, s.tube, 8, 64]} />
          <meshStandardMaterial color={s.color} roughness={0.85} metalness={0.04} />
        </mesh>
      ))}
    </group>
  );
}

// Two crossed knitting needles poking through the ball.
function Needles() {
  const needleMaterial = { color: "#efe3d0", metalness: 0.55, roughness: 0.3 };
  return (
    <group>
      <group rotation={[0, 0, Math.PI / 3.2]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.022, 0.022, 3.4, 14]} />
          <meshStandardMaterial {...needleMaterial} />
        </mesh>
        <mesh position={[0, 1.72, 0]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial {...needleMaterial} />
        </mesh>
      </group>

      <group rotation={[0, 0, -Math.PI / 3.6]}>
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.022, 0.022, 3.2, 14]} />
          <meshStandardMaterial {...needleMaterial} />
        </mesh>
        <mesh position={[0, 1.62, 0.15]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial {...needleMaterial} />
        </mesh>
      </group>
    </group>
  );
}

// Gently tilts the whole scene toward the pointer, without ever handing
// control away from the ambient auto-rotation.
function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.3;
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.04;
  });
  return <group ref={ref}>{children}</group>;
}

const WoolYarnBall = () => {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} color="#fff3e8" />
      <pointLight position={[-3, -2, -2]} intensity={0.7} color="#db2777" />
      <Rig>
        <YarnStrands autoRotate={!reduceMotion} />
        <Needles />
      </Rig>
    </Canvas>
  );
};

export default WoolYarnBall;
