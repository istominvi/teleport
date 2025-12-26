'use client';

import React from 'react';
import { Rocket, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import UserLocation from './UserLocation';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center sm:px-6 lg:px-8">

      {/* Floating Elements Animation Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex max-w-4xl flex-col items-center"
      >
        {/* User Location Badge */}
        <div className="mb-8">
          <UserLocation />
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
          Ваш личный защищенный{' '}
          <span className="bg-gradient-to-r from-[#00e0f7] to-[#0366f6] bg-clip-text text-transparent">
            канал связи.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed">
          Максимальная цифровая гигиена. Протоколы VLESS + Reality шифруют ваш трафик, делая его невидимым для анализаторов. Скорость до 300 Мбит/с, полная анонимность и отсутствие логов.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#012bf8] to-[#0366f6] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Rocket className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            Подключить защиту
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <PlayCircle className="h-5 w-5 text-slate-300 transition-colors group-hover:text-white" />
            Как это работает?
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
