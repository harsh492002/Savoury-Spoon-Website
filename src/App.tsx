import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MenuPage from './components/MenuPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#4a3728] antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  )
}
