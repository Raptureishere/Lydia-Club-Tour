import React, { useState, useEffect } from 'react';
import { ScreenType, RegistrationRecord } from './types';
import { Header } from './components/Header';
import { WelcomePage } from './components/WelcomePage';
import { RegistrationPage } from './components/RegistrationPage';
import { SuccessPage } from './components/SuccessPage';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [latestRegistration, setLatestRegistration] = useState<RegistrationRecord | null>(null);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
  };

  const handleRegistrationSuccess = (record: RegistrationRecord) => {
    setLatestRegistration(record);
    setCurrentScreen('success');
  };

  const handleDone = () => {
    setCurrentScreen('welcome');
  };

  const handleRegisterAnother = () => {
    setCurrentScreen('register');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col font-sans selection:bg-purple-900 selection:text-amber-200">
      {/* Top Bar Navigation */}
      <Header currentScreen={currentScreen} onNavigate={handleNavigate} />

      {/* Main Content Area based on currentScreen */}
      <main className="flex-1 flex flex-col justify-start">
        {currentScreen === 'welcome' && (
          <WelcomePage onNavigateToRegister={() => setCurrentScreen('register')} />
        )}

        {currentScreen === 'register' && (
          <RegistrationPage
            onBackToWelcome={() => setCurrentScreen('welcome')}
            onSubmitSuccess={handleRegistrationSuccess}
          />
        )}

        {currentScreen === 'success' && (
          <SuccessPage
            registration={latestRegistration}
            onDone={handleDone}
            onRegisterAnother={handleRegisterAnother}
          />
        )}
      </main>
    </div>
  );
}
