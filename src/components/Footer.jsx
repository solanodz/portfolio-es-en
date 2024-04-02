import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='h-fit flex flex-col justify-center border-t border-slate-400 dark:border-slate-700 dark:bg-slate-900 bg-slate-300'>
            <MaxWidthWrapper className='flex py-2 flex-col dark:text-slate-500 text-slate-700 gap-2 justify-center text-center'>
                {/* <h2 className="text-2xl font-medium tracking-tighter">Contact me</h2> */}
                <div className='flex flex-row gap-5 text-2xl mx-auto'>
                    <Link href='https://www.linkedin.com/in/solanodz/' target='_blank' className='dark:hover:text-white hover:text-black hover:scale-110 duration-200'><FaLinkedin /></Link>
                    <Link href='https://mail.google.com/mail/u/1/#inbox?compose=CllgCJTLGtngPlxDdhxlPcMRLVHbQMSmsrZxTSjQRfDfQsZhNxHqQjsXHTPnQBpJMLhrrdMhZWg' target='_blank' className='dark:hover:text-white hover:text-black hover:scale-110 duration-200'><SiGmail /></Link>
                    <Link href='https://wa.me/543816640453' target='_blank' className='dark:hover:text-white hover:text-black hover:scale-110 duration-200'><FaWhatsapp /></Link>
                </div>
            </MaxWidthWrapper>
            <div className='text-center pb-1 dark:text-slate-400 text-slate-700 text-sm font-medium'>
                <p><Link href='https://github.com/solanodz' target="_blank" className=' dark:hover:text-white hover:text-black hover:scale-110 duration-200'>@solanodz.</Link> 2024.</p>
            </div>
        </footer>
    )
}

export default Footer
