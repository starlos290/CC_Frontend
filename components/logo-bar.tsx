export default function LogoBar() {
  const brands = [
    'Allergan', 'Keller Williams', 'The Game Changers', 'Netflix', 'Meta', 'Google',
    'YouTube', 'TikTok', 'Salesforce', 'Political Campaigns', 'Healthcare Brands',
    'Allergan', 'Keller Williams', 'The Game Changers', 'Netflix', 'Meta', 'Google',
    'YouTube', 'TikTok', 'Salesforce', 'Political Campaigns', 'Healthcare Brands',
  ]

  return (
    <section className="relative py-10 overflow-hidden border-y border-white/[0.06] bg-bg-section">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25 mb-6">
        Brands &amp; Platforms
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-section to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-section to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {brands.map((b, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-6 text-sm font-semibold text-white/25 uppercase tracking-wider flex-shrink-0">
              {b}
              <span className="w-1 h-1 rounded-full bg-white/15" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
