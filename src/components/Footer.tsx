import { Rocket, Github, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-md mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                TelePort™
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Новое поколение VPN сервисов. Быстро, безопасно и прямо из сердца Сибири.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Преимущества</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Тарифы</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Инструкция</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Telegram Support</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} TelePort VPN. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="text-slate-600 text-xs flex items-center gap-1">
            Made with <span className="text-red-500/50">♥</span> in Chita
          </div>
        </div>
      </div>
    </footer>
  );
}
