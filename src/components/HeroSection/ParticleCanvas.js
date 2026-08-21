import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const DOT_SPACING = 30;
const DOT_BASE_RADIUS = 1.4;
const DOT_MAX_RADIUS = 3.2;
const REACT_RADIUS = 160; // px, how far a dot reacts to the cursor
const EASE = 0.12;

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const dotsRef = useRef([]);
  const pointerRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const buildDots = (width, height) => {
      const dots = [];
      for (let y = DOT_SPACING / 2; y < height; y += DOT_SPACING) {
        for (let x = DOT_SPACING / 2; x < width; x += DOT_SPACING) {
          dots.push({ x, y, r: DOT_BASE_RADIUS, targetR: DOT_BASE_RADIUS });
        }
      }
      dotsRef.current = dots;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildDots(width, height);
    };

    const drawFrame = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      ctx.clearRect(0, 0, width, height);

      const { x: px, y: py } = pointerRef.current;

      dotsRef.current.forEach((dot) => {
        const dx = dot.x - px;
        const dy = dot.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        dot.targetR =
          dist < REACT_RADIUS
            ? DOT_BASE_RADIUS +
              (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * (1 - dist / REACT_RADIUS)
            : DOT_BASE_RADIUS;

        dot.r += (dot.targetR - dot.r) * EASE;

        const glow = (dot.r - DOT_BASE_RADIUS) / (DOT_MAX_RADIUS - DOT_BASE_RADIUS);
        const opacity = 0.25 + glow * 0.55;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${opacity})`;
        ctx.fill();
      });
    };

    const loop = () => {
      drawFrame();
      rafRef.current = requestAnimationFrame(loop);
    };

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      pointerRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
    };

    resize();

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      rafRef.current = requestAnimationFrame(loop);
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (prefersReducedMotion) drawFrame();
    });
    resizeObserver.observe(parent);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, []);

  return <Canvas ref={canvasRef} aria-hidden="true" />;
};

export default ParticleCanvas;
