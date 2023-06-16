import Image from "next/image"
import Instagram from "../icons/Instagram"
import WhatsApp from "../icons/WhatsApp"
import bgHero from "../../../../public/img/bg-img/micro.jpg"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
  return (
    <section className="flex flex-col items-center-center h-[70vh] sm:h-screen gap-3">
      <Image className="h-full w-auto sm:w-full sm:h-auto fixed -z-10 brightness-50 object-cover" src={bgHero} width={1000} height={1000} alt="micrófono de fondo"/>
      <article className="flex w-full pl-4 pt-6 sm:pl-12 sm:pt-12 gap-3 ">
        <a className="text-gray2 bg-gray1 rounded-full w-12 h-12 flex justify-center items-center hover:text-graySelect" href='https://www.instagram.com/antino_beats/' target="_blank">
          <Instagram width={20} height={20}/>
        </a>
        <a className="text-gray2 bg-gray1 rounded-full w-12 h-12 flex justify-center items-center hover:text-graySelect" href='https://api.whatsapp.com/send?phone=5492615954434' target="_blank">
          <WhatsApp width={20} height={20}/>
        </a>
      </article>
      <article className="flex justify-between items-center h-3/5 sm:h-full p-4 sm:p-0">
        <div className="text-white flex flex-col w-full gap-8 justify-center items-center">
          <h1 className="text-6xl font-extrabold uppercase tracking-wider">Antino</h1>
          <p className="text-sm font-bold text-center text-graySelect">Productor Musical / Realizador audivisual / Ingeniero de sonido</p>
        </div >
        <Navbar/>
      </article>
    </section>
  )
}
export default Hero