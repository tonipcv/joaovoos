'use client';

import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://chat.whatsapp.com/KYyAVhWGhO6EsmQDhLRHUq';
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <main className="max-w-2xl mx-auto px-4 py-24 text-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl font-light text-black dark:text-white tracking-tight">
            Último passo - Entrar no Grupo do WhatsApp
          </h1>

          <a
            href="https://chat.whatsapp.com/KYyAVhWGhO6EsmQDhLRHUq"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-light tracking-wide hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Entrar na Comunidade do WhatsApp
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
            Redirecionando automaticamente em alguns segundos...
          </p>
        </div>
      </main>
    </div>
  );
} 