import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoIosWarning } from "react-icons/io";

const AccordionInstalaciones = () => {
    return (
        <Accordion type="single" collapsible className="max-w-7xl my-12 mx-auto text-zinc-300 dark ">
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Espacios</AccordionTrigger>
                <AccordionContent className='sm:text-md text-sm'>
                    Contamos con espacios amplios para que puedas completar tus entrenamientos con una comodida única. Tenemos un amplio espacio con pasto sintético en la terraza con un mancuernero, estructuras con pasamanos, cajones, trineo de empuje y arrastre y racks de sentadillas y bancos regulables. Bajo techo tambien contamos con un espacio abierto de pasto sintético, un espacio en el que se encuentran las mancuernas y los bancos regulables y un espacio para las maquinas.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Máquinas</AccordionTrigger>
                <AccordionContent>
                    Las maquinas que tenemos son:
                    <ul className="my-2">
                        <li>• Prensa</li>
                        <li>• Hack</li>
                        <li>• Maquina Smith</li>
                        <li>• Máquina de aducción y abducción</li>
                        <li>• Sillón de cuádriceps</li>
                        <li>• Sillón de femorales</li>
                        <li>• Dos máquinas de jalón con distintos agarres.</li>
                        <li>• Máquina de remo</li>
                        <li>• Máquina apertura anterior y posterior</li>
                        <li>• Máquinas de empuje horizontal y vertical</li>
                        <li>• Máquina de patada de glúteos </li>
                        <li>• Máquina de bíceps Scott</li>
                        <li>• Máquina de dominadas y fondos</li>
                        <li>• Cuatro poleas con distinto agarres y regulables en dos ejes</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Bancos y Racks</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>• Cuatro bancos regulables</li>
                        <li>• Dos bancos para press plano</li>
                        <li>• Un banco para press inclinado</li>
                        <li>• Un banco para press militar</li>
                        <li>• Un banco para hip thrust</li>
                        <li>• Dos bancos fijos a 90°</li>
                        <li>• Dos plataformas de levantamiento</li>
                        <li>• Siete racks de sentadilla (Cuatro afuera y tres adentro)</li>
                        <li>• Múltiples racks de sentadilla y plataformas de levantamiento</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Barras y mancuernas</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>• Barras cortas de 8, 10, 12 y 15kg</li>
                        <li>• Barras largas de 10, 15, 18 y 20kg</li>
                        <li>• Discos engomados y de hierro desde un kilo hasta 20kg</li>
                        <li>• Mancuernas de hierro y engomadas</li>
                        <li>• Mancuernas desde 1 hasta 40kg</li>
                        <li>• Pesas rusas de 3, 6, 9, 12, 21 y 25kg</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Otros elementos</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        <li>• Bandas elásticas de todas las tensiones y tamaños</li>
                        <li>• Tensores elasticos</li>
                        <li>• TRX</li>
                        <li>• Foam rollers</li>
                        <li>• Pelotas de pilates</li>
                        <li>• Colchonetas</li>
                        <li>• Steps</li>
                        <li>• Bosus</li>
                        <li>• Conos</li>
                        <li>• Vallas</li>
                        <li>• Mini trampolin</li>
                        <li>• Fitballs de distintos tamaños</li>
                        <li>• Sand bags de 5, 10, 12, 15, 20kg</li>
                        <li>• Medicine balls de 3, 5, 6, 8, 9, 12, 15, 16kg</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}

export default AccordionInstalaciones