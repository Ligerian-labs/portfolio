export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    html: { lang: 'en', ogLocale: 'en_US' },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      hire: 'Book a call',
    },
    switcher: { aria: 'Language', en: 'EN', fr: 'FR' },
    home: {
      photoAlt: 'Portrait of Valentin Dosimont',
      kicker: 'Fractional CTO · Forward Deployed Engineer',
      location: 'Angers, France · CET · Remote-first',
      availableNow: 'Available now',
      bookCall: 'Book a call →',
      downloadResume: 'Download PDF ↓',
      pitchHeadline: 'Bring me the ambiguous, business-critical build nobody else wants to own.',
      pitchText:
        'I lead discovery, architecture, and delivery end-to-end — then hand back a system your team can actually run. Domain-driven, event-driven, boringly reliable. Twelve years across gaming, AI, and blockchain.',
      stat1Num: '12+',
      stat1Label: 'Yrs in production',
      stat2Num: '60+',
      stat2Label: 'Open-source repos',
      stat3Num: '03',
      stat3Label: 'Gaming · AI · chain',
      stat4Num: 'E2E',
      stat4Label: 'Discovery → deploy',
      sectionHow: 'How I work',
      how1Title: 'Discovery → spec',
      how1Text:
        'Fuzzy business goals become a plan your team believes in — stakeholder translation, domain modeling, honest scoping.',
      how2Title: 'Architecture that ages',
      how2Text:
        'DDD, event-driven, CQRS, microservices. Systems that survive contact with production and change.',
      how3Title: 'Ship, then hand off',
      how3Text:
        'End-to-end delivery — code, CI/CD, infra, reviews — plus the practices so your team keeps shipping without me.',
      sectionOss: 'Selected open source',
      ossNote:
        'Plus dojo.js, torii-core & arcade — open-source onchain gaming infrastructure shipped at Cartridge.gg.',
      sectionExperience: 'Experience',
      sectionStack: 'Stack',
      ctaTitle: 'Have a build no one\nwants to own?',
      ctaMeta: 'Architecture on AWS · Cloud University 2020 — FR native · EN full professional',
      breadcrumb: { home: 'Home' },
      seoDescription:
        'Valentin Dosimont — Fractional CTO & Forward Deployed Engineer. I turn ambiguous problems into production systems. Rust, Zig, Go, Python, TypeScript, Cairo.',
    },
    projects: {
      breadcrumbHome: '~/',
      breadcrumbCurrent: 'projects',
      title: 'Open Source',
      lead:
        'Curated projects across AI systems, developer tooling, and blockchain infrastructure.\nEach one built to solve a real problem.',
      filterAll: 'ALL',
      filterAi: 'AI SYSTEMS',
      filterTooling: 'DEV TOOLING',
      filterBlockchain: 'BLOCKCHAIN',
      sectionAi: 'AI Systems',
      sectionTooling: 'Dev Tooling',
      sectionContributions: 'Contributions',
      githubCta: 'Explore all 60+ repositories',
      githubButton: 'View on GitHub',
      seoTitle: 'Projects | Valentin Dosimont',
      seoDescription:
        'Curated open-source projects across AI systems, developer tooling, and blockchain infrastructure by Valentin Dosimont.',
      breadcrumbName: 'Projects',
    },
    contact: {
      breadcrumbHome: '~',
      breadcrumbCurrent: 'contact',
      title: 'Get in Touch',
      lead:
        'If you are hiring for gaming infrastructure, AI-native systems, blockchain tooling,\nor senior engineering leadership — send context. I prefer concrete briefs over generic outreach.',
      introTitle: 'Bring a\nhard problem.',
      introText:
        "I work best when the problem is real, the stakes are high, and the team ships fast. Whether it's a founding engineer role, a systems architecture challenge, or an open-source collaboration — I'm listening.",
      checklistTitle: 'What to include',
      checklistRole: 'Role scope & expectations',
      checklistTeam: 'Team size & stage',
      checklistStack: 'Technical stack & constraints',
      checklistTimeline: 'Timeline & urgency',
      emailPrefix: 'Or email directly:',
      formTitle: 'Send a message',
      seoTitle: 'Contact | Valentin Dosimont',
      seoDescription:
        'Get in touch with Valentin Dosimont for engineering roles, consulting, or collaboration across gaming, AI, and blockchain.',
      breadcrumbName: 'Contact',
    },
    form: {
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'you@company.com',
      companyLabel: 'Company',
      companyPlaceholder: 'Company name',
      websiteLabel: 'Website',
      websitePlaceholder: 'https://...',
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell me about the role, the problem, and the team...',
      submit: 'Send Message',
      poweredBy: 'Powered by Resend',
      statusSending: 'Sending...',
      statusOk: 'Message sent. I will get back to you soon.',
      statusErrorFallback: 'Unable to send your message right now.',
    },
    footer: { github: 'GitHub' },
    card: { viewRepo: 'View repo →' },
    site: {
      title: 'Valentin Dosimont · Fractional CTO',
      description:
        'Valentin Dosimont — Fractional CTO & Forward Deployed Engineer. I turn ambiguous problems into production systems. Rust, Zig, Go, Python, TypeScript, Cairo.',
    },
  },
  fr: {
    html: { lang: 'fr', ogLocale: 'fr_FR' },
    nav: {
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
      hire: 'Réserver un appel',
    },
    switcher: { aria: 'Langue', en: 'EN', fr: 'FR' },
    home: {
      photoAlt: 'Portrait de Valentin Dosimont',
      kicker: 'CTO à temps partagé · Forward Deployed Engineer',
      location: 'Angers, France · CET · Full remote',
      availableNow: 'Disponible',
      bookCall: 'Réserver un appel →',
      downloadResume: 'Télécharger le PDF ↓',
      pitchHeadline: "Confiez-moi le chantier ambigu et critique dont personne d'autre ne veut.",
      pitchText:
        "Je mène discovery, architecture et livraison de bout en bout — puis je vous rends un système que votre équipe peut réellement faire tourner. Domain-driven, event-driven, fiable jusqu'à l'ennui. Douze ans entre gaming, IA et blockchain.",
      stat1Num: '12+',
      stat1Label: 'Ans en production',
      stat2Num: '60+',
      stat2Label: 'Dépôts open source',
      stat3Num: '03',
      stat3Label: 'Gaming · IA · chain',
      stat4Num: 'E2E',
      stat4Label: 'Discovery → déploiement',
      sectionHow: 'Ma façon de travailler',
      how1Title: 'Discovery → spec',
      how1Text:
        "Des objectifs métier flous deviennent un plan auquel votre équipe croit — traduction des enjeux, modélisation du domaine, cadrage honnête.",
      how2Title: 'Une architecture qui vieillit bien',
      how2Text:
        'DDD, event-driven, CQRS, microservices. Des systèmes qui survivent au contact de la production et du changement.',
      how3Title: 'Livrer, puis transmettre',
      how3Text:
        'Livraison de bout en bout — code, CI/CD, infra, revues — plus les pratiques pour que votre équipe continue de livrer sans moi.',
      sectionOss: 'Sélection open source',
      ossNote:
        'Sans oublier dojo.js, torii-core & arcade — infrastructure open source de gaming onchain livrée chez Cartridge.gg.',
      sectionExperience: 'Expérience',
      sectionStack: 'Stack',
      ctaTitle: 'Un chantier dont personne\nne veut ?',
      ctaMeta: 'Architecture on AWS · Cloud University 2020 — FR natif · EN professionnel complet',
      breadcrumb: { home: 'Accueil' },
      seoDescription:
        'Valentin Dosimont — Fractional CTO & Forward Deployed Engineer. Je transforme des problèmes ambigus en systèmes en production. Rust, Zig, Go, Python, TypeScript, Cairo.',
    },
    projects: {
      breadcrumbHome: '~/',
      breadcrumbCurrent: 'projets',
      title: 'Open Source',
      lead:
        "Projets sélectionnés en systèmes IA, outillage développeur et infrastructure blockchain.\nChacun construit pour résoudre un vrai problème.",
      filterAll: 'TOUS',
      filterAi: 'SYSTÈMES IA',
      filterTooling: 'OUTILLAGE DEV',
      filterBlockchain: 'BLOCKCHAIN',
      sectionAi: 'Systèmes IA',
      sectionTooling: 'Outillage Dev',
      sectionContributions: 'Contributions',
      githubCta: 'Explorez les 60+ dépôts',
      githubButton: 'Voir sur GitHub',
      seoTitle: 'Projets | Valentin Dosimont',
      seoDescription:
        "Projets open source sélectionnés en systèmes IA, outillage développeur et infrastructure blockchain par Valentin Dosimont.",
      breadcrumbName: 'Projets',
    },
    contact: {
      breadcrumbHome: '~',
      breadcrumbCurrent: 'contact',
      title: 'Me contacter',
      lead:
        "Si vous recrutez en infrastructure gaming, systèmes IA-natifs, outillage blockchain,\nou leadership ingénierie senior — envoyez du contexte. Je préfère les briefs concrets aux prises de contact génériques.",
      introTitle: 'Apportez un\nproblème difficile.',
      introText:
        "Ce qui m'anime le plus sont les problèmes métier complexes avec des enjeux élevés. Poste d'ingénieur fondateur, défi d'architecture système ou collaboration open source — je suis à l'écoute.",
      checklistTitle: 'À inclure',
      checklistRole: 'Périmètre du rôle et attentes',
      checklistTeam: "Taille de l'équipe",
      checklistStack: 'Stack technique et contraintes',
      checklistTimeline: 'Calendrier et urgence',
      emailPrefix: 'Ou écrivez directement :',
      formTitle: 'Envoyer un message',
      seoTitle: 'Contact | Valentin Dosimont',
      seoDescription:
        "Contactez Valentin Dosimont pour des rôles d'ingénierie, du conseil ou de la collaboration dans le gaming, l'IA et la blockchain.",
      breadcrumbName: 'Contact',
    },
    form: {
      nameLabel: 'Nom *',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email *',
      emailPlaceholder: 'vous@entreprise.com',
      companyLabel: 'Entreprise',
      companyPlaceholder: "Nom de l'entreprise",
      websiteLabel: 'Site web',
      websitePlaceholder: 'https://...',
      messageLabel: 'Message *',
      messagePlaceholder: "Parlez-moi du rôle, du problème et de l'équipe...",
      submit: 'Envoyer',
      poweredBy: 'Propulsé par Resend',
      statusSending: 'Envoi...',
      statusOk: 'Message envoyé. Je reviens vers vous rapidement.',
      statusErrorFallback: "Impossible d'envoyer votre message pour le moment.",
    },
    footer: { github: 'GitHub' },
    card: { viewRepo: 'Voir le dépôt →' },
    site: {
      title: 'Valentin Dosimont · CTO à temps partagé',
      description:
        'Valentin Dosimont — Fractional CTO & Forward Deployed Engineer. Je transforme des problèmes ambigus en systèmes en production. Rust, Zig, Go, Python, TypeScript, Cairo.',
    },
  },
} as const;

export function t(locale: Locale) {
  return ui[locale] ?? ui[defaultLocale];
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === '/') return '/fr/';
  return `/fr${normalized}`;
}

export function stripLocale(pathname: string): { locale: Locale; rest: string } {
  if (pathname === '/fr' || pathname === '/fr/') {
    return { locale: 'fr', rest: '/' };
  }
  if (pathname.startsWith('/fr/')) {
    return { locale: 'fr', rest: pathname.slice(3) };
  }
  return { locale: 'en', rest: pathname };
}
