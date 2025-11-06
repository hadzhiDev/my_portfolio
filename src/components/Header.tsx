"use client"

import Link from "next/link";
import BaseNav from "./BaseNav";
import Button from "../UI/Button";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter()
    const [burger, setBurger] = useOutsideClick(e => !e.target.closest("#burger") && !e.target.closest("#burgerOpen"))

    return (
        <header className="flex items-center justify-between">
            <Link href="/" className="font-k2d font-[700] text-[30px] leading-[30px] bg-[linear-gradient(90deg,_#fa6e00_0%,_#e60026_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">HADZHI</Link>
            <div className={`w-full max-800px:hidden max-800px:fixed max-800px:top-0 max-800px:left-0 z-[9] max-800px:w-full max-800px:h-full ${burger ? "!flex" : ""}`}>
                <div className={`flex items-center relative duration-200 z-[2] max-800px:bg-[#121212] max-800px:w-[50%] max-425px:w-[80%] max-800px:flex-col max-800px:justify-between max-800px:!items-start max-800px:p-[50px] max-600px:px-[30px] max-600px:py-[50px] max-800px:relative w-full ${burger ? " burger_animate_2" : ""}`} id="burger">
                    <BaseNav
                        navClassName="mx-auto max-800px:mx-0"
                        onClick={() => setBurger(false)}
                        className="max-1000px:gap-[27px] max-800px:flex-col max-800px:gap-[20px] max-800px:items-start"
                    />
                    <div className="flex gap-[10px]">
                        <Button onClick={() => router.push("/assets/document/cv.pdf",)}>Сматреть CV</Button>
                        {/* <ChangeLocale /> */}
                        {/* <ChangeTheme /> */}
                    </div>
                    <Button className="w-[24px] h-[24px] !p-0 !bg-transparent absolute top-[30px] right-[30px] hidden max-800px:block" onClick={() => setBurger(prev => !prev)}>
                        <svg className="w-[24px] h-[24px] fill-none" viewBox="0 0 24 24">
                            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#959595" />
                        </svg>
                    </Button>
                </div>
                <div className={`absolute top-0 left-0 w-full h-full z-[1] hidden max-800px:block bg-[rgba(0,0,0,0.5)] ${burger ? "burger_animate_1 opacity-[100%]" : ""}`}></div>
            </div>
            <Button className="w-[24px] h-[24px] !p-0 !bg-transparent hidden max-800px:block" onClick={() => setBurger(prev => !prev)} id="burgerOpen">
                <svg className="w-[24px] h-[24px] fill-none rotate-[180deg]" viewBox="0 0 24 25">
                    <path d="M14 12.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 18.5H3" stroke="#959595" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
        </header>
    )
}
