"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  depth: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = 100;
      stars = [];
      const colors = ["#ffffff", "#ffffff", "#ffffff", "#e0f2fe", "#f3e8ff"];

      for (let i = 0; i < starCount; i++) {
        // Depth: 0.1 (far) to 1.0 (near)
        // Using a power curve to have more distant stars than close ones
        const depth = Math.pow(Math.random(), 2) * 0.9 + 0.1;

        // Calculate radius based on depth roughly, but with some variation if needed.
        // Formula matching previous logic but refined:
        const radius = depth * 1.0 + 0.5; // Range: ~0.6 to 1.5

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.5,
          depth: depth,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      // 1. Draw Clean Deep Background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#02040a"); // Top: Pure Black/Dark Blue
      gradient.addColorStop(1, "#0f172a"); // Bottom: Deep Navy

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mouse parallax influence
      const parallaxX = (mouseRef.current.x - canvas.width / 2) * 0.01;
      const parallaxY = (mouseRef.current.y - canvas.height / 2) * 0.01;

      stars.forEach((star) => {
        // 2. Update Twinkle
        star.twinklePhase += star.twinkleSpeed;
        const currentOpacity = star.opacity + 0.2 * Math.sin(star.twinklePhase);
        const clampedOpacity = Math.max(0.1, Math.min(1, currentOpacity));

        // 3. Update Position - Static sky, no movement

        ctx.beginPath();
        // Draw star
        // Apply Parallax: Closer stars move more with mouse
        const drawX = star.x + parallaxX * star.depth;
        const drawY = star.y + parallaxY * star.depth;

        ctx.arc(
          drawX,
          drawY,
          star.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedOpacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default StarryBackground;
