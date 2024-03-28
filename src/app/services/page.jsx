import { TextGenerateEffect } from '@/components/text-generate-effect'
import { montserrat } from '@/ui/fonts'
import Image from 'next/image'
import React from 'react'
import { FaCheck, FaCheckDouble } from 'react-icons/fa6'

const ServicesPage = () => {
    return (
        <div className='bg-zinc-950 '>
            <div className='mx-5 sm:mx-20 py-24 '>
                <h1 className={`${montserrat.className} antialiased tracking-tighter text-4xl sm:text-6xl font-bold text-green-700`}>
                    <TextGenerateEffect words="Nuestros servicios e instalaciones" />
                </h1>
                <div className='my-6 flex sm:flex-row flex-col items-center justify-between text-sm sm:text-lg font-medium text-zinc-700'>
                    <ul className=' flex flex-col gap-1 max-w-3xl text-zinc-300'>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Entrenadores todos los dias y a cualquier hora</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Terraza al aire libre</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Contamos con todo tipo de material</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Abrimos mas de 16 horas por dia</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Clases de funcional para todos, no importa tu nivel de entrenamiento</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Ponemos en pausa tu cuota en caso de que te enfermes o te vayas de vacaciones</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Discos engomados y de hierro desde un kilo hasta 20kg</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Mancuernas engomadas desde uno hasta 40 kilos</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Barras de 8, 10, 12, 15, 18 y 20kg</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Bandas elásticas de todas las tensiónes y tamaños</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Medicine balls, sand bags, kettlebells, fitballs, vallas, conos, bosus, etc.</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Poleas regulables en ambos ejes y con distintos agarres</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Máquinas de empuje y tracción horizontal y vertical</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Máquinas de sentafilla hack y prensa</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Bancos regulables y moviles</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Bancos para press plano, inclinado o vertical</li>
                        <li className='flex items-center gap-2'><FaCheck className='text-green-700' />Múltiples racks de sentadilla y plataformas de levantamiento</li>
                    </ul >
                    <Image
                        src='/cuspide-logo.png'
                        alt='Cuspide gym'
                        width={1000}
                        height={1000}
                        quality={100}
                        className=' h-[300px] w-fit drop-shadow-md object-cover'
                    />
                </div >
            </div >
        </div>
    )
}

export default ServicesPage
