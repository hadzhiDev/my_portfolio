import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export default function Button({ children, ...args }: ButtonProps) {
    return (
        <button {...args} className={`font-lato font-[700] text-[16px] leading-[16px] text-white py-[12px] px-[40px] bg-[#fd6f00] rounded-[8px] ${args.className ?? ""}`}>{children}</button>
    )
}