import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0420] border-t border-border pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Image 
              src="/montelleFr_Icon.png" 
              alt="MonteleFR" 
              width={280} 
              height={80} 
              className="h-20 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre repère incontournable pour explorer les meilleures plateformes de jeux en ligne disponibles en France. 
              Nous passons au crible les opérateurs agréés afin de vous orienter vers une expérience fiable et éclairée.
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
              Le jeu doit demeurer un loisir. Adoptez une pratique responsable. 
              En cas de difficulté, faites appel à :
            </p>
            <div className="flex flex-wrap gap-4 items-center">
               <a href="https://anj.fr" target="_blank" rel="noopener noreferrer" className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:[filter:drop-shadow(0_0_6px_rgba(147,51,234,0.5))] transition-all">
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
              <span className="font-bold text-gray-300">Transparence sur l'affiliation :</span> Une commission peut nous être versée lorsqu'un utilisateur s'inscrit via l'un de nos liens partenaires.
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              <span className="font-bold text-gray-300">Sélection rigoureuse :</span> Nous ne mettons en avant que des opérateurs tiers agréés proposant les conditions les plus avantageuses. MonteleFR ne fournit aucun service de jeu directement.
            </p>
          </div>
          <p className="text-gray-500 text-xs">
            © {currentYear} MonteleFR. Tous droits réservés. Les jeux en ligne sont interdits aux mineurs.
          </p>
          <div className="bg-panel/50 p-4 rounded-lg border border-border/50 text-[10px] text-gray-400 max-w-4xl mx-auto leading-relaxed">
            🔞 AVERTISSEMENT : Toute personne désirant s'auto-exclure des jeux doit en faire la demande directement auprès du ministère de l'intérieur. 
            Cette mesure s'applique aux établissements agréés, aux clubs de jeux et aux plateformes en ligne opérant sous licence française.
          </div>
        </div>
      </div>
    </footer>
  );
}
