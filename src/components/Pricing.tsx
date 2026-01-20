'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Месяц',
    price: '99₽',
    period: '/мес',
    features: [
      'Безлимитный трафик',
      'Высокая скорость (до 1 Гбит/с)',
      'До 5 устройств',
      'Защищенные протоколы VLESS',
    ],
    highlight: false,
    buttonText: 'Начать',
  },
  {
    name: 'Год',
    price: '990₽',
    period: '/год',
    features: [
      'Безлимитный трафик',
      'Высокая скорость (до 1 Гбит/с)',
      'До 5 устройств',
      'Защищенные протоколы VLESS',
      'Выгода 17%',
    ],
    highlight: true,
    buttonText: 'Выбрать',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Тарифы
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Выберите план, который подходит вам. Простые и честные условия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border backdrop-blur-xl flex flex-col h-full ${
                plan.highlight
                  ? 'border-purple-500/50 bg-slate-900/60 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105 z-10'
                  : 'border-white/10 bg-slate-900/40 hover:bg-slate-900/60 transition-colors'
              }`}
            >
              <div className="mb-8 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500' : 'text-white'}`}>
                    {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-purple-400' : 'text-slate-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="https://t.me/teleport_xbot" target="_blank" className="w-full">
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-[1.02]'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
