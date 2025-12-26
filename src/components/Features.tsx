'use client';

import React from 'react';
import { Zap, ShieldCheck, Youtube, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Мгновенное подключение',
    description: 'Ключ доступа за 1 минуту через Telegram-бота.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: ShieldCheck,
    title: 'Протоколы 2025 года',
    description: 'VLESS-Vision + Reality. Технологии, невидимые для блокировок.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Youtube,
    title: 'YouTube в 4K',
    description: 'Никакой буферизации. Идеально для Smart TV.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Gamepad2,
    title: 'Низкий пинг',
    description: 'Стабильные серверы для геймеров.',
    color: 'from-purple-400 to-indigo-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            Почему выбирают TelePort?
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20 group"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20"
                   style={{
                     backgroundImage: `linear-gradient(to right, var(--color-cyan-500), var(--color-purple-600))`
                   }}
              />

              <div className="relative">
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
