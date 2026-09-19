import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import { WorkHeroSection } from '../../components/ui/quordix-work-hero';

export default function Hero() {
  const { locale, t } = useLanguage();

  const title1 = locale === 'fr' ? 'CONCEVOIR' : 'DESIGN & BUILD';
  const title2 = locale === 'fr' ? 'EN LIGNE' : 'ONLINE';
  const badgeText = 'Apricity Studio';
  const subtitle = locale === 'fr'
    ? 'Je conçois, développe et donne vie aux idées en ligne.\n\nDu design visuel aux sites web et au marketing digital, je crée des projets esthétiques, fonctionnels et prêts pour le monde réel — avec l’IA pour m’accompagner de l’idée à la réalisation.'
    : 'I design, build, and bring ideas online.\n\nFrom visual design and websites to digital marketing, I create work that looks good, works well, and is ready for the real world — with AI helping me move from idea to execution.';

  const actionButtons = (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3.5">
        <a 
          href="#overview" 
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-stone-900 text-white text-sm font-semibold hover:bg-orange-600 transition-all shadow-sm hover:shadow-md active:scale-95 group"
        >
          <span>{locale === 'fr' ? 'Découvrir mes travaux' : 'Explore Work'}</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <Link 
          to="/about" 
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-stone-300/90 bg-white/90 backdrop-blur-sm text-stone-800 text-sm font-semibold hover:border-stone-900 hover:text-stone-950 hover:bg-white transition-all shadow-sm active:scale-95"
        >
          {locale === 'fr' ? 'À propos' : 'About Me'}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="relative pt-12 md:pt-16">
      <WorkHeroSection
        title1={title1}
        title2={title2}
        subtitle={subtitle}
        badgeText={badgeText}
        actions={actionButtons}
        heightClass="90svh"
        backgroundColor="transparent"
        showBackgroundRings={false}
      />
    </div>
  );
}
