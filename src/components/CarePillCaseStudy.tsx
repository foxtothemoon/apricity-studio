import React, { useState } from 'react';
import { 
  Heart, 
  CheckCircle2, 
  ArrowUpRight, 
  ExternalLink, 
  Users, 
  ShieldCheck, 
  Palette, 
  Copy,
  Pill,
  Bell,
  Calendar,
  CheckSquare,
  BarChart3,
  QrCode,
  UserCheck,
  Share2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function CarePillCaseStudy() {
  const { locale } = useLanguage();
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  // Color Tokens with Clean Minimal Labels
  const colorTokens = [
    {
      name: locale === 'fr' ? 'Espace Personnel' : 'My Care Space',
      hex: '#C4F5E1',
      ink: '#125943',
      role: locale === 'fr' ? 'Menthe apaisante pour le suivi quotidien' : 'Calm mint for personal doses',
      tag: 'Primary'
    },
    {
      name: locale === 'fr' ? 'Espace Proche' : 'Caregiver Circle',
      hex: '#E8DDFE',
      ink: '#61458C',
      role: locale === 'fr' ? 'Lilas doux pour la bienveillance partagée' : 'Soft lilac for shared family care',
      tag: 'Role'
    },
    {
      name: locale === 'fr' ? 'Prise à venir' : 'Upcoming Dose',
      hex: '#FFF0AC',
      ink: '#7A5B00',
      role: locale === 'fr' ? 'Jaune doux sans alarme agressive' : 'Warm gentle yellow for pending doses',
      tag: 'Status'
    },
    {
      name: locale === 'fr' ? 'Non enregistré' : 'Unrecorded',
      hex: '#FFBFC7',
      ink: '#8E1C2E',
      role: locale === 'fr' ? 'Corail bienveillant, jamais de rouge punitif' : 'Soft coral nudge, never punitive red',
      tag: 'Empathy'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 mb-20 font-sans text-stone-900 max-w-5xl mx-auto">
      
      {/* 1. HERO: Minimal, Airy & Concise */}
      <section className="text-center space-y-6 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-mono font-bold uppercase tracking-wider">
          <span>{locale === 'fr' ? 'Étude de Cas UX/UI' : 'UX/UI Case Study'}</span>
          <span>•</span>
          <span>40+ Screens</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading text-stone-900 tracking-tight max-w-3xl mx-auto leading-tight">
          CarePill: Small moments. A kinder way to care.
        </h1>

        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {locale === 'fr'
            ? 'Une application médicale apaisante qui élimine l’anxiété des alertes rouges, conçue pour l’autonomie des aînés et le suivi bienveillant des proches aidants.'
            : 'A gentle medication routine app designed to replace clinical anxiety with calm, accessible daily routines and consent-based family care.'}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://carepillmedicationreminder.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs inline-flex items-center gap-2"
          >
            <span>{locale === 'fr' ? 'Tester la Démo' : 'Launch Live Web App'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://www.figma.com/design/ASCy7gbGRwFXKBverOxev7/CarePill-%E2%80%94-Design-System---Portfolio?node-id=4-3&t=R0SNPguKBWnRGXJl-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-bold uppercase tracking-wider transition-all shadow-2xs inline-flex items-center gap-2"
          >
            <span>Inspect in Figma</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </a>
        </div>

        {/* Minimal Meta Row */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-stone-500">
          <span>Role: Lead UX/UI Designer</span>
          <span className="text-stone-300">•</span>
          <span>Scope: Mobile App & Design System</span>
          <span className="text-stone-300">•</span>
          <span>Timeline: 3 Weeks</span>
        </div>
      </section>



      {/* 3. CORE PROBLEM & SOLUTION: 3 Short Bite-Sized Cards */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
            01 · Problem & Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-stone-900">
            {locale === 'fr' ? 'Conçu pour la dignité humaine' : 'Designed for Dignity & Peace of Mind'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center font-bold text-xs border border-rose-200/60">
              01
            </div>
            <h3 className="text-base font-bold text-stone-900 font-heading">
              {locale === 'fr' ? 'Zéro culpabilité' : 'No Red Alert Guilt'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {locale === 'fr'
                ? 'Une dose non cochée n’est pas un oubli. Le corail doux remplace le rouge hospitalier anxiogène.'
                : 'An unrecorded dose is not proof of a missed dose. Soft coral nudges replace stressful red sirens.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs border border-purple-200/60">
              02
            </div>
            <h3 className="text-base font-bold text-stone-900 font-heading">
              {locale === 'fr' ? 'Double espace consenti' : 'Mutual Consent Bridge'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {locale === 'fr'
                ? 'Les proches veillent avec bienveillance sans jamais infantiliser ni surveiller à l’insu du patient.'
                : 'Family and caregivers stay reassured from afar through secure QR pairing, without patronizing or hovering.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200/60">
              03
            </div>
            <h3 className="text-base font-bold text-stone-900 font-heading">
              {locale === 'fr' ? 'Accessibilité aînés' : 'Elder-Friendly Design'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {locale === 'fr'
                ? 'Boutons tactiles généreux de 48px et typographie agrandissable directement dans l’app.'
                : 'Generous 48px touch targets, high contrast, and seamless in-app text scaling without clipping.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE DUAL CARE MODEL: 2 Clean Minimal Cards */}
      <section className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/80 shadow-xs space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
            02 · Dual Care Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-stone-900">
            {locale === 'fr' ? 'Deux rôles, zéro confusion' : 'Two Roles. Clear Boundaries.'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            {locale === 'fr'
              ? 'L’application sépare nettement l’espace personnel du cercle de soutien.'
              : 'Separating personal routines from shared care preserves autonomy and clarity.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Card 1: Myself */}
          <div className="p-6 rounded-2xl bg-[#E8FBF4]/70 border border-[#A7F3D0] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white border border-emerald-200 text-xs font-bold text-emerald-800">
                🟢 {locale === 'fr' ? 'Pour Moi-même' : 'For Myself'}
              </span>
              <span className="text-xs font-mono text-emerald-700 font-medium">Mint #C4F5E1</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-stone-900 font-heading">
                {locale === 'fr' ? 'Espace Personnel Autonome' : 'Autonomous Patient Routine'}
              </h3>
              <p className="text-xs text-stone-600">
                {locale === 'fr'
                  ? 'Gestion quotidienne simple et valorisante.'
                  : 'Effortless logging and calm daily reminders.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>1-Tap quick logging</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Gentle encouragement, no guilt streaks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Private personal health notes</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Caregiver */}
          <div className="p-6 rounded-2xl bg-[#F5F0FF]/70 border border-[#DDD6FE] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white border border-purple-200 text-xs font-bold text-purple-800">
                🟣 {locale === 'fr' ? 'Pour un Proche' : 'For Someone I Love'}
              </span>
              <span className="text-xs font-mono text-purple-700 font-medium">Lilac #E8DDFE</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-stone-900 font-heading">
                {locale === 'fr' ? 'Cercle de Soins Connecté' : 'Connected Caregiver Circle'}
              </h3>
              <p className="text-xs text-stone-600">
                {locale === 'fr'
                  ? 'Tranquillité d’esprit pour la famille ou le médecin.'
                  : 'Peace of mind without intrusive surveillance.'}
              </p>
            </div>

            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Silent status overview from afar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Kind check-in prompts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Aligned family, doctor, and nurse access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Consent bridge badge */}
        <div className="max-w-xl mx-auto p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-center flex items-center justify-center gap-2 text-xs text-amber-900 font-medium">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{locale === 'fr' ? 'Appairage sécurisé par QR Code révocable à tout moment' : 'Paired via reciprocal QR code, fully revocable by the patient at any time'}</span>
        </div>
      </section>

      {/* 5. COLOR PALETTE: Clean Minimal Swatches */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 block">
              03 · Functional Color Tokens
            </span>
            <h2 className="text-xl sm:text-2xl font-heading text-stone-900">
              {locale === 'fr' ? 'Chaque couleur a un rôle précis' : 'Color with a Purpose'}
            </h2>
          </div>
          {copiedColor && (
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Copied {copiedColor}!
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {colorTokens.map((token, idx) => (
            <button
              key={idx}
              onClick={() => handleCopyHex(token.hex)}
              className="p-3 bg-white border border-stone-200/80 rounded-2xl text-left hover:border-stone-400 transition-all cursor-pointer group shadow-2xs"
            >
              <div
                className="w-full h-14 rounded-xl mb-2.5 flex items-end justify-end p-1.5"
                style={{ backgroundColor: token.hex }}
              >
                <span 
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: token.ink, color: token.hex }}
                >
                  {token.hex}
                </span>
              </div>
              <strong className="text-xs font-bold text-stone-900 block group-hover:text-orange-600 transition-colors">
                {token.name}
              </strong>
              <p className="text-[11px] text-stone-500 leading-tight mt-0.5">
                {token.role}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* 6. USER JOURNEY: Simple Flow Cards with Arrows & Larger Legible Typography */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 block">
            04 · User Journey Flow
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading text-stone-900">
            {locale === 'fr' ? 'Parcours Utilisateur' : 'The User Journey'}
          </h2>
          <p className="text-base sm:text-lg text-stone-600">
            {locale === 'fr'
              ? 'Un parcours fluide et intuitif de la routine personnelle au cercle de soins.'
              : 'A clear, intuitive progression from daily personal care to connected family reassurance.'}
          </p>
        </div>

        <div className="space-y-6">
          {/* Flow 01: My Own Care */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#E8FBF4]/70 border border-[#A7F3D0] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-emerald-200/70">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500"></span>
                <span className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                  {locale === 'fr' ? '01 / Ma propre santé (Patient)' : '01 / My own care (Patient Routine)'}
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-800 font-bold px-3 py-1 rounded-full bg-white border border-emerald-200 shadow-2xs">
                Mint Space
              </span>
            </div>

            {/* 5 Cards with Directional Flow Arrows */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 lg:gap-3">
              {[
                {
                  step: '01',
                  title: locale === 'fr' ? 'Configuration' : 'Set up',
                  desc: locale === 'fr' ? 'Ajout du traitement & des horaires' : 'Add medication and schedule',
                  icon: Pill
                },
                {
                  step: '02',
                  title: locale === 'fr' ? 'Planifier' : 'Plan today',
                  desc: locale === 'fr' ? 'Aperçu clair des prises du jour' : 'See upcoming doses at a glance',
                  icon: Calendar
                },
                {
                  step: '03',
                  title: locale === 'fr' ? 'Rappel doux' : 'Get reminded',
                  desc: locale === 'fr' ? 'Notification bienveillante et calme' : 'Calm nudge, no stressful alarms',
                  icon: Bell
                },
                {
                  step: '04',
                  title: locale === 'fr' ? 'Enregistrer' : 'Record',
                  desc: locale === 'fr' ? 'Validation de la prise en 1 clic' : 'Mark dose as taken with 1 tap',
                  icon: CheckSquare
                },
                {
                  step: '05',
                  title: locale === 'fr' ? 'Historique' : 'Reflect',
                  desc: locale === 'fr' ? 'Bilan et suivi en toute clarté' : 'Review adherence history calmly',
                  icon: BarChart3
                }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 p-5 sm:p-6 bg-white rounded-2xl border border-emerald-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                        <item.icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded">
                        Step {item.step}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center text-emerald-500 shrink-0 py-1.5 lg:py-0">
                      <ArrowRight className="w-6 h-6 hidden lg:block stroke-[2.5]" />
                      <ArrowRight className="w-5 h-5 rotate-90 lg:hidden stroke-[2.5]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Connection Bridge Card: Consent-based Linking */}
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-amber-200 flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center sm:text-left shadow-2xs">
            <div className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <strong className="text-base sm:text-lg font-bold text-stone-900 block font-heading">
                {locale === 'fr' ? 'La connexion commence toujours par le consentement' : 'Connection starts with consent'}
              </strong>
              <p className="text-sm sm:text-base text-stone-700 mt-0.5">
                {locale === 'fr'
                  ? 'Connexion sécurisée via QR Code ou Care ID. Le patient reste maître et approuve chaque accès.'
                  : 'Connect via QR code or Care ID. The patient maintains full agency and approves every access.'}
              </p>
            </div>
          </div>

          {/* Flow 02: Care for Someone */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F5F0FF]/70 border border-[#DDD6FE] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-200/70">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-purple-500"></span>
                <span className="text-lg sm:text-xl font-bold text-stone-900 font-heading">
                  {locale === 'fr' ? '02 / Prendre soin d’un proche (Cercle d’aidants)' : '02 / Care for someone (Caregiver Circle)'}
                </span>
              </div>
              <span className="text-xs font-mono text-purple-800 font-bold px-3 py-1 rounded-full bg-white border border-purple-200 shadow-2xs">
                Lilac Space
              </span>
            </div>

            {/* 5 Cards with Directional Flow Arrows */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2.5 lg:gap-3">
              {[
                {
                  step: '01',
                  title: locale === 'fr' ? 'Connexion' : 'Connect',
                  desc: locale === 'fr' ? 'Scanner le QR ou entrer Care ID' : 'Scan QR code or enter Care ID',
                  icon: QrCode
                },
                {
                  step: '02',
                  title: locale === 'fr' ? 'Accord requis' : 'Wait consent',
                  desc: locale === 'fr' ? 'Le proche valide et confirme l’accès' : 'Recipient reviews and approves access',
                  icon: UserCheck
                },
                {
                  step: '03',
                  title: locale === 'fr' ? 'Suivi du jour' : 'View Today',
                  desc: locale === 'fr' ? 'Vue sereine sans surveillance intrusive' : 'Quiet adherence overview from afar',
                  icon: Users
                },
                {
                  step: '04',
                  title: locale === 'fr' ? 'Prendre soin' : 'Check in',
                  desc: locale === 'fr' ? 'Prendre des nouvelles avec bienveillance' : 'Follow up with kindness and care',
                  icon: Heart
                },
                {
                  step: '05',
                  title: locale === 'fr' ? 'Gérer le Cercle' : 'Manage Circle',
                  desc: locale === 'fr' ? 'Contrôler les permissions partagées' : 'Coordinate family and doctor roles',
                  icon: Share2
                }
              ].map((item, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="flex-1 p-5 sm:p-6 bg-white rounded-2xl border border-purple-200/90 shadow-2xs hover:shadow-md transition-shadow space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
                        <item.icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-700 bg-purple-50/80 px-2 py-0.5 rounded">
                        Step {item.step}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-600 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {idx < arr.length - 1 && (
                    <div className="flex items-center justify-center text-purple-500 shrink-0 py-1.5 lg:py-0">
                      <ArrowRight className="w-6 h-6 hidden lg:block stroke-[2.5]" />
                      <ArrowRight className="w-5 h-5 rotate-90 lg:hidden stroke-[2.5]" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FIGMA PROTOTYPE: Clean presentation, NO black box, short punchy explanation */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
              05 · Prototype Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-stone-900">
              40+ Screen Interactive Prototype
            </h2>
          </div>

          <a
            href="https://www.figma.com/design/ASCy7gbGRwFXKBverOxev7/CarePill-%E2%80%94-Design-System---Portfolio?node-id=4-3&t=R0SNPguKBWnRGXJl-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-stone-900 text-white text-xs font-semibold hover:bg-black transition-colors inline-flex items-center gap-1.5 shadow-2xs self-start sm:self-auto"
          >
            <span>Open in Figma</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>

        {/* Clean Light Container - NO heavy black background */}
        <div className="bg-white p-3 sm:p-5 rounded-3xl border border-stone-200/80 shadow-xs flex flex-col items-center">
          <img
            src="/assets/aistudio/Screenshot_2026-10-28_114929_f77479ee.png"
            alt="CarePill 40+ Screen Figma Prototype Graph"
            className="w-full h-auto max-h-[520px] object-contain rounded-xl"
            loading="lazy"
          />
        </div>
        <p className="text-center text-xs text-stone-500 font-sans">
          {locale === 'fr'
            ? 'Architecture interactive complète sous Figma reliant l’onboarding, le basculement des rôles, la gestion des exceptions et le réglage typographique.'
            : 'Figma interaction architecture linking dual-role onboarding, permission confirmation sheets, edge cases, and in-app typography scaling.'}
        </p>
      </section>

      {/* 8. DESIGNER TAKEAWAY: 1 Single Short Quote */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#FFFDF9] border border-stone-200/80 text-center space-y-3">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
          Key Takeaway
        </span>
        <blockquote className="text-lg sm:text-xl font-heading text-stone-900 max-w-2xl mx-auto italic">
          "When you design for older adults and high-stress moments, you end up designing a fundamentally better, kinder product for everyone."
        </blockquote>
        <p className="text-xs text-stone-500 font-sans">
          Siwat ('Fox') · Lead UX/UI Designer
        </p>
      </section>

    </div>
  );
}
