import VideoCamera from "../icons/VideoCamera"
import VideoPlay from "../icons/VideoPlay"
import ServicesDetails from "./ServicesDetails"
import ServicesInfo from "./ServicesInfo"

const services = [
  {
    Svg : VideoPlay,
    title: 'PRODUCCIÓN MUSICAL',
    descriptions: [
      'Coordinación de tareas y producción.',
      'Sonidista de campo y foley para la creación de efectos de sonido.',
      'Especializado en composición de música comercial y banda sonora, con habilidades profesionales en edición de audio y masterización.',
      'Dominio de software de edición de sonido como Ableton Live, Protools y TC Electronic Finalizer.'
    ]
  },
  {
    Svg : VideoCamera,
    title: 'PRODUCCIÓN AUDIVISUAL',
    descriptions: [
      'Editor de video.',
      'Asistente de cámara.',
      'Operador drone FPV.',
      'Key grip.',
      'Gaffer.',
      'Dominio de software de edición de video como Adobe Premiere, Gyroflow y Davinci Resolve.'
    ]
  }
]

const Services = () => {
  return (
    <section className="min-h-screen h-full bg-black py-10 flex flex-col gap-20">
      <article className="flex flex-wrap gap-12 md:gap-8 p-5 md:pl-20 ">
        {
          services.map(serv => {
            return(
              <div key={serv.title} className="w-full md:w-1/3">
                <ServicesDetails title={serv.title} descriptions={serv.descriptions} Svg={serv.Svg}/>
              </div>
            )
          })
        }
      </article>
      <article>
        <ServicesInfo/>
      </article>
    </section>
  )
}

export default Services