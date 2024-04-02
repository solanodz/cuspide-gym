import { CountUp } from '@/components/count-up'
import { TextGenerateEffect } from '@/components/text-generate-effect'
import { montserrat } from '@/ui/fonts'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='mx-auto bg-zinc-950'>
            <div className='mx-5 max-w-7xl md:mx-auto pt-24 flex sm:flex-row flex-col justify-between items-start'>
                <div>
                    <h1 className={`${montserrat.className} antialiased tracking-tighter text-3xl sm:text-5xl font-bold text-green-700`}>
                        <TextGenerateEffect words="Sobre nosotros" />
                    </h1>
                    <div className={`${montserrat.className} max-w-7xl my-12 flex gap-4 flex-wrap`}>
                        <div className='py-1 text-green-700 h-20 sm:h-32 w-full sm:w-40 justify-around flex flex-col bg-gradient-to-t from-green-950 border border-green-950 to-transparent drop-shadow-md rounded-lg text-center items-center my-auto gap-2'>
                            <p className='text-3xl sm:text-4xl font-black'>+<CountUp end={5} start={0} timer={500} /></p>
                            <p className='text-sm tracking-tighter sm:text-lg leading-5 font-bold'>ENTRENADORES</p>
                        </div>
                        <div className='py-1 text-green-700 h-20 sm:h-32 w-full sm:w-40 justify-around flex flex-col bg-gradient-to-t from-green-950 border border-green-950 to-transparent drop-shadow-md rounded-lg text-center items-center my-auto gap-2'>
                            <p className='text-3xl sm:text-4xl font-black'>+<CountUp end={10} start={0} timer={400} /></p>
                            <p className='text-sm tracking-tighter sm:text-lg leading-5 font-bold'>AÑOS DE EXPERIENCIA</p>
                        </div>
                        <div className='py-1 text-green-700 h-20 sm:h-32 w-full sm:w-40 justify-around flex flex-col bg-gradient-to-t from-green-950 border border-green-950 to-transparent drop-shadow-md rounded-lg text-center items-center my-auto gap-2'>
                            <p className='text-3xl sm:text-4xl font-black'>+<CountUp end={400} start={0} timer={30} /></p>
                            <p className='text-sm tracking-tighter sm:text-lg leading-5 font-bold'>SOCIOS MENSUALES</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src='/cuspide-logo.png'
                        alt='Cuspide logo'
                        width={1000}
                        height={1000}
                        quality={100}
                        className="sm:w-fit sm:h-[200px] md:h-[300px] md:w-fit  object-contain"
                    />
                </div>
            </div>
            <div className=''>
                <div className='flex md:flex-row flex-col-reverse md:mx-auto pt-12 gap-8 items-start justify-between'>
                    {/* <Image
                        src='/cuspide-poleas.jpg'
                        alt='Cuspide logo'
                        width={600}
                        height={1000}
                        quality={100}
                        className="sm:h-fit sm:w-fit md:h-[600px] md:w-fit sm:mx-auto justify-center rounded-3xl object-contain"
                    /> */}
                    <div className=' flex flex-col w-full tracking-tight text-md sm:text-xl sm:mx-0 text-zinc-100  py-12 font-medium'>
                        <div className='max-w-7xl mx-auto px-3 flex flex-col gap-4'>
                            <p>
                                Cúspide te brinda un espacio muy familiar y amigable, donde podrás entrenar con la tranquilidad de que siempre habrá alguien para ayudarte con tus entrenamientos.
                            </p>
                            <p>
                                Nuestros entrenadores están capacitados para ayudarte a lograr tus objetivos, ya sea mejorar tu salud o rendimiento deportivo. Confían y confiaron en nosotros deportistas amateurs y deportistas de alto nivel, como jugadores de fútbol, rugby, hockey, golf, entre otros. También personas que buscan mejorar su calidad de vida y salud. Tuvimos la experiencia de trabajar con personas de entre 10 y hasta 80 años. Sabemos sobre entrenamiento, salud y deporte siempre pensando en ayudar a nuestros clientes a cumplir sus objetivos.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
            <div className='flex flex-col'>

                <video
                    src='/cuspide-video-muted.mp4'
                    autoPlay
                    loop
                    muted
                    // quality={100}
                    className='w-full h-[18rem] sm:h-[40rem] object-cover opacity-70'
                />
                <Image
                    src='/fondo.png'
                    alt='Cuspide logo'
                    width={2500}
                    height={2000}
                    quality={100}

                    className="sm:h-fit sm:w-fit md:h-fit md:w-fit sm:mx-auto justify-center object-contain brightness-50 "
                />
            </div>
        </div>
    )
}

export default AboutPage
