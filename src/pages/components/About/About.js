import Image from "next/image"
import aboutDrone from "../../../../public/img/about/droneAngel.jpeg"
import cartel from "../../../../public/img/about/angelCartel.jpeg"
import Play from "../icons/Play"
import { useState } from "react"
import Modal from "../utils/Modal"

const About = () => {
  const [show, setShow] = useState(false)
  const handleModal = () => {
    setShow(!show)
  }
  return (
    <section className="min-h-screen h-full bg-black flex justify-center items-center">
      <article className="flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-12 text-gray2 font-medium text-sm px-5 lg:px-0 py-10">
        <div className="w-full lg:w-7/12 h-auto flex justify-center items-start relative">
          <Image className="max-w-xl w-full h-full max-h-[685px] object-cover opacity-50" src={aboutDrone} width={1000} height={700} alt="Angel Pelletan sentado"/>
          <div onClick={handleModal} className="text-white bg-gray3/20 rounded-full p-7 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer">
            <Play width={30} height={30}/>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-between w-full lg:w-7/12 gap-7">
          <div className="leading-6 max-w-2xl lg:w-11/12">
            <p><span class="font-bold text-gray3">Soy un artista creativo </span> con amplia experiencia en producción musical e ingeniería de sonido. He pasado por varias etapas en mi carrera, acumulando más de 10 años de experiencia en los medios de música comercial y audiovisuales. Actualmente, desempeño el rol de productor musical y editor en Anónimo Films, una productora de contenidos audiovisuales ubicada en el oeste de Argentina.</p>
            <p>Comencé mi formación en estudios de grabación y luego me especialicé en la técnica de sonido y producción musical en la academia Cetear. Para ampliar mis conocimientos, decidí tomar diversos cursos en la Universidad de Mendoza, lo que me permitió comprender claramente el idioma y los objetivos del medio. A partir de entonces, me he convertido en un autodidacta del medio audiovisual, explorando un amplio camino lleno de posibilidades gracias a mi conocimiento adquirido.</p>
          </div>
          <div className="w-full lg:w-11/12 flex justify-center">
            <Image className="opacity-50 max-w-2xl w-full h-full max-h-[345px] object-cover " src={cartel} width={1000} height={500} alt="Angel Pelletan piloteando drone"/>
          </div>
        </div>
      </article>
      {
        show 
        ? <Modal handleModal={handleModal}/>
        : null
      }
    </section>
  )
}

export default About