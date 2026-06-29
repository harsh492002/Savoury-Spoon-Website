export default function StableMenuQR() {
  return (
    <div className="rounded-[2rem] border border-[#e8871e]/15 bg-white p-6 shadow-[0_12px_48px_rgba(45,24,16,0.08)] lg:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c1440e]">
            Scan to view
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-[#2d1810] sm:text-4xl">
            Static QR menu
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#6b5344]">
            This QR is stored as a fixed image file in the app, so it stays unchanged in both
            local development and production builds.
          </p>
          <a
            href="/menu"
            className="mt-6 inline-flex rounded-full bg-[#2d1810] px-5 py-2.5 text-sm font-semibold text-[#fdf8f3] transition-all hover:bg-[#5c1a1a]"
          >
            Open menu in browser
          </a>
        </div>

        <div className="flex flex-col items-center rounded-[1.75rem] bg-[#fffaf3] p-4 shadow-inner sm:p-6">
          <div className="rounded-[1.5rem] bg-white p-4 shadow-sm">
            <img
              src="/Images/menu-qr.jpg"
              alt="QR code for the Savoury Spoon menu"
              className="h-[190px] w-[190px] object-contain"
            />
          </div>
          <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#9a7b6a]">
            Scan to open our menu
          </p>
        </div>
      </div>
    </div>
  )
}
