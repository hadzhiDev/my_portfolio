import { ServiceList } from "@/data";
import BaseSection from "../UI/BaseSection";
import ServicesItem from "../UI/ServicesItem";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Services({ locale }: { locale: string }) {
    const t = await getTranslations("Services")

    return (
        <BaseSection
            title={t("title")}
            subTitle={t("subTitle")}
            className="gap-[80px] max-800px:gap-[40px]"
            id="services"
        >
            <div className="grid grid-cols-3 max-1000px:grid-cols-2 max-425px:grid-cols-1 gap-[40px] max-1200px:gap-[20px] max-600px:gap-[15px]">
                {ServiceList.map(item => (
                    <ServicesItem
                        title={item.title[locale as "ru" | "en"]}
                        subTitle={item.subTitle[locale as "ru" | "en"]}
                        key={item.id}
                    >
                        <Image
                            src={item.image}
                            className="w-full h-full object-contain"
                            width={60}
                            height={60}
                            alt="service image"
                        />
                    </ServicesItem>
                ))}
            </div>
        </BaseSection>
    )
}