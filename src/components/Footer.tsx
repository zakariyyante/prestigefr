import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0906] border-t border-[rgba(180,130,40,0.2)] pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand Info */}
          <div className="space-y-4">
            <Image 
              src="/montecarloFR_icon_transparent.png" 
              alt="MonteCarloFR" 
              width={280} 
              height={80} 
              className="h-20 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              La référence française pour évaluer et distinguer les opérateurs de jeux en ligne les plus performants. 
              Nos expertises indépendantes vous orientent exclusivement vers des plateformes fiables, sécurisées et conformes à la réglementation en vigueur.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">Qui Sommes-Nous</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Nous Écrire</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">Confidentialité</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Responsibility text only */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Pratique Responsable</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Préservez le jeu comme source de plaisir. Définissez vos propres limites et tenez-vous-y. 
              Si vous avez besoin d'aide, les organismes ci-dessous sont à votre disposition.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-primary text-background font-bold rounded-full w-9 h-9 flex items-center justify-center text-xs shadow-neon flex-shrink-0">
                18+
              </div>
              <span className="text-[10px] text-gray-500">Accès strictement réservé aux personnes majeures</span>
            </div>
          </div>
        </div>

        {/* ── Regulation & Support logos strip (matching screenshot style) ── */}
        <div className="border-t border-[rgba(180,130,40,0.15)] pt-8 pb-6">
          <p className="text-sm font-bold text-white mb-6">
            Organismes de régulation et de soutien
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-14">
            <a href="https://anj.fr" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
              <Image src="/anj_2.png" alt="ANJ" width={80} height={36} className="h-9 w-auto" unoptimized />
            </a>
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
              <Image src="/gambleaware.png" alt="GambleAware" width={130} height={36} className="h-9 w-auto" unoptimized />
            </a>
            <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 transition-opacity">
              <Image src="/joueurs-info-service.png" alt="Joueurs Info Service" width={140} height={36} className="h-9 w-auto" unoptimized />
            </a>
          </div>
        </div>

        {/* Disclaimers & copyright */}
        <div className="border-t border-border pt-8 text-center space-y-4">
          <div className="max-w-4xl mx-auto space-y-2 mb-4">
            <p className="text-gray-400 text-[11px] leading-relaxed">
              <span className="font-bold text-gray-300">Partenariat commercial :</span> Une commission peut nous être attribuée lorsqu'un utilisateur rejoint une plateforme via nos liens de référencement.
            </p>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              <span className="font-bold text-gray-300">Neutralité garantie :</span> Seuls les opérateurs tiers homologués offrant les meilleures garanties figurent dans notre classement. MonteCarloFR n'exploite aucune plateforme et ne dispense aucun service de jeu directement.
            </p>
          </div>
          <p className="text-gray-500 text-xs">
            © {currentYear} MonteCarloFR. Tous droits réservés. L'accès aux jeux en ligne est strictement réservé aux personnes majeures.
          </p>
          <div className="bg-panel/50 p-4 rounded-lg border border-border/50 text-[10px] text-gray-400 max-w-4xl mx-auto leading-relaxed">
            🔞 NOTICE OBLIGATOIRE : Toute personne désireuse de s'auto-exclure des jeux d'argent doit formuler sa demande directement auprès du ministère de l'intérieur. 
            Cette interdiction s'applique à l'ensemble des établissements agréés, des clubs de jeux et des plateformes numériques autorisées en France.
          </div>
        </div>

      </div>
    </footer>
  );
}
