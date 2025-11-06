import BaseSection from '../UI/BaseSection';
import PortfolioItem from '@/UI/PortfolioItem';
import { PortfolioWebsites } from '@/data';
import { getTranslations } from 'next-intl/server';

export default async function Portfolio() {
    const t = await getTranslations("Portfolio")

    return (
        <BaseSection
            title={t("title")}
            subTitle={t("subTitle")}
            className='gap-[30px]'
            id='porfolio'
        >
            <div className="grid grid-cols-3 max-1000px:grid-cols-2 max-600px:grid-cols-1 gap-[22px]">
                {PortfolioWebsites.map(item => (
                    <PortfolioItem
                        key={item.id}
                        title={item.title}
                        subTitle={item.subTitle}
                        link={item.link}
                        images={item.images}
                    />
                ))}
            </div>
        </BaseSection>
    )
}