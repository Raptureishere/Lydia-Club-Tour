import React from 'react';
import { Sparkles, Calendar, MapPin, Ticket } from 'lucide-react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-purple-900/10 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single element wordmark */}
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-lg p-1 transition"
          title="Return to Welcome Page"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4c1d95] via-[#581c87] to-[#3b0764] flex items-center justify-center text-amber-300 font-bold shadow-md shadow-purple-950/20 group-hover:scale-105 transition-transform duration-200">
            <span className="font-serif text-lg tracking-wider">L</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-purple-950 whitespace-nowrap shrink-0 group-hover:text-purple-700 transition-colors">
              LYDIA TOUR <span className="text-amber-600">·</span> TTU
            </span>
            <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap tracking-wide">
              Lydia Club Takoradi
            </span>
          </div>
        </button>

        {/* Zone 2: 4 nav links with subtle hover (hidden on small mobile, visible on tablet/desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('welcome')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 hover:text-purple-900 ${
              currentScreen === 'welcome' ? 'text-purple-900 font-semibold' : 'text-slate-600'
            }`}
          >
            Overview
          </button>
          <a
            href="#details"
            onClick={(e) => {
              if (currentScreen !== 'welcome') {
                e.preventDefault();
                onNavigate('welcome');
                setTimeout(() => {
                  document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-purple-900 text-slate-600"
          >
            Event Details
          </a>
          <a
            href="#speaker"
            onClick={(e) => {
              if (currentScreen !== 'welcome') {
                e.preventDefault();
                onNavigate('welcome');
                setTimeout(() => {
                  document.getElementById('speaker')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-purple-900 text-slate-600"
          >
            Special Guest
          </a>
          <a
            href="#highlights"
            onClick={(e) => {
              if (currentScreen !== 'welcome') {
                e.preventDefault();
                onNavigate('welcome');
                setTimeout(() => {
                  document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }}
            className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-purple-900 text-slate-600"
          >
            Highlights
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentScreen === 'register' ? (
            <button
              onClick={() => onNavigate('welcome')}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-200/80 rounded-xl transition duration-150 whitespace-nowrap shrink-0"
            >
              Back to Home
            </button>
          ) : currentScreen === 'success' ? (
            <button
              onClick={() => onNavigate('register')}
              className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-800 to-purple-950 hover:from-purple-900 hover:to-black rounded-xl shadow-sm transition duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              New Registration
            </button>
          ) : (
            <button
              onClick={() => onNavigate('register')}
              className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4c1d95] via-[#581c87] to-[#3b0764] hover:shadow-lg hover:shadow-purple-900/25 active:scale-[0.98] rounded-xl transition duration-200 whitespace-nowrap shrink-0 flex items-center gap-2 border border-purple-700/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              Register Now
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
