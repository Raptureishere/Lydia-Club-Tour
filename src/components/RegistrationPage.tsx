import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Hash, 
  Phone, 
  CheckSquare, 
  Square, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  ShieldCheck,
  Calendar,
  MapPin
} from 'lucide-react';
import { RegistrationFormData, FormErrors, RegistrationRecord } from '../types';
import { validateGhanaPhone } from '../utils/ghanaPhone';

interface RegistrationPageProps {
  onBackToWelcome: () => void;
  onSubmitSuccess: (record: RegistrationRecord) => void;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({
  onBackToWelcome,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    indexNumber: '',
    phoneNumber: '',
    confirmed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Real-time phone check to show detected network badge
  const phoneValidation = validateGhanaPhone(formData.phoneNumber);

  const handleInputChange = (field: keyof RegistrationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field);
  };

  const validateField = (field: string): boolean => {
    let isValid = true;
    const newErrors: FormErrors = { ...errors };

    if (field === 'fullName') {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
        isValid = false;
      } else if (formData.fullName.trim().length < 3) {
        newErrors.fullName = 'Please enter your complete full name';
        isValid = false;
      } else {
        delete newErrors.fullName;
      }
    }

    if (field === 'indexNumber') {
      if (!formData.indexNumber.trim()) {
        newErrors.indexNumber = 'TTU index number is required';
        isValid = false;
      } else if (formData.indexNumber.trim().length < 5) {
        newErrors.indexNumber = 'Please enter a valid TTU index number (e.g. 0722XXXXXX)';
        isValid = false;
      } else {
        delete newErrors.indexNumber;
      }
    }

    if (field === 'phoneNumber') {
      const res = validateGhanaPhone(formData.phoneNumber);
      if (!res.isValid) {
        newErrors.phoneNumber = res.error || 'Please enter a valid Ghanaian phone number';
        isValid = false;
      } else {
        delete newErrors.phoneNumber;
      }
    }

    if (field === 'confirmed') {
      if (!formData.confirmed) {
        newErrors.confirmed = 'You must confirm that your information is accurate';
        isValid = false;
      } else {
        delete newErrors.confirmed;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      indexNumber: true,
      phoneNumber: true,
      confirmed: true,
    });

    const validationErrors: FormErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      validationErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      validationErrors.fullName = 'Full name must be at least 3 characters';
    }

    // Validate Index Number
    if (!formData.indexNumber.trim()) {
      validationErrors.indexNumber = 'Please enter your TTU index number';
    } else if (formData.indexNumber.trim().length < 5) {
      validationErrors.indexNumber = 'Please enter a complete index number';
    }

    // Validate Phone Number
    const phoneRes = validateGhanaPhone(formData.phoneNumber);
    if (!phoneRes.isValid) {
      validationErrors.phoneNumber = phoneRes.error || 'Please enter a valid Ghanaian phone number (e.g. 024XXXXXXX or +233XXXXXXXXX)';
    }

    // Validate Confirmation Checkbox
    if (!formData.confirmed) {
      validationErrors.confirmed = 'Please tick the confirmation checkbox to proceed';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      // Scroll smoothly to the first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Simulate form submission with loading state (frontend only)
    setIsSubmitting(true);

    setTimeout(() => {
      // Generate clean simulated pass record
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const newRecord: RegistrationRecord = {
        fullName: formData.fullName.trim(),
        indexNumber: formData.indexNumber.trim().toUpperCase(),
        phoneNumber: phoneRes.formatted || formData.phoneNumber.trim(),
        confirmed: true,
        ticketId: `TTU-LYD-${randomDigits}`,
        timestamp: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        seatZone: 'Zone A · Main Floor',
      };

      setIsSubmitting(false);
      onSubmitSuccess(newRecord);
    }, 900);
  };

