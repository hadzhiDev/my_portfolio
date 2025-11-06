"use client"

import { useRouter } from "next/navigation";
import BaseSection from "../UI/BaseSection";
import Button from "../UI/Button";
import { useTranslations } from "next-intl";
import { Fragment } from "react";
import Image from "next/image";

export default function AboutMe() {
    const t = useTranslations("AboutMe")
    const l = useTranslations("Welcome")
    const router = useRouter()

    return (
        <BaseSection
            title={t("title")}
            subTitle={t("subTitle")}
            className="gap-[130px] max-425px:gap-[60px]"
            id="about_me"
        >
            <div className="flex items-center justify-between gap-[100px] max-1200px:gap-[50px] max-425px:gap-[25px] max-1000px:flex-col">
                <div className="bg-[rgba(255,_255,_255,_0.04)] w-[523px] min-w-[523px] max-1200px:min-w-[400px] max-1200px:w-[400px] h-[676px] max-1200px:h-[500px] max-425px:w-[250px] max-425px:min-w-[250px] max-425px:h-[300px] rounded-[261px_261px_12px_12px] relative">
                    <Image
                        src="/assets/img/profile.png"
                        className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[566px] max-1200px:w-[400px] h-[808px] max-1200px:h-[600px] max-425px:w-[250px] max-425px:h-[350px] object-contain"
                        width={566}
                        height={808}
                        alt="about me image"
                    />
                </div>
                <div className="flex flex-col gap-[40px] max-425px:gap-[20px] w-full">
                    <p className="font-lato font-[500] text-[20px] max-425px:text-[14px] leading-[190%] text-[#959595]">
                        {t("myText").split("<br/>").map((item, index) => (
                            <Fragment key={index}>
                                {item}
                                <br />
                            </Fragment>
                        ))}
                    </p>
                    <Button className="flex items-center gap-[12px] w-max !px-[30px]" onClick={() => router.push("/assets/document/cv.pdf")}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1222 13.4361L10.1222 1.39511" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.0382 10.5084L10.1222 13.4364L7.20619 10.5084" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.755 6.12802H15.688C17.723 6.12802 19.372 7.77702 19.372 9.81302V14.697C19.372 16.727 17.727 18.372 15.697 18.372L4.55699 18.372C2.52199 18.372 0.871994 16.722 0.871994 14.687V9.80202C0.871994 7.77302 2.51799 6.12802 4.54699 6.12802H5.48899" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="font-lato font-[700] text-[20px] max-425px:text-[16px] max-425px:leading-[16px] leading-[20px] text-white">Сматреть CV</span>
                    </Button>
                </div>
            </div>
        </BaseSection>
    )
}
