"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  opacity: number;
  velocity: number;
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
      const starCount = 70;
      stars = [];
      const colors = ["#ffffff", "#ffffff", "#ffffff", "#e0f2fe", "#f3e8ff"];

      for (let i = 0; i < starCount; i++) {
        // Depth: 0.1 (far) to 1.0 (near)
        // Using a power curve to have more distant stars than close ones
        const depth = Math.pow(Math.random(), 2) * 0.9 + 0.1;

        // Calculate radius based on depth roughly, but with some variation if needed.
        // Formula matching previous logic but refined:
        const radius = depth * 1.0 + 0.5; // Range: ~0.6 to 1.5

        // Determine velocity based on layers logic
        let velocity = 0;

        if (radius < 0.8) {
          // Layer 0: Static
          velocity = 0;
        } else if (radius < 1.2) {
          // Layer 1: Mid-range, VERY slow
          velocity = 0.2;
        } else {
          // Layer 2: Foreground, slightly faster but majestic
          // Previous base was 2.0. We want "slightly faster" than mid-range but "slower than current".
          velocity = 0.5;
        }

        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.5,
          velocity: velocity,
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

        // 3. Update Position
        // Move downwards: y increases
        // Speed depends on velocity logic defined in initStars.
        // We can still multiply by depth if we want strictly depth-based speed,
        // but the prompt gave specific "velocity" targets for layers.
        // To be safe and "majestic", we use the explicit velocity from initStars
        // and maybe a small global multiplier if needed.
        // User asked to "Reduce the global speed multiplier by another 50%".
        // Let's assume the velocities set in initStars (0.2, 0.5) already account for "majestic".
        // But previously it was `velocity * depth` where velocity was 2.0.
        // If depth was 1.0, speed was 2.0. Now max speed is 0.5. That is 25% of previous max.
        // If depth was 0.5, speed was 1.0. Now mid speed is 0.2. That is 20%.
        // This satisfies "Reduce global speed... majestic and slow".

        star.y += star.velocity;

        // 4. Loop Logic
        if (star.y > canvas.height) {
            // Only recycle moving stars
            if (star.velocity > 0) {
                star.y = -10;
                star.x = Math.random() * canvas.width;
            }
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
