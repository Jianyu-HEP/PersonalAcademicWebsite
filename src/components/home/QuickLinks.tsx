'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';
import { withBasePath } from '@/lib/utils';

interface QuickLinkItem {
  label: string;
  href: string;
  external?: boolean;
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
      external: false,
    }] : []),
    ...(typeof social.orcid === 'string' ? [{
      label: 'ORCID',
      href: social.orcid,
      external: true,
    }] : []),
    ...(typeof social.google_scholar === 'string' ? [{
      label: 'Google Scholar',
      href: social.google_scholar,
      external: true,
    }] : []),
    ...(typeof social.email === 'string' ? [{
      label: messages.home.email,
      href: `mailto:${social.email}`,
      external: false,
    }] : []),
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-t border-neutral-200 pt-5 dark:border-neutral-800"
    >
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        <span className="text-xs uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-500">
          {messages.home.compactLinks}
        </span>
        {links.map((link) => {
          return (
            <a
              key={link.label}
              href={link.external ? link.href : withBasePath(link.href)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
