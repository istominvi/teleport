'use client';

import React from 'react';
import { CreditCard, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: CreditCard,
    title: 'Оплата картой РФ',
    description: 'Принимаем карты любых российских банков и СБП. Не нужно искать крипту.',
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: ShieldCheck,
    title: 'Невидимый протокол',
    description: 'Используем VLESS-Reality. Ваш трафик выглядит как обычный просмотр сайтов, поэтому его сложно заблокировать.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Скорость до 1 Гбит/с',
    description: 'Смотрите стримы и видео в 4K без буферизации.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Smartphone,
    title: 'Простая настройка',
    description: 'Клиент v2RayTun. Одна ссылка-ключ для подключения. Работает на iOS и Android.',
    color: 'from-sky-400 to-blue-500',
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
