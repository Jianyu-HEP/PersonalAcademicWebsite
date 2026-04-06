'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { SiteConfig } from '@/lib/config';
import { useMessages } from '@/lib/i18n/useMessages';
import { withBasePath } from '@/lib/utils';

interface HeroProps {
  author: SiteConfig['author'];
  social: SiteConfig['social'];
}

type HeroComponentProps = HeroProps & {
  researchInterests?: string[];
};

export default function Hero({ author, social, researchInterests = [] }: HeroComponentProps) {
  const messages = useMessages();
  const roleLine = `${author.title} · ${author.institution}`;
  const conciseInterests = researchInterests.slice(0, 4).map((interest) => {
    const [title] = interest.split(':');
    return title.trim();
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200/80 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8 dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.75fr)_15rem] lg:items-center">
        <div className="space-y-4">
          <div className="space-y-2.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              {messages.home.heroLabel}
            </p>
            <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-[2.8rem]">
              {author.name}
            </h1>
            <p className="text-sm font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
              {roleLine}
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              {messages.home.heroResearchStatement}
            </p>
            {conciseInterests.length > 0 && (
              <p className="max-w-3xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-neutral-700 dark:text-neutral-300">{messages.home.researchInterests}: </span>
                {conciseInterests.join(' · ')}
              </p>
              <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {messages.home.heroResearchStatement}
              </p>
            </div>
          </div>

          {researchInterests.length > 0 && (
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                {messages.home.currentThemes}
              </p>
              <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-sm text-neutral-700 dark:text-neutral-200"
                >
                  {interest}
                </span>
              ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={withBasePath('/research')}
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              {messages.home.viewResearch}
            </Link>
            <Link
              href={withBasePath(typeof social.cv === 'string' ? social.cv : '/cv')}
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-100"
            >
              {messages.home.viewCv}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[15rem]">
          <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[1.3rem] border border-neutral-200 bg-neutral-100 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src={withBasePath(author.avatar)}
              alt={author.name}
              fill
              priority
              className="object-cover object-[32%_center]"
              sizes="(max-width: 1024px) 13rem, 15rem"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
