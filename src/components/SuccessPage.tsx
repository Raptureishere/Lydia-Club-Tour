import React, { useState } from 'react';
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Sparkles, 
  UserPlus, 
  Check, 
  Share2, 
  Printer, 
  Ticket,
  QrCode,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { RegistrationRecord } from '../types';

interface SuccessPageProps {
  registration: RegistrationRecord | null;
  onDone: () => void;
  onRegisterAnother: () => void;
}

export const SuccessPage: React.FC<SuccessPageProps> = ({
  registration,
  onDone,
  onRegisterAnother,
}) => {
  const [copied, setCopied] = useState(false);

  // Fallback defaults if accessed directly
  const studentName = registration?.fullName || 'TTU Student Attendee';
  const indexNumber = registration?.indexNumber || 'TTU-STUDENT';
  const phoneNumber = registration?.phoneNumber || 'Active Contact';
  const ticketId = registration?.ticketId || 'TTU-LYD-7721';
  const registrationDate = registration?.timestamp || 'Today';

  const handleShareOrCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `Lydia Tour With Fella Makafui (TTU)\nAttendee: ${studentName}\nIndex: ${indexNumber}\nPass ID: ${ticketId}\nDate: 17th Nov 2026\nVenue: NAT Auditorium, TTU`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full py-8 md:py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto flex flex-col items-center">
      
      {/* Success Card Wrapper */}
      <div className="w-full bg-white rounded-3xl border border-purple-900/10 shadow-2xl shadow-purple-950/10 overflow-hidden text-center">
        
        {/* Top Celebration Accent Bar */}
        <div className="h-3 w-full bg-gradient-to-r from-purple-800 via-amber-400 to-purple-900" />

        <div className="p-6 sm:p-10 md:p-12 flex flex-col items-center">
          
          {/* Large Success Icon */}
          <div className="relative mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-purple-900 via-purple-800 to-amber-500 p-1 shadow-xl shadow-purple-900/20 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-600" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 fill-purple-950" />
            </div>
          </div>

          {/* Main Heading (exact requirement: REGISTRATION SUCCESSFUL!) */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-950 tracking-tight mb-3">
            REGISTRATION SUCCESSFUL!
          </h1>

          {/* Supporting message (exact requirement) */}
          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-lg mb-8 leading-relaxed">
            Thank you for registering for Lydia Tour with Fella Makafui at TTU. We look forward to welcoming you!
          </p>

          {/* Event Date and Venue Card (as specified in prompt) */}
          <div className="w-full max-w-lg bg-[#FAF8F5] border border-purple-900/15 rounded-2xl p-5 mb-8 text-left shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-3">
              <Ticket className="w-4 h-4 text-amber-600" />
              <span>CONFIRMED EVENT RESERVATION</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Event Date */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-purple-900" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Event Date</span>
                  <p className="text-sm sm:text-base font-bold text-purple-950">
                    17th November 2026
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-800" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Venue</span>
                  <p className="text-sm sm:text-base font-bold text-purple-950">
                    NAT Auditorium, TTU
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Entry Pass Replica for the Student */}
          <div className="w-full max-w-lg bg-gradient-to-br from-purple-950 via-[#3b0764] to-[#2e0854] text-white rounded-2xl p-6 text-left shadow-xl relative overflow-hidden mb-8 border border-purple-700/50">
            {/* Watermark badge */}
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
              <Sparkles className="w-48 h-48 text-amber-300" />
            </div>

            <div className="flex items-center justify-between border-b border-purple-700/60 pb-3 mb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">
                  OFFICIAL STUDENT PASS
                </span>
                <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
                  Lydia Tour with Fella Makafui
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-purple-300 uppercase block">Pass ID</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-amber-300">
                  {ticketId}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm mb-4">
              <div>
                <span className="text-[11px] text-purple-300 uppercase block">Student Name</span>
                <span className="font-semibold text-white truncate block">{studentName}</span>
              </div>
              <div>
                <span className="text-[11px] text-purple-300 uppercase block">TTU Index No.</span>
                <span className="font-mono font-semibold text-amber-200">{indexNumber}</span>
              </div>
              <div>
                <span className="text-[11px] text-purple-300 uppercase block">Phone Contact</span>
                <span className="font-medium text-slate-200">{phoneNumber}</span>
              </div>
              <div>
                <span className="text-[11px] text-purple-300 uppercase block">Admission</span>
                <span className="font-semibold text-emerald-400">Admit One · Free Entry</span>
              </div>
            </div>

            {/* Quick barcode / QR mock simulation */}
            <div className="pt-3 border-t border-purple-700/60 flex items-center justify-between text-[11px] text-purple-300">
              <span>Present this pass or your TTU ID card at the door</span>
              <button 
                onClick={handleShareOrCopy}
                type="button"
                className="text-amber-300 hover:text-white flex items-center gap-1 font-semibold transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Pass Details</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action Buttons: DONE and Register Another Student */}
          <div className="w-full max-w-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Primary DONE button (returns to welcome page as requested) */}
            <button
              onClick={onDone}
              className="flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#3b0764] via-[#581c87] to-[#4c1d95] hover:from-[#2e0854] hover:to-[#581c87] shadow-lg shadow-purple-950/20 active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2 border border-amber-400/40 text-base"
            >
              <Check className="w-5 h-5 text-amber-300" />
              <span>DONE</span>
            </button>

            {/* Option to register another student (as requested) */}
            <button
              onClick={onRegisterAnother}
              className="flex-1 py-3.5 px-6 rounded-xl font-bold text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200 active:scale-[0.98] transition cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <UserPlus className="w-4 h-4 text-purple-800" />
              <span>Register Another Student</span>
            </button>

          </div>

        </div>

        {/* Footer attribution */}
        <div className="py-4 bg-[#FAF8F5] border-t border-purple-900/10 text-xs text-slate-500">
          Powered by Lydia Club, Takoradi Technical University.
        </div>

      </div>

    </div>
  );
};
