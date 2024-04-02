import AccordionInstalaciones from '@/components/Accordion-instalaciones'
import { TextGenerateEffect } from '@/components/text-generate-effect'
import { montserrat } from '@/ui/fonts'
import Image from 'next/image'
import React from 'react'

const ServicesPage = () => {
    return (
        <div className='bg-zinc-950  max-w-7xl mx-auto'>
            <div className='mx-5 md:mx-20 py-24 '>
                <h1 className={`${montserrat.className} antialiased tracking-tighter text-3xl sm:text-5xl my-3 font-bold text-green-700`}>
                    <TextGenerateEffect words="Nuestros servicios e instalaciones" />
                </h1>
                <div className='my-'>
                    <p className='text-sm leading-tight tracking-tight max-w-3xl md:text-md sm:text-lg font-medium bg-green-950 text-green-600 bg-opacity-70 italic p-2 border rounded-md border-green-800 '>
                        En Cúspide Gym nos esforzamos por brindar el mejor servicio personalizado, y para eso contamos con mucho material para que nuestro servicio se destaque aún más.
                    </p>
                    <AccordionInstalaciones />
                </div>

            </div >
        </div>
    )
}

export default ServicesPage

{/* <div className='my-6 flex md:flex-row flex-col items-center justify-between text-xs md:text-sm sm:text-lg font-medium text-zinc-700'>
                    <ul className=' flex flex-col gap-2 max-w-3xl text-zinc-300 w-fit flex-wrap'>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Entrenadores todos los dias y a cualquier hora</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Terraza al aire libre</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Contamos con todo tipo de material</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Abrimos mas de 16 horas por dia</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Clases de funcional para todos, no importa tu nivel de entrenamiento</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Ponemos en pausa tu cuota en caso de que te vayas de vacaciones</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Discos engomados y de hierro desde un kilo hasta 20kg</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Mancuernas engomadas desde uno hasta 40 kilos</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Barras de 8, 10, 12, 15, 18 y 20kg</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Bandas elásticas de todas las tensiónes y tamaños</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Medicine balls, sand bags, kettlebells, fitballs, vallas, conos, bosus, etc.</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Poleas regulables en ambos ejes y con distintos agarres</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Máquinas de empuje y tracción, horizontal y vertical</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Máquinas de sentadilla hack y prensa</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Bancos regulables y moviles</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Bancos para press plano, inclinado o vertical</li>
                        <li className='flex h-fit items-center gap-2 w-full'><span className='text-green-700'>●</span> Múltiples racks de sentadilla y plataformas de levantamiento</li>
                    </ul >
                    <Image
                        src='/cuspide-logo.png'
                        alt='Cuspide gym'
                        width={1000}
                        height={1000}
                        quality={100}
                        className=' md:h-[300px] h-[200px] w-fit drop-shadow-md object-contain'
                    />
                </div > */}