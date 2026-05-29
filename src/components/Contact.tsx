import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const hours = [
  { day: 'Mon – Fri', time: '8:00 AM – 10:00 PM' },
  { day: 'Sat – Sun', time: '9:00 AM – 11:00 PM' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#2d1810] py-28 text-[#fdf8f3] lg:py-36">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 20% 50%, rgba(232,135,30,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(193,68,14,0.2) 0%, transparent 50%)
          `,
        }}
      />
      <div className="grain absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8871e]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8871e]">
                Visit Us
              </span>
            </div>

            <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Come Hungry,
              <span className="mt-1 block italic text-[#e8871e]">Leave Happy</span>
            </h2>
            <p className="mt-6 max-w-md text-[#c4a882]">
              Walk in anytime or reach out to plan your visit. We'd love to serve you a
              meal worth remembering.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { icon: MapPin, label: 'Address', value: '526 Romford road' },
                { icon: Phone, label: 'Phone', value: '07359 114572' },
                { icon: Mail, label: 'Email', value: 'hello@savouryspoon.com' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 p-4 transition-all hover:border-[#e8871e]/30 hover:bg-white/8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8871e]/15">
                    <item.icon className="h-5 w-5 text-[#e8871e]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#9a7b6a]">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-[#fdf8f3]">{item.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-[#e8871e] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Hours card */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8871e]/20">
                  <Clock className="h-5 w-5 text-[#e8871e]" />
                </div>
                <h3 className="font-display text-2xl font-semibold">Opening Hours</h3>
              </div>
              <div className="mt-6 space-y-4">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between border-b border-white/8 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-[#c4a882]">{h.day}</span>
                    <span className="font-semibold text-[#e8871e]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card with food image */}
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src="https://images.unsplash.com/photo-1510693206972-dab09808c104?auto=format&fit=crop&w=800&h=400&q=85"
                alt="Fresh food"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d1810] via-[#2d1810]/70 to-[#2d1810]/30" />
              <div className="relative p-8 pt-32">
                <p className="font-display text-2xl font-bold italic">
                  Ready to taste the difference?
                </p>
                <a
                  href="#menu"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#e8871e] px-7 py-3.5 text-sm font-semibold text-[#2d1810] transition-all hover:bg-[#f5a030] hover:shadow-[0_8px_32px_rgba(232,135,30,0.4)]"
                >
                  Browse Full Menu
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
