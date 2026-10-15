import Cursor from './components/Cursor.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Contact />
      <Footer />
    </>
  )
}
