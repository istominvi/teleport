'use client';

import React from 'react';
import { Bot, CreditCard, Power } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Bot,
    title: 'Запустите бота',
    description: 'Нажмите Start в Telegram боте TelePort.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: CreditCard,
    title: 'Оплатите подписку',
    description: 'Удобная оплата через СБП или картой прямо в чате.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: Power,
    title: 'Вставьте ключ',
    description: 'Скачайте наше приложение-клиент и вставьте полученный ключ доступа.',
    color: 'from-orange-400 to-red-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Steps() {
  return (
    <section className="relative py-24 bg-slate-900/30">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            3 шага к <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">свободе</span>
          </motion.h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector Line (visible on desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden sm:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
              )}

              <div className="relative mb-6">
                 {/* Glow behind icon */}
                 <div className={`absolute inset-0 blur-xl opacity-20 bg-gradient-to-br ${step.color} group-hover:opacity-40 transition-opacity duration-500`} />

                 <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
                    <step.icon className="h-10 w-10 text-white" />
                 </div>

                 {/* Step Number Badge */}
                 <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {index + 1}
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
