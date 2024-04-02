import { TextGenerateEffect } from '@/components/text-generate-effect'
import { Button, buttonVariants } from '@/components/ui/button'
import { montserrat } from '@/ui/fonts'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const ContactPage = () => {

    const precios = [
        {
            title: 'Precio por día',
            info: 'El tiempo es ilimitado, podes venir a la hora que quieras y quedarte el tiempo que quieras. No es vlido si salís y volves a entrar horas más tarde en el mismo día.',
            price: '$',
            discount: '$',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Precio semanal',
            info: 'La duración es de 7 días de corrido desde el día que lo abonas. Por ejemplo, si pagaste un jueves, tu cuota vence el jueves de la semana siguiente.',
            price: '$',
            discount: '$',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Precio 1/2 mes',
            info: 'La duración es de 15 días de corrido desde el día que lo abonas.',
            price: '$',
            discount: '$',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Precio mensual',
            info: 'La duración es de 30 días de corrido desde el día que lo abonas. Por ejemplo, si pagaste un 15 de mes, tu cuota mensual vence el 15 del mes siguiente.',
            price: '$21.400',
            discount: '$20.300',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Plan Personalizado ',
            info: 'El plan personalizado, solo es accesible si tenés un acuerdo con alguno de nuestros entrenadores para entrenar exclusivamente con él. Pagas menos en tu cuota mensual del gimnasio pero pagas también a tu entrenador el precio que acuerden entre ustedes. Solo es aplicable si el entrenador trabaja para Cúspide Gym.',
            price: '$17.100',
            discount: '$16.200',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Precio trimestral',
            info: 'La duración es de tres meses de corrido desde el día que lo abonas. Por ejemplo, si pagaste un 15 marzo, tu cuota trimestral vence el 15 de junio del mismo año.',
            price: '$54.100',
            discount: '$51.400',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Precio semestral',
            info: 'La duración es de seis meses de corrido desde el día que lo abonas. Por ejemplo, si pagaste un 15 de agosto, tu cuota semestral vence el 15 de febrero del año siguiente.',
            price: '$103.000',
            discount: '$97.600',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        },
        {
            title: 'Promoción anual',
            info: 'La duración es de un año de corrido desde el día que lo abonas. Por ejemplo, si pagaste un 15 de marzo, tu cuota anual vence el 15 de marzo del año siguiente.',
            price: '$192.000',
            discount: '$182.400',
            infoDiscount: 'Descuento del % pagando en efectivo.'
        }
    ]

    return (
        <div className='bg-zinc-950  max-w-7xl mx-auto'>
            <div className='mx-5 md:mx-20 py-24 '>
                <h1 className={`${montserrat.className} antialiased tracking-tighter text-3xl sm:text-5xl font-bold text-green-700`}>
                    <TextGenerateEffect words="Precios y promociones" />
                </h1>
                <p className='my-3'>Cualquiera sea el plan que elijas, incluye el pase libre (acceso a todas las clases, horarios, días, entrenadores) el tiempo que dure el plan que pagaste. <span className='font-bold'>Tené en cuenta que pagas menos si abonas en efectivo</span> .</p>
                <div className='flex flex-row flex-wrap gap-4 my-12'>
                    {precios.map((precio, index) => (
                        <div key={index} className='border border-zinc-800 bg-zinc-900 bg-opacity-70 flex flex-col gap-2 rounded-lg p-2 w-full sm:w-56'>

                            <h3 className='text-lg sm:text-xl font-semibold'>{precio.title}</h3>
                            <p className=' rounded-md p-1 text-green-500 text-lg sm:text-lg font-semibold'>{precio.price}</p>
                            <div className='bg-green-950 rounded-md p-2 text-green-500 font-medium text-sm'>
                                <span>Descuento en efectivo</span>
                                <p className='text-lg sm:text-lg text-white font-semibold'>{precio.discount}</p>
                            </div>
                            <Dialog>
                                <DialogTrigger className={buttonVariants({ variant: 'secondary' })}>+ info</DialogTrigger>
                                <DialogContent>
                                    <DialogHeader className='text-left gap-2'>
                                        <DialogTitle>{precio.title}</DialogTitle>
                                        <DialogDescription>
                                            {precio.info}
                                        </DialogDescription>
                                        <DialogDescription>
                                            {precio.infoDiscount}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactPage
