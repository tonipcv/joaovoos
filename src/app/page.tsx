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
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-lg md:text-xl font-light text-gray-400 dark:text-gray-500 mb-12 tracking-widest">
          JOÃO VOOS
        </h1>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-black dark:text-white mb-16 tracking-tight leading-tight">
          VOE AINDA ESSE ANO PARA FORA POR ATÉ A METADE DO PREÇO
        </h2>

        <div>
          <form action={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Digite seu melhor e-mail"
                required
                className="flex-1 px-6 py-4 rounded-none border border-gray-200 dark:border-gray-800 focus:ring-1 focus:ring-gray-500 bg-transparent text-black dark:text-white font-light"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-light tracking-wide hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Entrar na Comunidade do WhatsApp
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 font-light">
            Junte-se a milhares de pessoas que já estão economizando em suas viagens
          </p>
        </div>
      </main>
    </div>
  );
}
