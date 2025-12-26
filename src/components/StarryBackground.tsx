"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  velocity: number; // Base speed, multiplied by depth
  depth: number;    // 0.1 (far) to 1.0 (near)
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
      // Keep quantity ~70
      const starCount = 70;
      stars = [];
      const colors = ["#ffffff", "#ffffff", "#ffffff", "#e0f2fe", "#f3e8ff"];

      for (let i = 0; i < starCount; i++) {
        // Depth: 0.1 (far) to 1.0 (near)
        // Using a power curve to have more distant stars than close ones
        const depth = Math.pow(Math.random(), 2) * 0.9 + 0.1;

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Radius linked to depth: 0.5px (far) to 1.5px (near)
          radius: depth * 1.0 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1.0 base opacity
          // Velocity: Base downward speed
          // The visual speed will be velocity * depth
          velocity: 2.0,
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

      // Mouse parallax influence (horizontal only usually feels better for vertical flight, but we keep both subtle)
      const parallaxX = (mouseRef.current.x - canvas.width / 2) * 0.01;
      const parallaxY = (mouseRef.current.y - canvas.height / 2) * 0.01;

      stars.forEach((star) => {
        // 2. Update Twinkle
        star.twinklePhase += star.twinkleSpeed;
        // Subtle twinkling
        const currentOpacity = star.opacity + 0.2 * Math.sin(star.twinklePhase);
        const clampedOpacity = Math.max(0.1, Math.min(1, currentOpacity));

        // 3. Update Position (Warp Speed Effect)
        // Move downwards: y increases
        // Speed depends on depth (closer stars move faster)
        const speed = star.velocity * star.depth;
        star.y += speed;

        // 4. Loop Logic
        if (star.y > canvas.height) {
          star.y = -10; // Reset to just above top
          star.x = Math.random() * canvas.width; // New random X
        }

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
