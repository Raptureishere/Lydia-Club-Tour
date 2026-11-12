import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Sparkles, 
  ArrowRight, 
  HeartHandshake, 
  CheckCircle2, 
  Mic2, 
  Gift, 
  ShieldCheck, 
  Clock,
  Award
} from 'lucide-react';
import { ScreenType } from '../types';

interface WelcomePageProps {
  onNavigateToRegister: () => void;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onNavigateToRegister }) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
        {/* Subtle decorative purple & gold ambient glow backdrops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 left-10 w-64 h-64 bg-amber-200/25 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headings, Value Proposition & Primary CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Small heading (as instructed) */}
              <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase">
                <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
                <span>LYDIA CLUB PRESENTS</span>
                <span className="w-6 h-0.5 bg-amber-500 rounded-full" />
              </div>

              {/* Main heading (as instructed) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-purple-950 tracking-tight leading-[1.15] mb-5 text-balance">
                WELCOME TO <span className="bg-gradient-to-r from-purple-800 via-purple-900 to-amber-700 bg-clip-text text-transparent">LYDIA TOUR</span> WITH <span className="underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">FELLA MAKAFUI</span> AT TTU!
              </h1>

              {/* Supporting text (exact quote as instructed) */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-normal mb-8 max-w-2xl">
                “An exciting campus experience bringing together entertainment, health awareness, meaningful conversations and student engagement.”
              </p>

              {/* Prominent Button (exact label: REGISTER NOW) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={onNavigateToRegister}
                  className="px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#3b0764] via-[#581c87] to-[#4c1d95] hover:from-[#2e0854] hover:to-[#581c87] rounded-2xl shadow-xl shadow-purple-950/25 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3 border border-amber-400/40 group cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                  <span>REGISTER NOW</span>
                  <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="text-xs text-slate-500 flex items-center gap-2 px-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free entry for TTU students with Index Number</span>
                </div>
              </div>

              {/* Trust/Partner Badges */}
              <div className="pt-6 border-t border-purple-900/10 w-full flex flex-wrap items-center gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-purple-950">Campus Host:</span>
                  <span>Takoradi Technical University</span>
                </div>
                <span className="text-slate-300">·</span>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-purple-950">Supported by:</span>
                  <span>DKT International Ghana</span>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative border frame */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/30 via-purple-600/20 to-purple-900/30 rounded-3xl blur-md -z-10" />
                
                <div className="bg-white rounded-3xl overflow-hidden border border-purple-200/80 shadow-2xl shadow-purple-950/15">
                  <div className="relative aspect-[4/3] overflow-hidden bg-purple-950">
                    <img
                      src="/src/assets/images/fella_makafui_keynote_1794449849693.jpg"
                      alt="Fella Makafui speaking at Lydia Tour campus event"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Visual overlay tag */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-purple-950/95 via-purple-950/60 to-transparent p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-0.5">
                            Special Celebrity Guest
                          </p>
                          <h3 className="text-xl font-bold tracking-tight">Fella Makafui</h3>
                          <p className="text-xs text-purple-200">Actress, Entrepreneur & Youth Ambassador</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300">
                          <Mic2 className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Card Mini-Stats */}
                  <div className="p-5 bg-gradient-to-b from-white to-[#FDFBF7] border-t border-purple-100 flex items-center justify-between text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-purple-950">Live at TTU Campus</span>
                    </div>
                    <span className="text-slate-400">|</span>
                    <span className="font-medium text-purple-900">NAT Auditorium</span>
                    <span className="text-slate-400">|</span>
                    <span className="font-bold text-amber-700">17 Nov 2026</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Information Cards Section (Required Event Details) */}
      <section id="details" className="py-12 bg-white/70 border-y border-purple-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase mb-2">
              KEY EVENT INFORMATION
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-950 tracking-tight">
              Event Details & Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1: EVENT */}
            <div className="bg-[#FAF8F5] border border-purple-900/10 hover:border-purple-900/30 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-purple-900" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  EVENT
                </span>
                <h3 className="text-lg font-bold text-purple-950 leading-snug">
                  Lydia Tour with Fella Makafui
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-purple-900/10">
                Interactive campus youth session & health dialogue
              </p>
            </div>

            {/* Card 2: DATE */}
            <div className="bg-[#FAF8F5] border border-purple-900/10 hover:border-purple-900/30 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-amber-800" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  DATE
                </span>
                <h3 className="text-lg font-bold text-purple-950 leading-snug">
                  17th November 2026
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-purple-900/10">
                Main campus session · Doors open at 9:00 AM
              </p>
            </div>

            {/* Card 3: VENUE */}
            <div className="bg-[#FAF8F5] border border-purple-900/10 hover:border-purple-900/30 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-900" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  VENUE
                </span>
                <h3 className="text-lg font-bold text-purple-950 leading-snug">
                  NAT Auditorium
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-purple-900/10">
                Takoradi Technical University (Main Campus)
              </p>
            </div>

            {/* Card 4: ORGANISER */}
            <div className="bg-[#FAF8F5] border border-purple-900/10 hover:border-purple-900/30 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-950/5 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-800" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  ORGANISER
                </span>
                <h3 className="text-lg font-bold text-purple-950 leading-snug">
                  Lydia Club, TTU
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-3 pt-3 border-t border-purple-900/10">
                In collaboration with DKT International
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights & Experience Section */}
      <section id="highlights" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-widest text-amber-700 uppercase mb-2">
                WHAT TO EXPECT
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight">
                An Unforgettable Campus Experience
              </h2>
            </div>
            <button
              onClick={onNavigateToRegister}
              className="text-sm font-bold text-purple-900 hover:text-purple-700 flex items-center gap-1.5 transition-colors group self-start md:self-auto cursor-pointer"
            >
              <span>Secure your seat today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-7 border border-purple-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-800 to-purple-950 text-white flex items-center justify-center mb-5 shadow-sm">
                <Mic2 className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-2.5">
                Celebrity Dialogue & Mentorship
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly with Fella Makafui in an unfiltered Q&A session discussing career growth, youth empowerment, resilience, and personal wellness.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-7 border border-purple-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-800 to-purple-950 text-white flex items-center justify-center mb-5 shadow-sm">
                <HeartHandshake className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-2.5">
                Youth Reproductive Health Awareness
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Expert health facilitators and the Lydia health team break down stigma, providing accurate health guidance, confidential advice, and wellness counseling.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-7 border border-purple-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-800 to-purple-950 text-white flex items-center justify-center mb-5 shadow-sm">
                <Gift className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-bold text-purple-950 mb-2.5">
                Goodie Bags & Live Surprises
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Registered students receive exclusive Lydia Club event merchandise, complimentary health packages, and opportunities to win prizes on stage.
              </p>
            </div>

          </div>

          {/* Secondary CTA Banner */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-purple-950 via-[#4a0e4e] to-purple-900 p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-400/20 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Limited Auditorial Seating</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Seats at NAT Auditorium are filling fast!
                </h3>
                <p className="text-sm text-purple-200 mt-2">
                  Registration is completely free for all Takoradi Technical University students. Ensure your attendance by securing your entry badge now.
                </p>
              </div>

              <button
                onClick={onNavigateToRegister}
                className="px-7 py-3.5 text-base font-bold text-purple-950 bg-amber-400 hover:bg-amber-300 active:scale-95 rounded-xl transition shadow-lg whitespace-nowrap shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register for Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-[#FAF8F5] border-t border-purple-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-900 text-amber-300 flex items-center justify-center font-bold text-sm">
              L
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-700">
              Powered by Lydia Club, Takoradi Technical University.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            In collaboration with DKT International Ghana · 17th November 2026
          </p>
        </div>
      </footer>
    </div>
  );
};
