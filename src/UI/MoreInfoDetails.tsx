"use client"

import { useLocale } from "next-intl";
import { Fragment } from "react";

interface MoreInfoDetailsProps {
    data: Array<{ id: number; title: string; ru: string; en: string; }>;
    className?: string;
}

export default function MoreInfoDetails({ data, className = "" }: MoreInfoDetailsProps) {
    const locale = useLocale()

    return (
        <div className={`bg-[rgba(255,255,255,0.04)] p-[24px] max-600px:p-[16px] rounded-[8px] flex items-stretch gap-[30px] max-600px:gap-[14px] ${className}`}>
            {data.map(item => (
                <Fragment key={item.id}>
                    <div className="flex flex-col gap-[12px]">
                        <p className="font-lato font-[800] text-[24px] leading-[24px] max-600px:text-[20px] max-600px:leading-[20px] text-[#fd6f00]">{item.title}</p>
                        <p className="font-lato font-[700] text-[20px] leading-[20px] max-600px:text-[16px] max-600px:leading-[16px] text-[#dfdfdf] capitalize">{item[locale as "ru" | "en"]}</p>
                    </div>
                    {item.id != data.length && <div className="w-[1px] h-auto bg-[#959595] max-425px:hidden"></div>}
                </Fragment>
            ))}
        </div>
    )
}