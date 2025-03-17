'use client';

import { useEffect, useState } from 'react';

export default function ThankYou() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://chat.whatsapp.com/KYyAVhWGhO6EsmQDhLRHUq';
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]"></div>
      <main className="max-w-2xl mx-auto px-4 py-24 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-700/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg blur"></div>
          <div className="relative bg-white dark:bg-black p-8 rounded-lg border border-gray-200/50 dark:border-gray-800/50 shadow-xl space-y-8">
            <div className="text-6xl font-light text-black dark:text-white mb-4">
              {countdown}
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
              Redirecionando para o grupo do WhatsApp...
            </p>

            <a
              href="https://chat.whatsapp.com/KYyAVhWGhO6EsmQDhLRHUq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-black font-light tracking-wide hover:opacity-90 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Entrar na Comunidade do WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 