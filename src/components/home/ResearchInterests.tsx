'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';

export default function ResearchInterests({ interests }: { interests: string[] }) {
  const messages = useMessages();

  if (interests.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="mb-4">
        <h2 className="text-xl font-serif font-semibold text-primary">{messages.home.researchInterests}</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {messages.home.researchInterestsDescription}
        </p>
      </div>

      <div className="grid gap-3">
        {interests.map((interest, index) => (
          <div
            key={interest}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {String(index + 1).padStart(2, '0')}
            </div>
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
              {interest}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
