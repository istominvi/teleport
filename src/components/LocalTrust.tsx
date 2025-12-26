'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, MapPin } from 'lucide-react';

export default function LocalTrust() {
  return (
    <section id="local-trust" className="relative overflow-hidden py-24 sm:py-32 bg-slate-900/50">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 mb-6">
              <MapPin className="mr-2 h-4 w-4" />
              Локальная оптимизация
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Разработано в Чите, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                работает на вашу безопасность.
              </span>
            </h2>
            <p className="text-lg leading-8 text-slate-300 mb-8">
              Мы используем выделенные каналы связи, оптимизированные для стабильной передачи зашифрованного трафика. Никаких лишних посредников между вами и безопасным интернетом.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white tracking-tight">99.9%</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Uptime</span>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white tracking-tight">AES-256</span>
                <span className="text-sm text-slate-400 uppercase tracking-wider font-semibold mt-1">Шифрование</span>
              </div>
            </div>
          </motion.div>

          {/* Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-xl">
               {/* Abstract Network Map */}
               <div className="absolute inset-0 flex items-center justify-center">

                  {/* Central Node (Chita) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                     <div className="relative flex h-16 w-16 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-20"></span>
                        <div className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                            <Server className="h-4 w-4 text-white" />
                        </div>
                     </div>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-mono text-cyan-400">CHITA</div>
                  </div>

                  {/* Connected Nodes (Abstract) */}
                  {[0, 120, 240].map((deg) => (
                      <div key={deg} className="absolute top-1/2 left-1/2 h-[120px] w-[1px] origin-top bg-gradient-to-b from-cyan-500/50 to-transparent" style={{ transform: `rotate(${deg}deg)` }}>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <div className="h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                         </div>
                      </div>
                  ))}

                  {/* Orbiting particles */}
                   <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                      <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white/20 blur-sm"></div>
                      <div className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-white/20 blur-sm"></div>
                   </div>

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
