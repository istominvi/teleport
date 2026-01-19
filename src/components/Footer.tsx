'use client';

import Link from 'next/link';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* Copyright */}
            <p className="copyright-text text-xs leading-5 text-slate-500">
                © 2025 TelePort™. Приватный цифровой шлюз.
            </p>

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

        </div>
      </div>
    </footer>
  );
}
