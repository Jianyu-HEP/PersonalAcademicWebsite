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
  researchInterests?: string[];
}

export default function Hero({ author, social, researchInterests }: HeroProps) {
  const messages = useMessages();

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-gradient-to-br from-white via-neutral-50 to-stone-100 px-6 py-8 shadow-sm sm:px-8 lg:px-10 dark:border-neutral-800 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_18rem] lg:items-center">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              {messages.home.heroLabel}
            </p>
            <div className="space-y-2">
              <h1 className="text-4xl font-serif font-bold tracking-tight text-primary sm:text-5xl">
                {author.name}
              </h1>
              <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                {author.title}
              </p>
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {author.institution}
              </p>
            </div>
          </div>

          {researchInterests && researchInterests.length > 0 && (
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
              href="/research"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-light"
            >
              {messages.home.viewResearch}
            </Link>
            <Link
              href={typeof social.cv === 'string' ? social.cv : '/cv'}
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-100"
            >
              {messages.home.viewCv}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[18rem]">
          <div className="relative mx-auto aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/70 bg-neutral-200 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
            <Image
              src={withBasePath(author.avatar)}
              alt={author.name}
              fill
              priority
              className="object-cover object-[32%_center]"
              sizes="(max-width: 1024px) 16rem, 18rem"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
