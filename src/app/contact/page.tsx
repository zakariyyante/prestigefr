import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const dynamic = "force-dynamic";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black mb-8 red-neon-text">Contactez-nous</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              Vous avez une question, une suggestion ou vous souhaitez signaler un problème avec l'un des sites référencés ? 
              Notre équipe est à votre écoute.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-panel border border-border rounded-xl">
                <span className="text-primary text-2xl">📧</span>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sm text-gray-400">contact@majestiafr.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-panel border border-border rounded-xl">
                <span className="text-primary text-2xl">📍</span>
                <div>
                  <h4 className="font-bold">Bureaux</h4>
                  <p className="text-sm text-gray-400">Paris, France</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-card p-6 rounded-2xl border border-border">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input type="text" className="w-full bg-panel border border-border rounded-lg p-3 focus:border-primary outline-none transition-colors" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full bg-panel border border-border rounded-lg p-3 focus:border-primary outline-none transition-colors" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea className="w-full bg-panel border border-border rounded-lg p-3 h-32 focus:border-primary outline-none transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-background font-bold py-3 rounded-lg shadow-neon hover:scale-[1.02] transition-all">
              Envoyer le message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
