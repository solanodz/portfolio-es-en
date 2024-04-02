import React from 'react'

import { TextGenerateEffect } from "@/components/text-generate-effect";
import { Badge } from "@/components/ui/badge";
import { grotesk, montserrat } from "@/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCss3, FaDiscord, FaNodeJs, FaReact, FaSlack, FaTelegram, FaTrello } from "react-icons/fa";
import { SiExpress, SiFigma, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiPostman, SiTailwindcss, SiVisualstudiocode, SiZoom } from "react-icons/si";
import { Separator } from './ui/separator';
import { useTranslations } from 'next-intl';

const Hero = async () => {


    const t = useTranslations("index.hero");

    return (
        <>
            <div className=" flex gap-6 md:flex-row justify-between items-center  flex-col-reverse">
                <div>
                    <p className="font-semibold text-lg sm:text-2xl">{t('hi')}</p>
                    <h1 className={`${montserrat.className} text-4xl sm:text-6xl font-bold tracking-tighter`}>
                        <TextGenerateEffect words={t('name')} />
                    </h1>
                    <p className={`${montserrat.className} w-fit mb-2 text-slate-600 dark:text-slate-500 text-md md:text-2xl font-bold tracking-tighter`}>{t('desc')}</p>

                    <div className=" flex-col text-left mr-auto flex text-2xl py-2 gap-4 flex-wrap text-muted-foreground my-2">
                        <div className='flex gap-2'>
                            <FaCss3 />
                            <SiJavascript />
                            <FaReact />
                            <SiTailwindcss />
                            <SiNextdotjs />
                            <SiFirebase />
                            <SiMongodb />
                            <SiExpress />
                            <FaNodeJs />
                        </div>
                        {/* <Separator orientation="vertical" className='mx-1 h-8' /> */}
                        <div className='flex gap-2'>
                            <FaTrello />
                            <FaDiscord />
                            <FaSlack />
                            <SiZoom />
                            <FaTelegram />
                            <SiVisualstudiocode />
                            <SiFigma />
                            <SiPostman />
                        </div>
                    </div>
                </div>
                <Image
                    src="/foto-perfil.jpg"
                    alt="Solano de Zuasnabar"
                    width={300}
                    height={300}
                    quality={100}
                    className="rounded-full md:mr-0 mr-auto md:w-[280px] h-fit w-[120px] ring-2 ring-slate-400 border-4 border-transparent"
                />
            </div>
            <div className={`${grotesk.className} mt-20 mb-12 tracking-tight font-medium text-sm sm:text-lg leading-tight max-w-md text-right ml-auto`}>
                <p className="">
                    {t('desc-right')}
                </p>
                <p>
                    {t('desc-right-2')}
                </p>
            </div>
            <div className={`${grotesk.className} flex flex-col font-semibold leading-tight gap-1`}>
                <Link className="flex w-fit gap-2 items-center hover:text-slate-600 dark:hover:text-slate-500 hover:gap-5 duration-200" href='https://www.linkedin.com/in/solanodz/' target="_blank">LINKEDIN <FaArrowRight /></Link>
                <Link className="flex w-fit gap-2 items-center hover:text-slate-600 dark:hover:text-slate-500 hover:gap-5 duration-200" href='https://github.com/solanodz' target="_blank">GITHUB<FaArrowRight /></Link>
                <Link className="flex w-fit gap-2 items-center hover:text-slate-600 dark:hover:text-slate-500 hover:gap-5 duration-200" href='#' target="_blank">WHATSAPP<FaArrowRight /></Link>
            </div>
        </>
    )
}

export default Hero
