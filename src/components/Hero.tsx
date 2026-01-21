'use client';

import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import UserLocation from './UserLocation';
import Link from 'next/link';

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
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Интернет без границ и тормозов. Ваш личный телепорт в глобальную сеть
        </h1>

        {/* Subheadline */}
        <p className="mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl leading-relaxed">
        Соединение на базе VLESS протоколов. Не сажает батарею, не режет скорость, работает там, где другие заблокированы. Оплата любой картой РФ и СБП
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link href="https://t.me/teleport_xbot" target='_blank'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00e0f7] to-[#0366f6] px-8 py-4 text-lg font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <Bot className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              Подключить через наш Telegram бот
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
