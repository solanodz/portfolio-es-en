"use client"

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function ToggleLanguage() {
    const router = useRouter();

    const onSelectChange = (e) => {
        const nextLocale = e.target.value;
        router.replace(`/${nextLocale}`)
    }

    return (
        <select onChange={onSelectChange} className='w-14 py-2 bg-transparent'>
            <option value="en" className='text-black bg-white dark:text-white dark:bg-black '>EN</option>
            <option value="es" className='text-black bg-white dark:text-white dark:bg-black '>ES</option>
        </select>
    )
}