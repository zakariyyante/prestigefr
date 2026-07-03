import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-border pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Image 
              src="/choixroyal_icon.jpg" 
              alt="ChoixRoyal" 
              width={280} 
              height={80} 
              className="h-20 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour identifier les meilleures plateformes de jeux en ligne en France. 
              Nous analysons et comparons les opérateurs agréés pour vous offrir une expérience sécurisée et éclairée.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">À Propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contactez-nous</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">Politique de Confidentialité</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">Conditions d'Utilisation</Link></li>
            </ul>
          </div>

          {/* Responsibility */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Jeu Responsable</h4>
            <p className="text-gray-400 text-sm">
              Le jeu doit rester un plaisir. Jouez de manière responsable. 
              Pour obtenir de l'aide, contactez :
            </p>
            <div className="flex flex-wrap gap-4 items-center">
               <a href="https://anj.fr" target="_blank" rel="noopener noreferrer" className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:[filter:drop-shadow(0_0_6px_rgba(0,229,255,0.5))] transition-all">
                 <Image src="/anj.png" alt="ANJ" width={80} height={30} className="h-8 w-auto" />
               </a>
               <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                 <Image src="/gambleaware.png" alt="GambleAware" width={100} height={30} className="h-8 w-auto" />
               </a>
               <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                 <Image src="/joueurs-info-service.png" alt="Joueurs Info Service" width={120} height={30} className="h-8 w-auto" />
               </a>
               <div className="bg-primary text-background font-bold rounded-full w-10 h-10 flex items-center justify-center text-xs shadow-neon">
                 18+
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center space-y-4">
          <div className="max-w-4xl mx-auto space-y-2 mb-4">
            <p className="text-gray-400 text-[11px] leading-relaxed">
              <span className="font-bold text-gray-300">Divulgation d'affiliation :</span> Nous pouvons percevoir une commission lorsque les utilisateurs s'inscrivent via des liens sur notre site web.
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              <span className="font-bold text-gray-300">Sélection des meilleures plateformes :</span> Nous référençons uniquement les opérateurs tiers agréés offrant les meilleures conditions de jeu. Aucun service n'est fourni directement par ChoixRoyal.
            </p>
          </div>
          <p className="text-gray-500 text-xs">
            © {currentYear} ChoixRoyal. Tous droits réservés. Les paris sportifs sont interdits aux mineurs.
          </p>
          <div className="bg-panel/50 p-4 rounded-lg border border-border/50 text-[10px] text-gray-400 max-w-4xl mx-auto leading-relaxed">
            🔞 ATTENTION : Toute personne souhaitant faire l'objet d'une interdiction de jeux doit le faire elle-même auprès du ministère de l'intérieur. 
            Cette interdiction est valable dans les établissements de jeux agréés, dans les clubs de jeux, sur les plateformes de jeux en ligne exploitées par les opérateurs agréés en France.
          </div>
        </div>
      </div>
    </footer>
  );
}
