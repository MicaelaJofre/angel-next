import afa from "../../../../public/img/work/afa.jpg"
import aurora from "../../../../public/img/work/aurora.jpg"
import bandini from "../../../../public/img/work/bandini.jpeg"
import payunia from "../../../../public/img/work/exterior2.jpg"
import palmares from "../../../../public/img/work/palmares.jpeg"
import salta from "../../../../public/img/work/salta.jpg"
import WorkDetails from "./WorkDetails"

const proyects = [
  {
    title: 'Spot selección Argentina',
    subtitle: 'Alta productora Música original',
    video: '',
    img: afa
  },
  {
    title: 'Palmares Open Mall',
    subtitle: 'Gaffer, key grip y música original',
    video: '',
    img: palmares
  },
  {
    title: 'Cultural Aurora',
    subtitle: 'Sonidista y edición',
    video: '',
    img: aurora
  },
  {
    title: 'Finca Bandini',
    subtitle: 'Operador drone FPV',
    video: '',
    img: bandini
  },
  {
    title: 'Wine Ride tv',
    subtitle: 'Sonidista campo y producción',
    video: '',
    img: salta
  },
  {
    title: 'Documental Payunia',
    subtitle: 'Under Spirit Musica original',
    video: '',
    img: payunia
  },
]

const Work = () => {
  return (
    <section className="min-h-screen h-full bg-black grid grid-cols-work justify-center items-center pt-20 left-20">
      {
        proyects.map(proyect=>{
          return(
            <div key={proyect.title}>
              <WorkDetails title={proyect.title} sub={proyect.subtitle} img={proyect.img}/>
            </div>
          )
        })
      }
    </section>
  )
}

export default Work