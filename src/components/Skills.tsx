import { getTranslations } from "next-intl/server";
import { BaseSkillsIcons } from "../data";
import BaseSection from "../UI/BaseSection";
import SkillsItem from "../UI/SkillsItem";
import Image from "next/image";

export default async function Skills() {
    const t = await getTranslations("Skills")

    return (
        <BaseSection
            title={t("title")}
            subTitle={t("subTitle")}
            className="gap-[50px] max-600px:gap-[25px]"
            id="skills"
        >
            <div className="grid grid-cols-8 max-1200px:grid-cols-6 max-1000px:grid-cols-5 max-800px:grid-cols-4 gap-[30px] max-425px:grid-cols-3 max-600px:gap-[15px]">
                {BaseSkillsIcons.map(item => (
                    <SkillsItem key={item.id} title={item.name}>
                        <Image
                            src={item.icon}
                            className="w-full h-full object-contain"
                            width={64}
                            height={64}
                            alt="skills image"
                        />
                    </SkillsItem>
                ))}
            </div>
        </BaseSection>
    )
}