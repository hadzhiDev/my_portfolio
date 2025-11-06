import { routing } from "@/i18n/routing"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { redirect } from "next/navigation"

interface LocaleLayoutProps {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
    const params = await props.params
    const locale = params?.locale
    const messages = await getMessages(locale as any)

    if (!routing.locales.includes(locale as 'ru' | 'en')) redirect("/")

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {props.children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}