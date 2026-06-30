import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { menuCategories } from '../data/menu'

export default function Menu() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('the-egg')

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#4a3728] pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-[#6b5344]">
            Explore our carefully crafted dishes
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-4">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="border-2 border-[#e8d4c4] rounded-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() =>
                  setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )
                }
                className="w-full p-6 bg-gradient-to-r from-[#f5e6d3] to-[#ede0d1] hover:from-[#ede0d1] hover:to-[#e5d9ca] transition-all flex items-center justify-between"
                style={{
                  borderBottom:
                    expandedCategory === category.id
                      ? `3px solid ${category.accent}`
                      : 'none',
                }}
              >
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: category.accent }}>
                    {category.chapter}
                  </p>
                  <h2 className="text-2xl font-bold mb-1">{category.title}</h2>
                  <p className="text-sm text-[#6b5344]">{category.subtitle}</p>
                </div>
                <ChevronDown
                  size={24}
                  className={`transition-transform ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                  style={{ color: category.accent }}
                />
              </button>

              {/* Category Items */}
              {expandedCategory === category.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 bg-white space-y-4"
                >
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="border-l-4 pl-4 py-3"
                      style={{ borderColor: category.accent }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            {item.tag && (
                              <span
                                className="text-xs font-semibold px-2 py-1 rounded-full text-white"
                                style={{ backgroundColor: category.accent }}
                              >
                                {item.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#6b5344] mb-2">
                            <span className="font-semibold">Ingredients:</span> {item.ingredients}
                          </p>
                          <p className="text-sm text-[#6b5344]">
                            <span className="font-semibold">Method:</span> {item.method}
                          </p>
                        </div>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 bg-white rounded-lg border-2 border-[#e8d4c4]"
        >
          <h3 className="text-xl font-bold mb-4">Share This Menu</h3>
          <p className="text-[#6b5344] mb-6">Scan the QR code to share this menu with others</p>
          <img
            src="/qr-code.jpg"
            alt="Menu QR Code"
            className="w-48 h-48 mx-auto border-4 border-[#e8d4c4] rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}
