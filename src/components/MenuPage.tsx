import { Link } from 'react-router-dom'
import MenuSection from './MenuSection'
import StableMenuQR from './StableMenuQR'

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#4a3728] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-[#e8871e]/10 bg-white/80 p-6 shadow-[0_12px_48px_rgba(45,24,16,0.06)] backdrop-blur md:flex-row md:items-end md:justify-between md:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c1440e]">
              Savoury Spoon
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-[#2d1810] sm:text-5xl">
              Menu screen
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6b5344]">
              Scan the QR code to open the menu instantly. It points to a stable route, so it
              stays valid even if the menu layout or content is updated later.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-[#2d1810]/10 bg-[#fdf8f3] px-5 py-2.5 text-sm font-semibold text-[#2d1810] transition-all hover:border-[#e8871e]/40 hover:text-[#c1440e]"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-8">
          <StableMenuQR />
        </div>

        <div className="mt-10">
          <MenuSection />
        </div>
      </div>
    </div>
  )
}
