import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex flex-col justify-between border-t border-zinc-700'>
            <div className='flex max-w-3xl mx-auto text-sm sm:text-md items-center gap-3 my-6 text-left'>
                <Link href='https://www.instagram.com/cuspidegym/' target='_blank'>
                    <FaInstagram className='text-3xl text-muted-foreground hover:text-green-700 hover:scale-110 duration-200' />
                </Link>
                <Link href='https://www.instagram.com/cuspidegym/' target='_blank'>
                    <FaWhatsapp className='text-3xl text-muted-foreground hover:text-green-700 hover:scale-110 duration-200' />
                </Link>
                <div className=''>
                    <h2 className='flex items-center gap-2 font-semibold text-muted-foreground'> Av. Solano Vera 923.</h2>
                    <Link
                        href="https://www.google.com/maps/place/C%C3%BAspide+Gym/@-26.8264353,-65.3072203,15.73z/data=!4m6!3m5!1s0x9422432166d23567:0x7114205f88b27e52!8m2!3d-26.8270193!4d-65.3062061!16s%2Fg%2F11fnwg_8zk?entry=ttu"
                        target='_blank'
                        className='flex items-center gap-2 hover:underline text-xs sm:text-sm font-semibold text-green-700'
                    >
                        Abrir Mapa
                    </Link>
                </div>
            </div>

            <div className='bg-zinc-900 text-xs text-muted-foreground mx-auto w-full text-center py-2'>
                Designed and Developed by <span className='font-semibold text-white'>@solanodz</span>.
            </div>
        </footer >
    )
}

export default Footer
