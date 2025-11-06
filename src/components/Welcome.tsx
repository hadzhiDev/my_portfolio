"use client"

import Button from "@/UI/Button";
import NetworkLiks from "@/UI/NetworkLiks";
import MoreInfoDetails from "@/UI/MoreInfoDetails";
import ApearianceBlock from "./ApearianceBlock";
import { NetworkLiksList } from "./Footer";
import { MoreInfoWelcome } from "@/data";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Welcome() {
    const t = useTranslations("Welcome")
    const router = useRouter()

    return (
        <section className="container flex justify-between max-1000px:flex-col max-1000px:gap-[150px] max-425px:gap-[90px] max-1000px:items-center" id="welcome">
            <ApearianceBlock pos={[{ x: -100 }, { x: 0 }]}>
                <div className="relative flex flex-col max-1000px:items-center">
                    <h3 className="font-lato font-[600] text-[24px] leading-[24px] max-600px:text-[16px] max-600px:leading-[16px] text-[#707070] mb-[10px]">{t("welcome")}</h3>
                    <h2 className="font-lato font-[700] text-[28px] leading-[28px] max-600px:text-[20px] max-600px:leading-[22px] text-[#959595] mb-[24px]">{t("name")}</h2>
                    <h1 className="font-lato font-[900] text-[70px] leading-[70px] max-1200px:text-[60px] max-1000px:text-center max-1200px:leading-[60px] max-600px:text-[50px] max-600px:leading-[50px] bg-[linear-gradient(110deg,_#984300_0%,_#fd6f00_46.35%,_#ca5900_100%)] bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mb-[33px] uppercase">back-end developer</h1>
                    <div className="flex items-center gap-[20px]">
                        {NetworkLiksList.map(item => (
                            <NetworkLiks key={item.id} href={item.href}>
                                {item.icon}
                            </NetworkLiks>
                        ))}
                    </div>
                    <div className="flex items-center gap-[24px] mt-[61px] max-1000px:mt-[40px] max-425px:flex-col">
                        <Button className="border-[2px] border-[#959595] bg-transparent !text-[#959595]" onClick={() => router.push("/assets/document/cv.pdf")}>Сматреть CV</Button>
                    </div>
                    <MoreInfoDetails
                        data={MoreInfoWelcome}
                        className="w-max mt-[80px] max-1000px:mt-[40px]"
                    />
                    <Image
                        src="/assets/svg/stare.svg"
                        className="absolute top-0 left-0 z-[-1] title_svg_animation w-[600px] h-[516px] object-contain"
                        width={600}
                        height={516}
                        alt="star image"
                    />
                </div>
            </ApearianceBlock>
            <ApearianceBlock pos={[{ x: 100 }, { x: 0 }]}>
                <div className="mt-[50px] max-1000px:mt-0">
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-full w-[618px] max-1200px:w-[400px] h-[618px] max-1200px:h-[400px] max-600px:w-[383px] max-600px:h-[383px] max-425px:w-[300px] max-425px:h-[300px] relative shadow-[#fd6f00] shadow-2xl">
                        <Image
                            src="/assets/img/profile.png"
                            className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[520px] max-1200px:w-[350px] h-[780px] max-1200px:h-[522px] max-600px:w-[322px] max-600px:h-[484px] max-425px:w-[300px] max-425px:h-[370px] object-contain rounded-[244px]"
                            width={520}
                            height={780}
                            alt="user image"
                        />
                    </div>
                </div>
            </ApearianceBlock>
        </section>
    )
}