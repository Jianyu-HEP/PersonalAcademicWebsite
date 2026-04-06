'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';

export default function ResearchInterests({ interests }: { interests: string[] }) {
  const messages = useMessages();
  const themes = interests.slice(0, 5).map((interest) => {
    const [title, ...details] = interest.split(':');
    return {
      title: title.trim(),
      description: details.join(':').trim(),
    };
  });

  if (themes.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-[1.25rem] border border-neutral-200 bg-white px-6 py-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="mb-4">
        <h2 className="text-[1.7rem] font-serif font-semibold text-primary">{messages.home.researchInterests}</h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="rounded-xl border border-neutral-200/90 bg-neutral-50/80 px-4 py-3.5 dark:border-neutral-800 dark:bg-neutral-900/70"
          >
            <h3 className="text-sm font-semibold text-primary">{theme.title}</h3>
            {theme.description && (
              <p className="mt-1.5 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {theme.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
