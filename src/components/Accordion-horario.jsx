import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionHorario = () => {
    return (
        <Accordion type="single" collapsible className="max-w-7xl my-12 mx-auto text-zinc-300 dark">
            <AccordionItem value="item-1">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Lunes a Viernes</AccordionTrigger>
                <AccordionContent>
                    El gimnasio abre de corrido, de <span className="font-semibold">Lunes a Viernes de 06:30 a 23:00 horas. </span>Contamos con profesionales en todo horario para ayudarte con tu plan de entrenamiento.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Sábados y feriados</AccordionTrigger>
                <AccordionContent>
                    Los sabados y feriados el horario es cortado. <span className="font-semibold">De 08:00 a 12:00 horas por la mañana y de 16:00 a 21:00 horas por la tarde.</span> Tambien contamos con entrenadores en estos días para ayudarte.
                    <div className="my-4 bg-green-950 rounded-md text-green-600 italic px-2 py-1">Los horarios pueden estar sujeto a modificaciones los días sábados y feriados. Consultar a través de Instagram o WhatsApp</div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className='text-xl font-bold text-green-700'>Clases de Funcional</AccordionTrigger>
                <AccordionContent>
                    Abrimos de corrido, de <span className="font-semibold">Lunes Miércoles y Viernes a las 07:30, 08:30 horas por la mañana y a las 19:30 horas por la tarde. </span>
                    <div className="bg-green-950 p-3 rounded-md mt-1">
                        <h4 className="mb-1 text-green-600 font-semibold">¿Qué son las clases de fucional?</h4>
                        Son clases grupales, dinámicas, compuestas por distintos circuito de ejercicios que se realizan por tiempo o repeticiones donde se trabaja todo el cuerpo. Se realizan ejercicios de fuerza, resistencia y flexibilidad. Son clases de aproximadamente 1 hora de duración. Las clases son dictadas por profesionales encargados sola y exclusivamente de las clases grupales.
                    </div>
                </AccordionContent>
            </AccordionItem>

        </Accordion>
    )
}

export default AccordionHorario