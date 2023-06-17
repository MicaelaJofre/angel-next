import { Inter } from 'next/font/google'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` ${inter.className}`}
    >
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </main>
  )
}
