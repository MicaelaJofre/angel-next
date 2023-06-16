import VideoCamera from "../icons/VideoCamera"
import VideoPlay from "../icons/VideoPlay"
import ServicesDetails from "./ServicesDetails"

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
    <section className="min-h-screen h-full bg-black pt-5 pl-20">
      <article className="flex items-center gap-8">
        {
          services.map(serv => {
            return(
              <div key={serv.title} className="w-1/3">
                <ServicesDetails title={serv.title} descriptions={serv.descriptions} Svg={serv.Svg}/>
              </div>
            )
          })
        }
      </article>
      <article>

      </article>
    </section>
  )
}

export default Services