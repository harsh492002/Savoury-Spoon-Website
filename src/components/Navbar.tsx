import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-500 ${
          scrolled ? 'pt-3' : 'pt-6'
        }`}
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 lg:px-8 ${
            scrolled
              ? 'border border-[#e8871e]/15 bg-white/90 shadow-[0_8px_40px_rgba(232,135,30,0.12)] backdrop-blur-xl'
              : 'bg-white/60 backdrop-blur-md'
          }`}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="spice-ring absolute inset-0 rounded-full opacity-80" />
              <span className="relative font-display text-sm font-bold text-[#5c1a1a]">S</span>
            </div>
            <span className="hidden font-display text-lg font-semibold tracking-tight text-[#2d1810] sm:block">
              Savoury Spoon
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[#6b5344] transition-colors hover:bg-[#fdf8f3] hover:text-[#c1440e]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#menu"
            className="hidden rounded-full bg-[#2d1810] px-5 py-2 text-sm font-semibold text-[#fdf8f3] transition-all hover:bg-[#5c1a1a] hover:shadow-lg md:inline-block"
          >
            View Menu
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-[#2d1810] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-3xl border border-[#e8871e]/10 bg-white shadow-2xl md:hidden"
          >
            <ul className="flex flex-col p-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-5 py-3.5 text-sm font-medium text-[#4a3728] transition-colors hover:bg-[#fdf8f3] hover:text-[#c1440e]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-1 border-t border-[#f5ebe0] pt-1">
                <a
                  href="#menu"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl bg-[#2d1810] px-5 py-3.5 text-center text-sm font-semibold text-white"
                >
                  View Menu
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
