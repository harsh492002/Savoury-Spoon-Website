import { motion } from 'framer-motion'
import type { MenuItem, MenuCategory } from '../data/menu'

interface DishCardProps {
  item: MenuItem
  category: MenuCategory
  index: number
}

export default function DishCard({ item, category, index }: DishCardProps) {
  const ingredientList = item.ingredients.split(',').map((s) => s.trim()).slice(0, 4)

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_4px_24px_rgba(45,24,16,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(45,24,16,0.12)]"
    >
      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d1810]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {item.tag && (
          <span
            className="absolute right-4 top-4 rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white shadow-md"
            style={{ backgroundColor: category.accent }}
          >
            {item.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold text-[#2d1810] transition-colors group-hover:text-[#c1440e]">
          {item.name}
        </h3>

        {/* Ingredient pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {ingredientList.map((ing) => (
            <span
              key={ing}
              className="rounded-full px-2.5 py-0.5 text-[10px] font-medium"
              style={{
                backgroundColor: category.accentLight,
                color: category.accent,
              }}
            >
              {ing.length > 18 ? `${ing.slice(0, 16)}…` : ing}
            </span>
          ))}
          {item.ingredients.split(',').length > 4 && (
            <span className="rounded-full bg-[#f5ebe0] px-2.5 py-0.5 text-[10px] font-medium text-[#9a7b6a]">
              +more
            </span>
          )}
        </div>

        <p className="mt-3 flex-1 text-xs leading-relaxed text-[#9a7b6a]">
          {item.method}
        </p>

        {/* Bottom accent line */}
        <div
          className="mt-4 h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-full"
          style={{ backgroundColor: category.accent }}
        />
      </div>
    </motion.article>
  )
}
