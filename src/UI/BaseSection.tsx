import { ReactNode } from "react";

interface BaseSectionProps {
    title: string;
    subTitle: string;
    children: ReactNode;
    className?: string;
    id?: string
}

export default function BaseSection({ title, subTitle, children, className, id = "" }: BaseSectionProps) {
    return (
        <section className={`container flex flex-col ${className ?? ""}`} id={id}>
            <div className="flex flex-col items-center gap-[18px] max-w-[600px] mx-auto">
                <h4 className="font-lato font-[700] text-[40px] leading-[40px] text-[#fefefe]">{title}</h4>
                <p className="font-lato font-[500] text-[20px] leading-[26px] text-[#707070] text-center">{subTitle}</p>
            </div>
            {children}
        </section>
    )
}