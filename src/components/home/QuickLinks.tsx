'use client';

import type { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useMessages } from '@/lib/i18n/useMessages';

interface QuickLinkItem {
  label: string;
  href: string;
  icon: typeof AcademicCapIcon;
  external?: boolean;
}

function OrcidIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
    </svg>
  );
}

function ArrowTopRightIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function QuickLinks({
  social,
}: {
  social: Record<string, string | string[] | undefined>;
}) {
  const messages = useMessages();
  const links: QuickLinkItem[] = [
    ...(typeof social.cv === 'string' ? [{
      label: 'CV',
      href: social.cv,
      icon: DocumentTextIcon,
      external: false,
    }] : []),
    ...(typeof social.google_scholar === 'string' ? [{
      label: 'Google Scholar',
      href: social.google_scholar,
      icon: AcademicCapIcon,
      external: true,
    }] : []),
    ...(typeof social.inspire === 'string' ? [{
      label: 'INSPIRE',
      href: social.inspire,
      icon: AcademicCapIcon,
      external: true,
    }] : []),
    ...(typeof social.arxiv === 'string' ? [{
      label: 'arXiv',
      href: social.arxiv,
      icon: DocumentTextIcon,
      external: true,
    }] : []),
    ...(typeof social.orcid === 'string' ? [{
      label: 'ORCID',
      href: social.orcid,
      icon: OrcidIcon as unknown as typeof AcademicCapIcon,
      external: true,
    }] : []),
    ...(typeof social.email === 'string' ? [{
      label: 'Email',
      href: `mailto:${social.email}`,
      icon: EnvelopeIcon,
      external: false,
    }] : []),
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="mb-4">
        <h2 className="text-xl font-serif font-semibold text-primary">{messages.home.quickLinks}</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {messages.home.quickLinksDescription}
        </p>
      </div>

      <div className="space-y-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between rounded-2xl border border-neutral-200 px-4 py-3 transition-colors hover:border-accent/40 hover:bg-accent/5 dark:border-neutral-800 dark:hover:border-accent/40"
            >
              <span className="flex items-center gap-3">
                <span className="rounded-xl bg-neutral-100 p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                  {link.label}
                </span>
              </span>
              <ArrowTopRightIcon className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
