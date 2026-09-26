import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuSection from './components/MenuSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Menu from './components/Menu'

function PaymentPage() {
  return (
    <main className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fdf8f3] px-6 py-12 text-[#4a3728]">
      <div className="relative z-10 grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <section className="max-w-xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#c1440e]">
            Savoury Spoon
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-[#2d1810] sm:text-5xl">
            Please pay the development fee
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#6e5a4a]">
            Scan the QR code to complete payment. Once payment is confirmed, our team will activate the service.
          </p>
        </section>
        <div className="mx-auto w-full max-w-[320px] rounded-lg border border-[#eadbcc] bg-white p-5 shadow-[0_18px_55px_rgba(74,55,40,0.12)]">
          <img
            src="/PhonePayQR/QR.jpeg"
            alt="Payment QR code"
            className="aspect-square w-full object-contain"
          />
          <p className="mt-4 text-center text-sm font-medium text-[#4a3728]">
            Scan to pay
          </p>
        </div>
      </div>
    </main>
  )
}

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

function MenuPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#4a3728] antialiased">
      <Navbar />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  if (import.meta.env.VITE_SHOW_PAYMENT_PAGE === 'true') {
    return <PaymentPage />
  }

  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  )
}
