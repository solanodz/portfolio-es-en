"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

export const ToggleMode = () => {

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <Button variant='link' disabled={true}></Button>
    }

    const dark = theme === 'dark'

    return <Button variant='link' onClick={() => setTheme(`${dark ? "ligth" : "dark"}`)}>{dark ? <MdSunny /> : <FaMoon />}</Button>
}

export const LogoTheme = () => {
    const { theme } = useTheme()

    return (
        <div className='flex flex-row items-center'>
            <Link href="/">
                <Image
                    src={theme === 'dark' ? '/sz-blanco.png' : '/sz-negro.png'}
                    alt='logo sz.clients'
                    width={40}
                    height={40}
                    className='py-1'
                />
            </Link>
        </div>
    )
}
