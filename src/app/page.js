
import Image from "next/image";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { montserrat } from "@/ui/fonts";
import AccordionHorario from "@/components/Accordion-horario";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {

  const info = [

    {
      title: '¿POR QUÉ ENTRENAR CON NOSOTROS?',
      description: 'Porque contamos con entrenadores capacitados en todo horario, quienes adaptan tus entrenamientos a tus necesidades y metas. Además, contamos con clases grupales de funcional.'
    },
    {
      title: '¿QUÉ HACEMOS?',
      description: 'Ofrecemos entrenamiento personalizado, adaptado a tus necesidades y objetivos. Tenemos todo lo que necesitas para potenciar tu rendimiento deportivo o mejorar tu salud.'
    },
    {
      title: '¿CÓMO TRABAJAMOS?',
      description: 'Cada vez que vengas, encontrarás a alguno de nuestros entrenadores quien te preparará un entrenamiento personalizado y te ayudará a ejecutarlo.'
    }
  ]
  return (
    <main className="flex flex-col">
      <section className="flex flex-col h-[48rem] bg-zinc-950 md:flex-col items-center justify-between">
        <div className=" items-center flex flex-col gap-3 mx-5 sm:mx-16">
          <Image
            src='/cuspide-solo-logo.png'
            alt='Cuspide logo'
            width={200}
            height={200}
            quality={100}
            className="sm:h-40 sm:w-fit md:h-[150px] md:w-fit mt-24"
          />
          <div className="items-center flex flex-col">
            <h1 className={`${montserrat.className} antialiased`}>
              <TextGenerateEffect words="DON&apos;T DREAM FOR IT, TRAIN FOR IT." className="text-6xl md:text-8xl font-black drop-shadow-lg tracking-tight leading-none sm:max-w-6xl text-center text-white" />
            </h1>
            <p className=" text-green-700 italic font-semibold tracking-tight leading-tight text-xs sm:text-md text-center">Entrenamientos personalizados para mejorar tu salud o rendimiento deportivo.</p>
          </div>
          <div className="flex gap-3">
            <Link href='/services' className={buttonVariants({ variant: 'default' })}>Información</Link>
            <Link href='/about' className={buttonVariants({ variant: 'outline' })}>Nosotros</Link>
          </div>
        </div>
      </section>
      <section className="mb-24">
        <div className="mx-5 sm:mx-16">
          <h2 className="text-4xl max-w-7xl mx-auto sm:text-5xl text-green-700 font-bold tracking-tighter">Nuestros horarios</h2>
          <div>
            <AccordionHorario />
          </div>
        </div>
      </section>
      <section className="bg-zinc-900 ">
        <div className="grid sm:grid-cols-1 gap-y-12 sm:gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 sm:mx-16 my-24 items-center text-center mx-4 justify-center">
          {info.map((item, index) => (
            <div key={index} className="max-w-[28rem] mx-auto sm:h-56 h-64 bg-zinc-950 border border-zinc-700 shadow-md sm:py-4 py-2 px-2 rounded-lg grid flex-col justify-around hover:scale-105 cursor-pointer duration-200">
              <Image
                src='/cuspide-solo-logo.png'
                alt='Cuspide logo'
                width={40}
                height={40}
                quality={100}
                className="mx-auto h-fit w-fit"
              />
              <h2 className={`${montserrat.className} sm:text-xl h-min text-lg font-black max-w-sm mx-auto text-green-700`}>{item.title}</h2>
              <p className="text-sm leading-tight tracking-tight text-zinc-400 italic">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
