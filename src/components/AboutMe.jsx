import { montserrat, robotoMono } from '@/ui/fonts'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const AboutMe = () => {

    const t = useTranslations("index.about-me");

    return (
        <section className="flex flex-col gap-6 mt-24 min-h-[40rem] h-fit justify-center w-full dark:bg-zinc-950 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative">
            {/* Radial gradient for the container to give a faded look */}
            <div className="flex-col absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_7%,black)]"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-around w-full '>
                <div className='tracking-tight flex flex-col gap-3 relative font-semibold'>
                    <h2 className={`${montserrat.className} antialiased text-3xl sm:text-5xl font-bold`}>{t('title')}</h2>
                    <div className={`${robotoMono.className} antialiased font-regular gap-3 text-sm sm:text-md flex flex-col tracking-tighter`}>
                        <p>
                            {t('description-p1')}
                        </p>
                        <p>
                            {t('description-p2')}
                        </p>
                        <p>
                            {t('description-p3')}
                        </p>
                    </div>
                </div>
                <div className='relative text-left sm:my-0 my-6 sm:ml-auto'>
                    <h2 className={`${montserrat.className} antialiased text-3xl sm:text-5xl font-bold text-left sm:text-center`}>{t('title-2')}</h2>
                    <div className='flex gap-2 flex-col w-fit my-6'>
                        <Link href='/certificado-frontend.png' target='_blank' className={`${buttonVariants({ variant: 'outline' })} flex flex-row h-fit gap-4 text-left justify-between`}>
                            <Image src="/certificado-frontend.png" alt="Coderhouse" className='w-auto h-20 rounded-sm my-1.5' width={400} height={700} />
                            <div className=''>
                                <h3 className='text-md sm:text-xl font-bold'>Frontend Developer</h3>
                                <p className='text-md'>Coderhouse</p>
                            </div>
                        </Link>
                        <Link href='/certificado-backend.png' target='_blank' className={`${buttonVariants({ variant: 'outline' })} flex flex-row h-fit gap-4 text-left justify-between`}>
                            <Image src="/certificado-backend.png" alt="Coderhouse" className='w-auto h-20 rounded-sm my-1.5' width={400} height={700} />
                            <div>
                                <h3 className='text-md sm:text-xl font-bold'>Backend Developer</h3>
                                <p className='text-md'>Coderhouse</p>
                            </div>
                        </Link>
                        <Link href='/certificado-fullstack.png' target='_blank' className={`${buttonVariants({ variant: 'outline' })} flex flex-row h-fit gap-4 text-left justify-between`}>
                            <Image src="/certificado-fullstack.png" alt="Coderhouse" className='w-auto h-20 rounded-sm my-1.5' width={400} height={700} />
                            <div>
                                <h3 className='text-md sm:text-xl font-bold'>Fullstack Developer</h3>
                                <p className='text-md'>Coderhouse</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
