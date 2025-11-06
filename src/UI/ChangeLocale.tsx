"use client"

import Button from "./Button"
import { useLocale } from "next-intl"
import { redirect } from "next/navigation"

export default function ChangeLocale() {
    const locale = useLocale()

    return (
        <div className="bg-white rounded-[6px] overflow-hidden shadow">
            <Button className={`!rounded-none !px-[10px] ${locale == "en" ? "!bg-transparent !text-[#121212]" : ""}`} onClick={() => redirect("/ru")}>RU</Button>
            <Button className={`!rounded-none !px-[10px] ${locale == "ru" ? "!bg-transparent !text-[#121212]" : ""}`} onClick={() => redirect("/en")}>EN</Button>
        </div>
    )
}
