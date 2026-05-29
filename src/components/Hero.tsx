import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const showcaseImages = [
  {
    src: '/Images/EggDish6.jpg',
    alt: 'Masala omelet',
    label: 'The Egg',
    rotate: '-rotate-3',
    z: 'z-20',
    position: 'left-[2%] top-[8%] w-[38%]',
  },
  {
    src: '/Images/Vadapav1.jpg',
    alt: 'Vada pav',
    label: 'Street Food',
    rotate: 'rotate-2',
    z: 'z-10',
    position: 'right-[2%] top-[18%] w-[36%]',
  },
  {
    src: '/Images/OreoShake1.jpg',
    alt: 'Oreo shake',
    label: 'Beverages',
    rotate: '-rotate-1',
    z: 'z-30',
    position: 'left-[28%] bottom-[5%] w-[44%]',
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#fdf8f3]" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 70% 20%, rgba(232,135,30,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 10% 80%, rgba(193,68,14,0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 90% 90%, rgba(26,138,125,0.08) 0%, transparent 45%)
          `,
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Large watermark */}
      <div className="pointer-events-none absolute -right-16 top-32 select-none font-display text-[22rem] font-bold leading-none text-[#2d1810]/[0.03] lg:text-[28rem]">
        S
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-16 pt-32 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-0 lg:pt-28">
        {/* Copy */}
        <div className="relative z-10 lg:pr-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#e8871e]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c1440e]">
              Est. with love & spice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[#2d1810] sm:text-6xl lg:text-[4.5rem]"
          >
            Where Every
            <br />
            <em className="text-shimmer not-italic">Spoonful</em>
            <br />
            <span className="font-normal italic text-[#6b5344]">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-md text-base leading-relaxed text-[#6b5344] sm:text-lg"
          >
            Fourteen legendary egg creations, Mumbai street classics, and soul-warming
            plates — cooked fresh, served with heart.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-[#c1440e] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(193,68,14,0.35)] transition-all hover:bg-[#a3380b] hover:shadow-[0_16px_48px_rgba(193,68,14,0.4)]"
            >
              Explore Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="rounded-full border-2 border-[#2d1810]/10 px-8 py-4 text-sm font-semibold text-[#2d1810] transition-all hover:border-[#e8871e]/40 hover:bg-white"
            >
              Our Story
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14 flex gap-10 border-t border-[#2d1810]/8 pt-8"
          >
            {[
              { num: '27+', label: 'Dishes' },
              { num: '4', label: 'Chapters' },
              { num: '100%', label: 'Fresh Cooked' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-[#2d1810]">{stat.num}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-[#9a7b6a]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto hidden h-[580px] w-full max-w-lg lg:block"
        >
          {/* Decorative ring */}
          <div className="spice-ring animate-float absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30" />

          {showcaseImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
              className={`absolute ${img.position} ${img.z} ${img.rotate}`}
            >
              <div className="group overflow-hidden rounded-[1.75rem] border-4 border-white shadow-[0_20px_60px_rgba(45,24,16,0.18)] transition-transform duration-500 hover:scale-[1.02]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1810]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#c1440e] backdrop-blur-sm">
                    {img.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-1/2 z-40 rounded-2xl border border-white/80 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm"
          >
            <p className="font-display text-2xl font-bold text-[#c1440e]">★ 4.9</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-[#9a7b6a]">
              Guest Favourite
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f5ebe0"
          />
        </svg>
      </div>
    </section>
  )
}
