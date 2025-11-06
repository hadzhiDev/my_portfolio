import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['ru', 'en'] as const,
    defaultLocale: 'ru'
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
