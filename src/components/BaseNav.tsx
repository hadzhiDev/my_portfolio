"use client"

import Link from "next/link"
import { baseNavLinks } from "../data"
import { useLocale } from "next-intl";

interface BaseNavProps {
    className?: string;
    navClassName?: string;
    onClick?: () => void
}

export default function BaseNav({ className = "", navClassName = "", onClick = () => { } }: BaseNavProps) {
    const locale = useLocale()

    return (
        <nav className={navClassName}>
            <ul className={`flex items-center gap-[60px] max-800px:flex-wrap max-800px:justify-center max-600px:gap-[30px] ${className}`}>
                {baseNavLinks.map((item: any) => (
                    <li key={item.id}>
                        <Link href={item.href} onClick={onClick} className="font-lato font-[600] text-[20px] leading-[20px] text-[#959595] hover:text-[#fd6f00] duration-200">{item[locale]}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}