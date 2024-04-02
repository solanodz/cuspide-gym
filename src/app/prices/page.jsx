import { TextGenerateEffect } from '@/components/text-generate-effect'
import { montserrat } from '@/ui/fonts'
import React from 'react'

const ContactPage = () => {

    const precios = [
        {
            title: 'Precio por día',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Precio semanal',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Precio 1/2 mes',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Precio mensual',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Personalizado ',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Precio trimestral',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Precio semestral',
            info: '',
            price: '$5000',
            discount: '$5000'
        },
        {
            title: 'Promoción anual',
            info: '',
            price: '$5000',
            discount: '$5000'
        }
    ]

    return (
        <div className='bg-zinc-950  max-w-7xl mx-auto'>
            <div className='mx-5 md:mx-20 py-24 '>
                <h1 className={`${montserrat.className} antialiased tracking-tighter text-3xl sm:text-5xl font-bold text-green-700`}>
                    <TextGenerateEffect words="Precios y promociones" />
                </h1>
                <p className='my-3'>Cualquiera sea el plan que elijas, incluye el pase libre (acceso a todas las clases, horarios, días, entrenadores) el tiempo que dure el plan que pagaste. Tene en cuenta que pagas menos si abonas en efectivo.</p>
                <div className='flex flex-row flex-wrap gap-4 my-12'>
                    {precios.map((precio, index) => (
                        <div key={index} className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-full sm:w-52'>
                            <h3 className='text-lg sm:text-xl font-semibold'>{precio.title}</h3>
                            <p className=' rounded-md p-1 text-green-500 text-lg sm:text-lg font-semibold'>{precio.price}</p>
                            <div className='bg-green-950 rounded-md p-2 text-green-500 font-medium text-sm'>
                                <span>Descuento en efectivo</span>
                                <p className='text-lg sm:text-lg text-white font-semibold'>{precio.discount}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div>
                <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div>
                <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div>
                <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div>
                <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div>
                <div className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-fit'>
                    <h3 className='text-2xl font-semibold'>Precio por día</h3>
                    <p className='bg-green-950 rounded-md p-2 text-green-600 font-semibold'>$5000</p>
                    <div className='bg-green-950 rounded-md p-2 w-fit text-green-700 text-sm'>
                        <span>Descuento en efectivo</span>
                        <p>$5000</p>
                    </div>
                </div> */}
                {/* <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-semibold text-green-700'>Precio por día</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-semibold text-green-700'>Precio semanal</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-semibold text-green-700'>Precio por dos semanas</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-2xl font-semibold text-green-700'>Precio mensual</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $17.100.</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un 5% de descuento: $16.200.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-green-700'>Precio por mes</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-green-700'>Promoción trimestral</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-green-700'>Promoción semetral</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-semibold text-green-700'>Promoción anual</h2>
                    <p className='text-md text-muted-foreground'>El precio es de $...</p>
                    <p className='text-md text-muted-foreground'>Pagando en efectivo tenes un ...% de descuento: $...</p>
                </div> */}
            </div>
        </div>
    )
}

export default ContactPage
