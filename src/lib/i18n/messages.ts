export interface LocaleMessages {
  common: {
    all: string;
    copyToClipboard: string;
  };
  navigation: {
    openMainMenu: string;
  };
  theme: {
    system: string;
    light: string;
    dark: string;
    currentTheme: string;
    cycleTheme: string;
  };
  profile: {
    email: string;
    location: string;
    workAddress: string;
    click: string;
    googleMap: string;
    send: string;
    sendEmail: string;
    researchInterests: string;
    like: string;
    liked: string;
    thanks: string;
  };
  home: {
    currentThemes: string;
    heroLabel: string;
    about: string;
    aboutDescription: string;
    news: string;
    newsDescription: string;
    quickLinks: string;
    quickLinksDescription: string;
    researchInterests: string;
    researchInterestsDescription: string;
    selectedPublications: string;
    selectedPublicationsDescription: string;
    viewCv: string;
    viewAll: string;
    viewResearch: string;
  };
  publications: {
    searchPlaceholder: string;
    filters: string;
    year: string;
    type: string;
    noResults: string;
    abstract: string;
    bibtex: string;
    code: string;
  };
  footer: {
    lastUpdated: string;
    builtWithPrism: string;
  };
}

const en: LocaleMessages = {
  common: {
    all: 'All',
    copyToClipboard: 'Copy to clipboard',
  },
  navigation: {
    openMainMenu: 'Open main menu',
  },
  theme: {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    currentTheme: 'Current theme',
    cycleTheme: 'Click to cycle theme',
  },
  profile: {
    email: 'Email',
    location: 'Location',
    workAddress: 'Work Address',
    click: 'Click',
    googleMap: 'Google Map',
    send: 'Send',
    sendEmail: 'Send Email',
    researchInterests: 'Research Interests',
    like: 'Like',
    liked: 'Liked',
    thanks: 'Thanks!',
  },
  home: {
    currentThemes: 'Current themes',
    heroLabel: 'High Energy Physics',
    about: 'About',
    aboutDescription: 'Concise profile and current scientific focus.',
    news: 'News',
    newsDescription: 'Recent papers, talks, and research milestones.',
    quickLinks: 'Quick Links',
    quickLinksDescription: 'Profiles, CV, and direct contact channels.',
    researchInterests: 'Research Interests',
    researchInterestsDescription: 'Core themes that define the current research program.',
    selectedPublications: 'Selected Publications',
    selectedPublicationsDescription: 'Curated papers representative of current research directions.',
    viewCv: 'View CV',
    viewAll: 'View All',
    viewResearch: 'View Research',
  },
  publications: {
    searchPlaceholder: 'Search publications...',
    filters: 'Filters',
    year: 'Year',
    type: 'Type',
    noResults: 'No publications found matching your criteria.',
    abstract: 'Abstract',
    bibtex: 'BibTeX',
    code: 'Code',
  },
  footer: {
    lastUpdated: 'Last updated',
    builtWithPrism: 'Built with PRISM',
  },
};

const zh: LocaleMessages = {
  common: {
    all: '全部',
    copyToClipboard: '复制到剪贴板',
  },
  navigation: {
    openMainMenu: '打开主菜单',
  },
  theme: {
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    currentTheme: '当前主题',
    cycleTheme: '点击切换主题',
  },
  profile: {
    email: '邮箱',
    location: '地址',
    workAddress: '办公地址',
    click: '点击',
    googleMap: '谷歌地图',
    send: '发送',
    sendEmail: '发送邮件',
    researchInterests: '研究兴趣',
    like: '点赞',
    liked: '已点赞',
    thanks: '感谢支持！',
  },
  home: {
    currentThemes: '当前主题',
    heroLabel: '高能物理',
    about: '关于我',
    aboutDescription: '简要介绍学术背景与当前研究方向。',
    news: '动态',
    newsDescription: '近期论文、报告与学术进展更新。',
    quickLinks: '快速链接',
    quickLinksDescription: '学术主页、简历与直接联系方式。',
    researchInterests: '研究兴趣',
    researchInterestsDescription: '概括当前研究计划所围绕的核心主题。',
    selectedPublications: '精选论文',
    selectedPublicationsDescription: '从完整 BibTeX 论文列表中选出的代表性工作。',
    viewCv: '查看简历',
    viewAll: '查看全部',
    viewResearch: '查看研究',
  },
  publications: {
    searchPlaceholder: '搜索论文...',
    filters: '筛选',
    year: '年份',
    type: '类型',
    noResults: '没有找到符合条件的论文。',
    abstract: '摘要',
    bibtex: 'BibTeX',
    code: '代码',
  },
  footer: {
    lastUpdated: '最近更新',
    builtWithPrism: '由 PRISM 构建',
  },
};

export const messages: Record<string, LocaleMessages> = {
  en,
  zh,
};

export function getMessages(locale: string): LocaleMessages {
  return messages[locale] || en;
}
