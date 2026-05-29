import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#2d1810]/8 bg-[#fdf8f3] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="spice-ring absolute inset-0 rounded-full opacity-70" />
              <span className="relative font-display text-sm font-bold text-[#5c1a1a]">S</span>
            </div>
            <div>
              <span className="font-display text-xl font-semibold text-[#2d1810]">Savoury Spoon</span>
              <p className="text-xs text-[#9a7b6a]">Bold spices. Honest food.</p>
            </div>
          </div>

          <p className="flex items-center gap-1.5 text-sm text-[#6b5344]">
            Made with <Heart className="h-3.5 w-3.5 fill-[#c1440e] text-[#c1440e]" /> and bold spices
          </p>

          <p className="text-xs text-[#9a7b6a]">
            &copy; {new Date().getFullYear()} Savoury Spoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
