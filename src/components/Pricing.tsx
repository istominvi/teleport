'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Месяц',
    price: '199 ₽',
    period: '/ мес',
    description: 'Для тех, кто хочет попробовать',
    features: ['Высокая скорость до 1 Гбит/с', 'Безлимитный трафик', 'Поддержка 24/7', 'До 3 устройств'],
    highlight: false,
  },
  {
    name: 'Год',
    price: '99 ₽',
    period: '/ мес',
    description: 'Максимальная выгода (-50%)',
    features: ['Всё из тарифа Месяц', 'Приоритетная поддержка', 'До 5 устройств', 'Личный IP (опция)'],
    highlight: true, // Best value
  },
  {
    name: '3 Месяца',
    price: '149 ₽',
    period: '/ мес',
    description: 'Золотая середина',
    features: ['Высокая скорость', 'Безлимитный трафик', 'Поддержка 24/7', 'До 3 устройств'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Тарифы телепортации
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Выберите скорость вашего перемещения. Без скрытых платежей и ограничений скорости.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border backdrop-blur-xl flex flex-col ${
                plan.highlight
                  ? 'border-purple-500/50 bg-slate-900/60 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105 md:scale-110 z-10'
                  : 'border-white/10 bg-slate-900/40 hover:bg-slate-900/60 transition-colors'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  ХИТ ПРОДАЖ
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-cyan-400' : 'text-slate-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                Выбрать
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
