const iconNav = [
  {
    name: 'Inicio',
    target: 'home'
  },
  {
    name: 'Sobre Mi',
    target: 'about'
  },
  {
    name: 'Servicios',
    target: 'services'
  },
  {
    name: 'Videos',
    target: 'videos'
  },
  {
    name: 'Audios',
    target: 'audios'
  },
  {
    name: 'Contacto',
    target: 'contact'
  }
]

const Navbar = () => {

  return (
    <section className='hidden z-20 sm:flex w-36 flex-col justify-center items-end gap-6 pr-8 fixed right-8 text-graySelect'>
      {
        iconNav.map(icon=>{
          return(
            <a href={`#${icon.target}`} className="flex justify-center items-center select-nav" key={icon.name}>
              <p className="opacity-0 text-xs text-icon py-1 px-3 rounded-sm">{icon.name}</p>
              <div className="border-icon rounded-full w-4 h-4 flex justify-center items-center" >
                <div className="flex justify-center items-center w-1 h-1 bg-gray2 rounded-full circle-icon"></div>
              </div>
            </a>
          )
        })
      }
    </section>
  )
}
export default Navbar
