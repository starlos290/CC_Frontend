import { Shield, Lock, Server, CheckCircle2 } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    label: 'HIPAA-Safe',
    sub: 'BAA included',
  },
  {
    icon: Server,
    label: 'Private VPS',
    sub: 'Dedicated server',
  },
  {
    icon: Lock,
    label: 'Encrypted',
    sub: 'Data at rest + transit',
  },
  {
    icon: CheckCircle2,
    label: '48hr Deploy',
    sub: 'No IT required',
  },
]

export default function HipaaBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {badges.map((b) => {
        const Icon = b.icon
        return (
          <div
            key={b.label}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0d1424] border border-white/7 rounded-full"
          >
            <Icon className="w-4 h-4 text-trust shrink-0" />
            <div>
              <p className="text-xs font-semibold text-text-primary leading-none">{b.label}</p>
              <p className="text-[10px] text-text-muted mt-0.5">{b.sub}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
