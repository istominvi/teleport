'use client';

import Link from 'next/link';
import { Rocket, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

            {/* Brand */}
            <div className="flex items-center gap-2">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-lg shadow-purple-500/20">
                    <Rocket className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-bold text-transparent tracking-tight">
                    TelePort™
                </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
                <Link href="#" className="hover:text-white transition-colors">
                    Публичная оферта
                </Link>
                <Link href="https://t.me/teleport_support" className="hover:text-white transition-colors flex items-center gap-2">
                    Поддержка
                    <Send className="w-4 h-4" />
                </Link>
            </div>

             {/* Social Icon */}
             <Link
                href="https://t.me/teleport_vpn"
                className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Telegram"
             >
                 <Send className="h-5 w-5 text-slate-400 group-hover:text-[#229ED9] transition-colors" />
             </Link>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-slate-500">
                © 2025 TelePort™. Приватный цифровой шлюз.
            </p>
        </div>
      </div>
    </footer>
  );
}
