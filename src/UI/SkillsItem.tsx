import { ReactNode } from "react";

interface SkillsItemProps {
    title: string;
    children: ReactNode
}

export default function SkillsItem({ title, children }: SkillsItemProps) {
    return (
        <div className="flex flex-col gap-[15px] items-center shadow-[0px_5px_10px_2px_rgba(0,0,0,0.5)_inset] bg-[rgba(255,255,255,0.08)] rounded-[6px] justify-center pb-[10px] pt-[20px]">
            <div className="w-[64px] h-[64px] max-600px:w-[40px] max-600px:h-[40px] flex items-center justify-center">{children}</div>
            <p className="font-lato font-[500] text-[20px] max-600px:text-[14px] max-600px:leading-[14px] leading-[20px] text-[#707070] text-center">{title}</p>
        </div>
    )
}

