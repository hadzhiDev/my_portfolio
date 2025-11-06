import Link from "next/link";
import { ReactNode } from "react";

interface NetworkLiksProps {
    href: string;
    className?: string;
    children: ReactNode;
}

export default function NetworkLiks({ href, className = "", children }: NetworkLiksProps) {
    return (
        <Link href={href} className={`w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.04)] border border-[#575757] group hover:bg-[#fd6f00] hover:border-[#fd6f00] duration-200 ${className}`}>
            {children}
        </Link>
    )
}