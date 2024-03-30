"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {

    const pathName = usePathname()

    return (
        <div className='backdrop-blur-xl border-b border-zinc-800 bg-zinc-950 bg-opacity-70 drop-shadow-md py-4 min-w-screen fixed top-0 right-0 w-full z-50'>
            <nav className=' max-w-7xl sm:mx-auto mx-5 flex justify-between items-center'>
                <Link href="/">
                    <Image src="/cuspide-solo-logo.png" alt="Cuspide logo" width={40} height={40} quality={100} className='' />
                </Link>
                <ul className='flex text-sm sm:text-md sm:gap-5 tracking-tight text-muted-foreground font-medium'>
                    <li>
                        <Link
                            href="/about"
                            className={`${pathName === '/about' ? 'bg-transparent text-green-700 font-semibold' : ''} p-1 px-2  rounded-full hover:text-green-700 duration-200`}>
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={`${pathName === '/services' ? 'bg-transparent text-green-700 font-semibold' : ''} p-1 px-2  rounded-full hover:text-green-700 duration-200`}>
                            Servicios
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="/prices" className={`${pathName === '/prices' ? 'bg-transparent text-green-700 font-semibold' : ''} p-1 px-2  rounded-full hover:text-green-700 duration-200`}>
                            Promociones
                        </Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
