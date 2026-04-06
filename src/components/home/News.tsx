'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
            <div className="mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {messages.home.newsDescription}
                </p>
            </div>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
                        <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                            {item.date}
                        </span>
                        <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-300">{item.content}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
