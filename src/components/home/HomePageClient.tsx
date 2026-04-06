'use client';

import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import QuickLinks from '@/components/home/QuickLinks';
import ResearchInterests from '@/components/home/ResearchInterests';
import SelectedPublications from '@/components/home/SelectedPublications';
import News, { NewsItem } from '@/components/home/News';
import PublicationsList from '@/components/publications/PublicationsList';
import TextPage from '@/components/pages/TextPage';
import CardPage from '@/components/pages/CardPage';
import type { SiteConfig } from '@/lib/config';
import { Publication } from '@/types/publication';
import { CardPageConfig, PublicationPageConfig, TextPageConfig } from '@/types/page';
import { useLocaleStore } from '@/lib/stores/localeStore';

interface SectionConfig {
  id: string;
  type: 'markdown' | 'publications' | 'list';
  title?: string;
  source?: string;
  filter?: string;
  limit?: number;
  content?: string;
  publications?: Publication[];
  items?: NewsItem[];
}

type PageData =
  | { type: 'about'; id: string; sections: SectionConfig[] }
  | { type: 'publication'; id: string; config: PublicationPageConfig; publications: Publication[] }
  | { type: 'text'; id: string; config: TextPageConfig; content: string }
  | { type: 'card'; id: string; config: CardPageConfig };

export interface HomePageLocaleData {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
  features: SiteConfig['features'];
  enableOnePageMode?: boolean;
  researchInterests?: string[];
  pagesToShow: PageData[];
}

interface HomePageClientProps {
  dataByLocale: Record<string, HomePageLocaleData>;
  defaultLocale: string;
}

export default function HomePageClient({ dataByLocale, defaultLocale }: HomePageClientProps) {
  const locale = useLocaleStore((state) => state.locale);
  const fallback = dataByLocale[defaultLocale] || Object.values(dataByLocale)[0];
  const data = dataByLocale[locale] || fallback;

  if (!data) {
    return null;
  }

  const homePage = data.pagesToShow.find(
    (page) => page.type === 'about' && (page.id === 'home' || page.id === 'about')
  );
  const extraPages = data.enableOnePageMode
    ? data.pagesToShow.filter((page) => page !== homePage)
    : [];

  const homeSections = homePage?.type === 'about' ? homePage.sections : [];
  const aboutSection = homeSections.find((section) => section.type === 'markdown');
  const publicationsSection = homeSections.find((section) => section.type === 'publications');
  const newsSection = homeSections.find((section) => section.type === 'list');

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Hero
          author={data.author}
          social={data.social}
          researchInterests={data.researchInterests}
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(19rem,1fr)]">
          <div className="space-y-8">
            {aboutSection?.type === 'markdown' && (
              <About
                content={aboutSection.content || ''}
                title={aboutSection.title}
              />
            )}

            {publicationsSection?.type === 'publications' && (
              <SelectedPublications
                publications={publicationsSection.publications || []}
                title={publicationsSection.title}
                enableOnePageMode={data.enableOnePageMode}
              />
            )}
          </div>

          <div className="space-y-8">
            <ResearchInterests interests={data.researchInterests || []} />
            {newsSection?.type === 'list' && (
              <News
                items={newsSection.items || []}
                title={newsSection.title}
              />
            )}
            <QuickLinks social={data.social} />
          </div>
        </div>

        {extraPages.length > 0 && (
          <div className="space-y-10 pt-4">
            {extraPages.map((page) => (
            <section key={page.id} id={page.id} className="scroll-mt-24 space-y-8">
              {page.type === 'about' && page.sections.map((section: SectionConfig) => {
                switch (section.type) {
                  case 'markdown':
                    return (
                      <About
                        key={section.id}
                        content={section.content || ''}
                        title={section.title}
                      />
                    );
                  case 'publications':
                    return (
                      <SelectedPublications
                        key={section.id}
                        publications={section.publications || []}
                        title={section.title}
                        enableOnePageMode={data.enableOnePageMode}
                      />
                    );
                  case 'list':
                    return (
                      <News
                        key={section.id}
                        items={section.items || []}
                        title={section.title}
                      />
                    );
                  default:
                    return null;
                }
              })}
              {page.type === 'publication' && (
                <PublicationsList
                  config={page.config}
                  publications={page.publications}
                  embedded={true}
                />
              )}
              {page.type === 'text' && (
                <TextPage
                  config={page.config}
                  content={page.content}
                  embedded={true}
                />
              )}
              {page.type === 'card' && (
                <CardPage
                  config={page.config}
                  embedded={true}
                />
              )}
            </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
