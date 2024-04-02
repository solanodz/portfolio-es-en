"use client"
import Link from 'next/link'
import React, { useTransition } from 'react'
import { ToggleMode, LogoTheme } from './ToggleMode'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { ToggleLanguage } from './ToggleLanguage'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'


const Navbar = () => {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    }

    return (

        <MaxWidthWrapper className='fixed top-0 right-0 w-full z-50'>
            <nav className='border-b fixed top-0 right-0 w-full bg-white dark:bg-zinc-950 dark:bg-opacity-70 bg-opacity-70 backdrop-blur-lg dark:backdrop-blur-lg'>
                <div className=' flex flex-row justify-between items-center p-2 mx-5 sm:mx-20'>
                    <div className='flex flex-row items-center'>
                        <LogoTheme />
                    </div>

                    <div className='dark:text-white text-zinc-950 flex flex-row items-center gap-4'>
                        <select
                            defaultValue={localActive}
                            onChange={onSelectChange}
                            className='w-14 py-2 bg-transparent'
                            disabled={isPending}
                        >
                            <option value="en" className='text-black bg-white dark:text-white dark:bg-black '>EN</option>
                            <option value="es" className='text-black bg-white dark:text-white dark:bg-black '>ES</option>
                        </select>

                        {/* <ToggleLanguage /> */}
                        <ToggleMode />

                    </div>

                </div>
            </nav>
        </MaxWidthWrapper>
    )
}

export default Navbar
