"use client"

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface PortfolioItemProps {
    title: string;
    subTitle: string;
    link: string;
    images: Array<{ id: number; image: string }>
}

export default function PortfolioItem({ title, subTitle, link, images }: PortfolioItemProps) {
    return (
        <div className="bg-[rgba(255,255,255,0.08)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="bg-white w-full h-[400px] max-1200px:h-[300px] max-1000px:h-[230px] relative">
                <Swiper
                    navigation={{
                        nextEl: ".next-projectsSlide-button",
                        prevEl: ".prev-projectsSlide-button"
                    }}
                    modules={[Navigation]}
                    className="w-full h-full"
                >
                    {images.map(item => (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={item.image}
                                className="w-full h-full object-cover object-top"
                                width={420}
                                height={400}
                                alt="portfolio image"
                            />
                        </SwiperSlide>
                    ))}
                    <button className="bg-[#121212] rounded-[4px] w-[32px] flex items-center justify-center h-[32px] prev-projectsSlide-button absolute top-[50%] translate-y-[-50%] left-[10px] z-[1]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M5 12L11 6M5 12L11 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button className="bg-[#121212] rounded-[4px] w-[32px] flex items-center justify-center h-[32px] next-projectsSlide-button absolute top-[50%] translate-y-[-50%] right-[10px] z-[1]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Swiper>
            </div>
            <div className="p-[16px] flex flex-col gap-[15px] pt-[30px] h-full">
                <p className="font-lato font-[700] text-[16px] leading-[20px] text-[#c6c6c6]">{title}</p>
                <p className="font-lato font-[500] text-[14px] leading-[20px] text-[#707070]">{subTitle}</p>
                <Link href={link} target="_blank" className="text-white font-lato font-[700] text-[16px] leading-[16px] bg-[linear-gradient(129deg,_#fd6f00_0%,_#e46400_100%)] rounded-[8px] p-[14px] w-max mt-auto">посетить сайт</Link>
            </div>
        </div>
    )
}