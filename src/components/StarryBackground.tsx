"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  velocity: { x: number; y: number };
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
      const starCount = 150;
      stars = [];
      const colors = ["#ffffff", "#22d3ee", "#a855f7"]; // White, Cyan, Purple

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random(),
          velocity: {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2,
          },
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      // Create deep vertical gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#020617"); // slate-950
      gradient.addColorStop(1, "#1e1b4b"); // darker indigo/purple tone for horizon

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Mouse parallax influence
      const parallaxX = (mouseRef.current.x - canvas.width / 2) * 0.02;
      const parallaxY = (mouseRef.current.y - canvas.height / 2) * 0.02;

      stars.forEach((star) => {
        // Update twinkling
        star.twinklePhase += star.twinkleSpeed;
        const opacity =
          0.5 + 0.5 * Math.sin(star.twinklePhase) * star.opacity;

        // Update position
        star.x += star.velocity.x;
        star.y += star.velocity.y;

        // Boundary check
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        // Apply parallax offset
        ctx.arc(
          star.x + parallaxX * (star.radius * 0.5),
          star.y + parallaxY * (star.radius * 0.5),
          star.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;
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
