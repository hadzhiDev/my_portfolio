import { ReactNode } from "react";

interface ServicesItemProps {
    title: string;
    subTitle: string;
    children: ReactNode
}

export default function ServicesItem({ title, subTitle, children }: ServicesItemProps) {
    return (
        <div className="bg-[rgba(255,_255,_255,_0.04)] p-[34px] max-1200px:p-[18px] max-600px:p-[15px] rounded-[24px] flex flex-col items-center">
            <div className="w-[60px] h-[60px] flex items-center justify-center">{children}</div>
            <p className="font-lato font-[700] text-[24px] max-600px:text-[18px] max-600px:leading-[22px] leading-[24px] text-[#fd6f00] mt-[16px] mb-[34px] max-1200px:mb-[16px] text-center">{title}</p>
            <p className="font-lato font-[500] text-[20px] max-600px:text-[16px] max-600px:leading-[20px] leading-[20px] text-[#575757] text-center">{subTitle}</p>
        </div>
    )
}

