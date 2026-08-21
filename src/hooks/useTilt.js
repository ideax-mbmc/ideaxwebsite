import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

// Cursor-tracked 3D tilt. Returns both rotateX and rotateY motion values;
// callers decide which axes to actually apply via `style` (e.g. the Expect
// flip cards only use rotateX, leaving rotateY exclusively to their existing
// CSS flip so the two don't collide on the same transform property).
export default function useTilt(maxDeg = 8) {
  const ref = useRef(null);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 250, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    // Mouse above center -> tilt top back (negative rotateX); mouse below -> tilt forward.
    rawRotateX.set((0.5 - py) * maxDeg * 2);
    // Mouse left of center -> tilt left; mouse right -> tilt right.
    rawRotateY.set((px - 0.5) * maxDeg * 2);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave };
}
