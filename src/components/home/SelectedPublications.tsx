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

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {messages.home.selectedPublicationsDescription}
                    </p>
                </div>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent-dark"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
                    >
                        <h3 className="mb-2 text-base font-semibold leading-tight text-primary sm:text-lg">
                            {pub.title}
                        </h3>
                        <p className="mb-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                            {pub.authors.map((author, idx) => (
                                <span key={idx}>
                                    <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''} ${author.isCoAuthor ? `underline underline-offset-4 ${author.isHighlighted ? 'decoration-accent' : 'decoration-neutral-400'}` : ''}`}>
                                        {author.name}
                                    </span>
                                    {author.isCorresponding && (
                                        <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>†</sup>
                                    )}
                                    {idx < pub.authors.length - 1 && ', '}
                                </span>
                            ))}
                        </p>
                        <p className="mb-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                            {[pub.journal || pub.conference, pub.year].filter(Boolean).join(' • ')}
                        </p>
                        {pub.description && (
                            <p className="line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                {pub.description}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
