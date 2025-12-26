'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Возможности', href: '#features' },
  { name: 'Подписка', href: '#pricing' },
  { name: 'Инструкция', href: '#local-trust' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-md transition-all duration-300"
    )}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Increased size by ~20% (h-10 to h-12 is 20%, went to h-14 for better prominence as requested "height={48}") */}
          <div className="relative h-14 w-44">
             <Image
               src="/logo.png"
               alt="TelePort™ Logo"
               fill
               className="object-contain object-left"
               priority
             />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#020970] px-6 font-medium text-[#00e0f7] shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-[#012bf8] hover:to-[#0366f6] hover:text-white hover:shadow-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950">
            <span className="relative">Подключить</span>
            {/* Shimmer effect updated to match new colors if needed, but white/20 is usually safe */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:animate-shimmer" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <button className="w-full rounded-full bg-[#020970] text-[#00e0f7] hover:bg-gradient-to-r hover:from-[#012bf8] hover:to-[#0366f6] hover:text-white px-4 py-2 text-center font-medium shadow-lg shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50">
                Подключить
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
