'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;
    const compactPublications = publications.slice(0, 4);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-[1.25rem] border border-neutral-200 bg-white px-6 py-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-[1.7rem] font-serif font-semibold text-primary">{resolvedTitle}</h2>
                </div>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-3">
                {compactPublications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="rounded-xl border border-neutral-200 bg-neutral-50/80 px-4 py-3.5 dark:border-neutral-800 dark:bg-neutral-900/70"
                    >
                        <h3 className="mb-1 text-base font-semibold leading-snug text-primary">
                            {pub.title}
                        </h3>
                        <p className="mb-1 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            {pub.authors.map((author) => author.name).join(', ')}
                        </p>
                        <p className="mb-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                            {[pub.journal || pub.conference, pub.year].filter(Boolean).join(' • ')}
                        </p>
                        {pub.description && (
                            <p className="line-clamp-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                                {pub.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
