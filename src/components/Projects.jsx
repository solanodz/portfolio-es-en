
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useTranslations } from 'next-intl'
import AnimationFunction from './animations';
import { montserrat } from '@/ui/fonts';



const Projects = () => {

    const t = useTranslations("index.projects");

    const data = [
        {
            title: t('birdie.title'),
            description: t('birdie.desc'),
            badges: ['React', 'Tailwind', 'Firebase', 'Shadcn', 'Email js'],
            img: '/birdie-screen.png',
            href: 'https://solanodz.github.io/birdie-golfshop/',
            github: 'https://github.com/solanodz/birdie-golfshop'
        },
        {
            title: t('cuspide-gym.title'),
            description: t('cuspide-gym.desc'),
            badges: ['Next js', 'Tailwind', 'Aceternity UI', 'Shadcn'],
            img: '/cuspide-screen.png',
            href: 'https://cuspidegym.vercel.app/',
            github: 'https://github.com/solanodz/cuspide-gym'
        },
        {
            title: t('easy-notes.title'),
            description: t('easy-notes.desc'),
            badges: ['React', 'Tailwind', 'Firebase', 'Material UI'],
            img: '/easy-notes-screen.png',
            href: 'https://easy-notes-react.vercel.app/',
            github: 'https://github.com/solanodz/easy-notes-react'
        },
        {
            title: t('expense-income.title'),
            description: t('expense-income.desc'),
            badges: ['Next js', 'Tailwind', 'Shadcn', 'Chart js'],
            img: '/expenses-screen.png',
            href: 'https://income-expense-tracker-sz.vercel.app/',
            github: 'https://github.com/solanodz/income-expense-tracker'
        },
    ]

    return (
        <section className="flex flex-col gap-6 mt-24 pb-12 min-h-[40rem] h-fit justify-center bg-gradient-to-t dark:from-slate-900 dark:to-zinc-950 from-slate-300 to-white">
            <MaxWidthWrapper>
                <h2 className={`${montserrat.className} antialiased text-3xl sm:text-5xl my-4 font-bold`}>{t('title')}</h2>
                <div className="flex flex-col w-full mx-auto gap-6">
                    {data.map((project, index) => (
                        <AnimationFunction
                            key={index}
                        >
                            <div className="rounded-lg border dark:border-zinc-800 border-zinc-300 flex-col absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-100%,black)]"></div>
                            <div className="tracking-tight flex flex-col gap-1 sm:gap-3 relative max-w-lg">
                                <h2 className="text-xl sm:text-3xl font-bold">{project.title}</h2>
                                <p className='text-muted-foreground tracking-tight leading-tight text-sm sm:text-md'>{project.description}</p>
                                <div className="flex gap-2 flex-row flex-wrap w-fit my-3 sm:my-6">
                                    {project.badges.map((badge, index) => (
                                        <Badge variant='default' key={index} className="">{badge}</Badge>
                                    ))}
                                </div>
                                <div className="flex sm:my-0 my-2 gap-1 text-sm flex-col font-semibold text-slate-600 dark:text-slate-500">
                                    <Link href={project.href} target="_blank" className="flex w-fit gap-2 items-center hover:gap-5 duration-200">{t('links.web')}<FaArrowRight /></Link>
                                    <Link href={project.github} target="_blank" className="flex w-fit gap-2 items-center  hover:gap-5 duration-200">{t('links.github')}<FaArrowRight /></Link>
                                </div>
                            </div>
                            <div className="relative text-left ml-auto">
                                <Image src={project.img} alt={project.title} className="w-auto h-40 sm:h-60 border rounded-sm object-cover" width={500} height={250} />
                            </div>
                        </AnimationFunction>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section >
    )
}

export default Projects
