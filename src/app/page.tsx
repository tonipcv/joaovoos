import Image from "next/image";
import { redirect } from 'next/navigation';

export default function Home() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const email = formData.get('email');
    // Here you would typically save the email to your database
    redirect('/obrigado');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_100%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]"></div>
      <main className="max-w-3xl mx-auto px-4 py-24 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-transparent dark:from-gray-700/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="mb-8 relative">
          <div className="text-4xl mb-4 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            ✈️
          </div>
          <h1 className="text-lg md:text-xl font-light text-gray-400 dark:text-gray-500 tracking-widest relative">
            JOÃO VOOS
          </h1>
          <a 
            href="https://instagram.com/joaodosvoos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mt-2 inline-block"
          >
            @joaodosvoos
          </a>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white mb-16 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white">
          VOE AINDA ESSE ANO PARA FORA POR ATÉ A METADE DO PREÇO
        </h2>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg blur"></div>
          <div className="relative bg-white dark:bg-black p-8 rounded-lg border border-gray-200/50 dark:border-gray-800/50 shadow-xl">
            <form action={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                className="w-full px-6 py-4 rounded-lg border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-gray-500 bg-transparent text-black dark:text-white font-light backdrop-blur-sm bg-white/50 dark:bg-black/50"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-black font-light tracking-wide hover:opacity-90 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Entrar na Comunidade do WhatsApp
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-light">
              Junte-se a milhares de pessoas que já estão economizando em suas viagens
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
