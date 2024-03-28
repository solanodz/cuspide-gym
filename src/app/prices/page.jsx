import { TextGenerateEffect } from '@/components/text-generate-effect'
import { montserrat } from '@/ui/fonts'
import React from 'react'

const ContactPage = () => {
    return (
        <div className='mx-20 my-24'>
            <h1 className={`${montserrat.className} antialiased tracking-tighter text-4xl sm:text-6xl font-bold text-green-700`}>
                <TextGenerateEffect words="Precios y promociones" />
            </h1>
            <div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
