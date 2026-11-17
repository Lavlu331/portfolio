import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

import scrt1 from './assets/scrt1.jpeg'
import scrt2 from './assets/scrt2.jpeg'
import Myphoto from './assets/Myphoto.jpeg'

export default function App() {
  const [dark, toggleTheme] = useTheme()

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main>
        <Hero photo={Myphoto} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements images={{ scrt1, scrt2 }} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
