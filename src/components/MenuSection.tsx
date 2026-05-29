import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuCategories } from '../data/menu'
import DishCard from './DishCard'

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  const current = menuCategories.find((c) => c.id === activeCategory) ?? menuCategories[0]
  const featured = current.items[0]
  const rest = current.items.slice(1)

  return (
    <section id="menu" className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 bg-[#fdf8f3]" />
      <div className="grain absolute inset-0" />

      {/* Watermark chapter */}
      <div
        className="pointer-events-none absolute right-0 top-20 select-none font-display text-[10rem] font-bold leading-none opacity-[0.03] lg:text-[16rem]"
        style={{ color: current.accent }}
      >
        {current.chapter.replace('Chapter ', '')}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e8871e]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c1440e]">
              Our Menu
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold text-[#2d1810] sm:text-5xl lg:text-6xl">
            Curated for Every
            <span className="italic text-[#c1440e]"> Craving</span>
          </h2>
          <p className="mt-4 text-[#6b5344]">
            Four chapters of flavour — tap a category to explore our full collection.
          </p>
        </motion.div>

        {/* Category selector — horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 -mx-6 overflow-x-auto px-6 pb-2 lg:mx-0 lg:overflow-visible lg:px-0"
        >
          <div className="flex min-w-max gap-3 lg:min-w-0 lg:flex-wrap">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative overflow-hidden rounded-2xl px-6 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'border border-[#2d1810]/8 bg-white text-[#4a3728] hover:border-[#e8871e]/30 hover:shadow-md'
                  }`}
                  style={
                    isActive
                      ? {
                          backgroundColor: cat.accent,
                          boxShadow: `0 12px 40px ${cat.accentLight}`,
                        }
                      : undefined
                  }
                >
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      isActive ? 'text-white/70' : 'text-[#9a7b6a]'
                    }`}
                  >
                    {cat.chapter}
                  </span>
                  <p className={`mt-0.5 font-display text-lg font-semibold ${isActive ? 'text-white' : 'text-[#2d1810]'}`}>
                    {cat.title}
                  </p>
                  <p className={`mt-0.5 text-xs ${isActive ? 'text-white/60' : 'text-[#9a7b6a]'}`}>
                    {cat.items.length} dishes
                  </p>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Category hero + featured dish */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-14"
          >
            {/* Featured bento item */}
            <div className="mb-8 overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_48px_rgba(45,24,16,0.08)] lg:grid lg:grid-cols-2">
              <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
                <img
                  src={featured.image.replace('w=640&h=480', 'w=900&h=700')}
                  alt={featured.name}
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-30 mix-blend-multiply"
                  style={{ background: `linear-gradient(135deg, ${current.accent}, transparent)` }}
                />
                {featured.tag && (
                  <span
                    className="absolute left-6 top-6 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white"
                    style={{ backgroundColor: current.accent }}
                  >
                    {featured.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span
                  className="text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: current.accent }}
                >
                  Signature Pick
                </span>
                <h3 className="mt-3 font-display text-4xl font-bold text-[#2d1810] lg:text-5xl">
                  {featured.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#6b5344]">
                  {featured.ingredients}
                </p>
                <div className="my-6 h-px bg-[#2d1810]/8" />
                <p className="text-sm italic leading-relaxed text-[#9a7b6a]">
                  {featured.method}
                </p>
              </div>
            </div>

            {/* Rest of dishes */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((item, i) => (
                <DishCard key={item.name} item={item} category={current} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
