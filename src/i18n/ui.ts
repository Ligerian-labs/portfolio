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
      hire: 'Hire Me',
    },
    switcher: { aria: 'Language', en: 'EN', fr: 'FR' },
    home: {
      avatarAlt: 'Portrait of Valentin Dosimont',
      heroHeadline: 'CTO, founder, and agentic software builder.',
      heroSubtitle:
        'Chief Technology Officer at Pupuce CORP. Founder at Ligerian Labs.\nTypeScript · Rust · Go · TDD · AI agents',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      statRepos: 'Repos',
      statSectors: 'Sectors',
      statYears: 'Yrs Experience',
      sectionFeatured: 'Featured Work',
      sectionExperience: 'Experience',
      sectionStack: 'Stack',
      breadcrumb: { home: 'Home' },
      seoDescription:
        'Valentin Dosimont is a CTO, Ligerian Labs founder, and agentic software builder working across TypeScript, Rust, Go, TDD, AI automation, and technology management.',
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
        'If you need senior engineering leadership, agentic coding workflows, AI automation,\nor pragmatic TypeScript/Rust/Go delivery — send context. I prefer concrete briefs over generic outreach.',
      introTitle: 'Bring a\nhard problem.',
      introText:
        "I work best when the problem is real, the stakes are high, and the team ships fast. Whether it's technical leadership, AI agent systems, production architecture, or an open-source collaboration — I'm listening.",
      checklistTitle: 'What to include',
      checklistRole: 'Role scope & expectations',
      checklistTeam: 'Team size & stage',
      checklistStack: 'Technical stack & constraints',
      checklistTimeline: 'Timeline & urgency',
      emailPrefix: 'Or email directly:',
      formTitle: 'Send a message',
      seoTitle: 'Contact | Valentin Dosimont',
      seoDescription:
        'Get in touch with Valentin Dosimont for technical leadership, AI automation, agentic coding workflows, consulting, or collaboration.',
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
      title: 'Valentin Dosimont | CTO, Founder, Agentic Software Builder',
      description:
        'Portfolio of Valentin Dosimont — Chief Technology Officer at Pupuce CORP, founder at Ligerian Labs, and builder across TypeScript, Rust, Go, TDD, AI agents, and technology management.',
    },
  },
  fr: {
    html: { lang: 'fr', ogLocale: 'fr_FR' },
    nav: {
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
      hire: 'Travaillons ensemble',
    },
    switcher: { aria: 'Langue', en: 'EN', fr: 'FR' },
    home: {
      avatarAlt: 'Portrait de Valentin Dosimont',
      heroHeadline: 'CTO, fondateur et builder logiciel agentique.',
      heroSubtitle:
        'Chief Technology Officer chez Pupuce CORP. Fondateur de Ligerian Labs.\nTypeScript · Rust · Go · TDD · agents IA',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
      statRepos: 'Dépôts',
      statSectors: 'Secteurs',
      statYears: "Ans d'expérience",
      sectionFeatured: 'Travaux phares',
      sectionExperience: 'Expérience',
      sectionStack: 'Stack',
      breadcrumb: { home: 'Accueil' },
      seoDescription:
        "Valentin Dosimont est CTO, fondateur de Ligerian Labs et builder logiciel agentique, avec un focus TypeScript, Rust, Go, TDD, automatisation IA et technology management.",
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
        "Si vous avez besoin de leadership ingénierie senior, de workflows de code agentique, d'automatisation IA,\nou de livraison pragmatique TypeScript/Rust/Go — envoyez du contexte. Je préfère les briefs concrets aux prises de contact génériques.",
      introTitle: 'Apportez un\nproblème difficile.',
      introText:
        "Ce qui m'anime le plus sont les problèmes réels avec des enjeux élevés et une équipe qui livre. Leadership technique, agents IA, architecture de production ou collaboration open source — je suis à l'écoute.",
      checklistTitle: 'À inclure',
      checklistRole: 'Périmètre du rôle et attentes',
      checklistTeam: "Taille de l'équipe",
      checklistStack: 'Stack technique et contraintes',
      checklistTimeline: 'Calendrier et urgence',
      emailPrefix: 'Ou écrivez directement :',
      formTitle: 'Envoyer un message',
      seoTitle: 'Contact | Valentin Dosimont',
      seoDescription:
        "Contactez Valentin Dosimont pour du leadership technique, de l'automatisation IA, des workflows de code agentique, du conseil ou une collaboration.",
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
      title: 'Valentin Dosimont | CTO, Fondateur, Builder Logiciel Agentique',
      description:
        "Portfolio de Valentin Dosimont — Chief Technology Officer chez Pupuce CORP, fondateur de Ligerian Labs, builder TypeScript, Rust, Go, TDD, agents IA et technology management.",
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
