'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, User, Globe } from 'lucide-react';

export default function LocalTrust() {
  return (
    <section id="local-trust" className="relative overflow-hidden py-24 sm:py-32 bg-slate-900/50">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 mb-6">
              <Server className="mr-2 h-4 w-4" />
              Стабильность и анонимность
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Глобальная архитектура,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                созданная для приватности.
              </span>
            </h2>
            <p className="text-lg leading-8 text-slate-300 mb-8">
              Серверы оптимизированы для минимальной задержки в России. Мы не
              храним логи. Трафик маскируется под обычный веб-просмотр с
              использованием протокола Reality.
            </p>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl">
               {/* Network Flow */}
               <div className="absolute inset-0 flex items-center justify-between p-8 md:p-12">

                  {/* User Node */}
                  <div className="flex flex-col items-center z-10">
                     <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/80 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        <User className="h-6 w-6 text-white" />
                     </div>
                     <div className="mt-2 text-xs font-mono text-purple-400">Пользователь</div>
                  </div>

                  {/* Teleport Node (Center) */}
                  <div className="flex flex-col items-center z-10">
                     <div className="relative flex h-16 w-16 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-20"></span>
                        <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                           <Server className="h-5 w-5 text-white" />
                        </div>
                     </div>
                     <div className="mt-2 text-xs font-mono text-cyan-400">TelePort</div>
                  </div>

                  {/* Internet Node */}
                  <div className="flex flex-col items-center z-10">
                     <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/80 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                        <Globe className="h-6 w-6 text-white" />
                     </div>
                     <div className="mt-2 text-xs font-mono text-green-400">Интернет</div>
                  </div>

                  {/* Signal Animations */}
                  <motion.div
                    className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-purple-400"
                    style={{
                      left: 'calc(15% + 12px)',
                      right: 'auto',
                      y: '-50%',
                    }}
                    animate={{
                      left: 'calc(50% - 12px)',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-cyan-400"
                     style={{
                      left: 'calc(50% + 12px)',
                      right: 'auto',
                      y: '-50%',
                    }}
                    animate={{
                      left: 'calc(85% - 12px)',
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'linear',
                      delay: 0.2
                    }}
                  />

               </div>

               {/* Scanline effect */}
               <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
