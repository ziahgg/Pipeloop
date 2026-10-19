import { Icon, type IconName } from '../components/Icon'
import { Container } from '../components/ui'

const indicators: Array<{ icon: IconName; label: string }> = [
  { icon: 'lock', label: 'Role-based access controls' },
  { icon: 'eye', label: 'Audit trail for every AI action' },
  { icon: 'shield', label: '[Security certification — add only if verified]' },
  { icon: 'link', label: 'Works with your existing email & calendar' },
]

export function TrustBar() {
  return (
    <section className="bg-white pt-2 pb-16 lg:pb-[88px]">
      <Container className="flex flex-col items-center gap-7">
        <p className="max-w-[625px] text-center lg:max-w-none text-xs leading-4 font-semibold tracking-[0.06em] text-subtle uppercase">
          Customer logos · placeholders — add only brands you have permission to feature
        </p>
        <ul className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {Array.from({ length: 6 }, (_, i) => (
            <li
              key={i}
              className="relative flex h-16 items-center justify-center gap-2.5 text-sm leading-5 font-medium tracking-[-0.002em] text-subtle"
            >
              <svg className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
                <rect
                  x="0.5"
                  y="0.5"
                  rx="11.5"
                  fill="none"
                  stroke="#8590a6"
                  strokeDasharray="5 4"
                  style={{ width: 'calc(100% - 1px)', height: 'calc(100% - 1px)' }}
                />
              </svg>
              <span className="size-[18px] rounded-[5px] bg-subtle" />
              Company logo
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap justify-center gap-3">
          {indicators.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 rounded-full bg-surface px-3.5 py-2 text-[13px] leading-[18px] font-medium text-muted"
            >
              <Icon name={item.icon} size={14} />
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
