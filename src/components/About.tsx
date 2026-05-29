import { motion } from 'framer-motion'
import { Flame, Heart, Sparkles } from 'lucide-react'

const values = [
  {
    icon: Heart,
    num: '01',
    title: 'Made with Passion',
    description: 'Every dish prepared fresh with authentic spices and time-honoured techniques passed down through generations.',
    accent: '#c1440e',
  },
  {
    icon: Flame,
    num: '02',
    title: 'Served Hot & Fresh',
    description: 'From the tawa to your table — cooked to order, never pre-made, always piping hot.',
    accent: '#e8871e',
  },
  {
    icon: Sparkles,
    num: '03',
    title: 'Quality Ingredients',
    description: 'Farm-fresh eggs, hand-picked produce, and premium spices — because great food starts at the source.',
    accent: '#1a8a7d',
  },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f5ebe0] py-28 lg:py-36">
      <div className="grain absolute inset-0" />

      {/* Decorative chapter mark */}
      <div className="pointer-events-none absolute left-8 top-16 font-display text-[8rem] font-bold leading-none text-[#2d1810]/[0.04] lg:left-16 lg:text-[12rem]">
        01
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
          {/* Left — sticky story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#c1440e]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c1440e]">
                Our Story
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-[#2d1810] sm:text-5xl lg:text-[3.25rem]">
              A Kitchen Built on
              <span className="mt-1 block italic text-[#c1440e]">Flavour & Love</span>
            </h2>

            <p className="mt-7 text-base leading-relaxed text-[#6b5344] sm:text-lg">
              Savoury Spoon started with a simple idea: serve extraordinary food that everyone
              can enjoy. Our menu celebrates the humble egg in fourteen spectacular ways,
              alongside street-food favourites and comforting classics.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#6b5344] sm:text-lg">
              From a fiery Schezwan Chowmein to our legendary Chef Special 8 Idiots — every
              plate is made to order, because your satisfaction is our greatest recipe.
            </p>

            {/* Feature image strip */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                '/Images/EggDish1.jpg',
                '/Images/EggDish2.jpg',
                '/Images/EggDish3.jpg',
              ].map((id) => (
                <div key={id} className="aspect-square overflow-hidden rounded-2xl border-2 border-white shadow-md">
                  <img
                    src={id}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — value cards */}
          <div className="space-y-5">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-white p-7 shadow-[0_4px_24px_rgba(45,24,16,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(45,24,16,0.1)]"
              >
                <span
                  className="absolute -right-2 -top-4 font-display text-8xl font-bold opacity-[0.04]"
                  style={{ color: value.accent }}
                >
                  {value.num}
                </span>

                <div className="relative flex gap-5">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${value.accent}15` }}
                  >
                    <value.icon className="h-6 w-6" style={{ color: value.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#2d1810]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b5344]">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: value.accent }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