  return (
    <div className="w-full py-8 md:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Top Breadcrumb / Back Link */}
      <div className="mb-6">
        <button
          type="button"
          onClick={onBackToWelcome}
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-900 hover:text-purple-700 transition cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-amber-600 group-hover:-translate-x-1 transition-transform" />
          <span>Back to welcome page</span>
        </button>
      </div>

      {/* Main Registration Card */}
      <div className="bg-white rounded-3xl border border-purple-900/10 shadow-xl shadow-purple-950/5 overflow-hidden">
        
        {/* Event Header Banner Strip */}
        <div className="bg-gradient-to-r from-purple-950 via-[#4a0e4e] to-purple-900 p-6 sm:p-8 text-white relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">
                <span>Lydia Club · TTU Chapter</span>
              </div>
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                STUDENT REGISTRATION
              </h1>
              {/* Supporting text */}
              <p className="text-sm sm:text-base text-purple-200 mt-2 max-w-xl">
                Welcome! Kindly provide your details below to register for Lydia Tour with Fella Makafui at TTU.
              </p>
            </div>

            {/* Quick Event Summary Badge */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 shrink-0 text-xs text-purple-100 flex flex-col gap-1.5 self-start sm:self-auto min-w-[200px]">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>17th November 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span>NAT Auditorium, TTU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-10 space-y-7">
          
          {/* Field 1: FULL NAME */}
          <div id="field-fullName" className="space-y-2">
            <label 
              htmlFor="fullName" 
              className="block text-sm font-bold text-purple-950 uppercase tracking-wide"
            >
              FULL NAME <span className="text-rose-600">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                placeholder="Enter your full name"
                disabled={isSubmitting}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm sm:text-base transition-colors outline-none ${
                  errors.fullName
                    ? 'border-rose-400 bg-rose-50/30 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                }`}
                aria-required="true"
                aria-invalid={!!errors.fullName}
              />
            </div>
            {errors.fullName && (
              <p className="text-xs text-rose-600 flex items-center gap-1.5 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          {/* Field 2: INDEX NUMBER */}
          <div id="field-indexNumber" className="space-y-2">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="indexNumber" 
                className="block text-sm font-bold text-purple-950 uppercase tracking-wide"
              >
                INDEX NUMBER <span className="text-rose-600">*</span>
              </label>
              <span className="text-xs text-slate-500">e.g. 0722123456</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Hash className="w-5 h-5" />
              </div>
              <input
                id="indexNumber"
                type="text"
                value={formData.indexNumber}
                onChange={(e) => handleInputChange('indexNumber', e.target.value)}
                onBlur={() => handleBlur('indexNumber')}
                placeholder="Enter your TTU index number"
                disabled={isSubmitting}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm sm:text-base font-mono uppercase transition-colors outline-none ${
                  errors.indexNumber
                    ? 'border-rose-400 bg-rose-50/30 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                }`}
                aria-required="true"
                aria-invalid={!!errors.indexNumber}
              />
            </div>
            {errors.indexNumber ? (
              <p className="text-xs text-rose-600 flex items-center gap-1.5 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.indexNumber}</span>
              </p>
            ) : (
              <p className="text-[11px] text-slate-500">
                Takoradi Technical University issued student identification number.
              </p>
            )}
          </div>

          {/* Field 3: PHONE NUMBER */}
          <div id="field-phoneNumber" className="space-y-2">
            <div className="flex items-center justify-between">
              <label 
                htmlFor="phoneNumber" 
                className="block text-sm font-bold text-purple-950 uppercase tracking-wide"
              >
                PHONE NUMBER <span className="text-rose-600">*</span>
              </label>
              {formData.phoneNumber && phoneValidation.isValid && phoneValidation.carrier && (
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {phoneValidation.carrier} detected
                </span>
              )}
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-5 h-5" />
              </div>
              <input
                id="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                onBlur={() => handleBlur('phoneNumber')}
                placeholder="Enter your active phone number"
                disabled={isSubmitting}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm sm:text-base transition-colors outline-none ${
                  errors.phoneNumber
                    ? 'border-rose-400 bg-rose-50/30 text-rose-950 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-100'
                }`}
                aria-required="true"
                aria-invalid={!!errors.phoneNumber}
              />
            </div>
            {errors.phoneNumber ? (
              <p className="text-xs text-rose-600 flex items-center gap-1.5 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phoneNumber}</span>
              </p>
            ) : (
              <p className="text-[11px] text-slate-500">
                Accepts Ghanaian formats starting with <span className="font-mono font-medium text-purple-900">0</span> (e.g. 0244123456) or <span className="font-mono font-medium text-purple-900">+233</span> (e.g. +233 24 123 4567).
              </p>
            )}
          </div>

          {/* Confirmation Checkbox */}
          <div id="field-confirmed" className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={formData.confirmed}
                onChange={(e) => handleInputChange('confirmed', e.target.checked)}
                disabled={isSubmitting}
                className="sr-only"
              />
              <div 
                className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border transition-all ${
                  formData.confirmed
                    ? 'bg-purple-900 border-purple-900 text-amber-300'
                    : errors.confirmed
                    ? 'border-rose-400 bg-rose-50'
                    : 'border-slate-400 bg-white group-hover:border-purple-600'
                }`}
              >
                {formData.confirmed ? (
                  <CheckSquare className="w-5 h-5 fill-purple-900 text-amber-300" />
                ) : null}
              </div>
              <span className="text-sm font-medium text-slate-700 leading-normal">
                I confirm that the information provided is accurate.
              </span>
            </label>
            {errors.confirmed && (
              <p className="text-xs text-rose-600 flex items-center gap-1.5 mt-2 pl-8 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.confirmed}</span>
              </p>
            )}
          </div>

          {/* Large Attractive Submit Button */}
          <div className="pt-4 space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-2xl text-base sm:text-lg font-bold text-white shadow-xl transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer ${
                isSubmitting
                  ? 'bg-purple-900/80 cursor-wait opacity-90'
                  : 'bg-gradient-to-r from-[#3b0764] via-[#581c87] to-[#4c1d95] hover:from-[#2e0854] hover:to-[#581c87] hover:shadow-purple-950/25 active:scale-[0.99] border border-amber-400/40'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-amber-300" />
                  <span>Processing Registration...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-300" />
                  <span>SUBMIT REGISTRATION</span>
                </>
              )}
            </button>

            {/* Small text link (exact requirement: Back to welcome page.) */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onBackToWelcome}
                disabled={isSubmitting}
                className="text-xs sm:text-sm font-medium text-purple-900 hover:text-purple-700 underline underline-offset-4 transition cursor-pointer"
              >
                Back to welcome page.
              </button>
            </div>
          </div>

        </form>

        {/* Security & Privacy notice footnote */}
        <div className="bg-[#FAF8F5] p-4 sm:px-8 border-t border-purple-900/10 text-center text-xs text-slate-500">
          <p>
            Official Lydia Tour event desk ·Takoradi Technical University. Entry passes are non-transferable and verified at NAT Auditorium entrance.
          </p>
        </div>

      </div>

    </div>
  );
};
