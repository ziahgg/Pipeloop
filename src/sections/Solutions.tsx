import { Icon, type IconName } from '../components/Icon'
import { Badge, Container, Eyebrow, IconBadge } from '../components/ui'

type Team = {
  icon: IconName
  badge: string
  check: string
  team: string
  title: string
  points: string[]
  snapshot: string
  stats: Array<[string, string]>
}

const teams: Team[] = [
  {
    icon: 'users',
    badge: 'bg-brand-soft text-brand',
    check: 'text-brand',
    team: 'Sales teams',
    title: 'Spend your time on the deals most likely to close.',
    points: [
      'A prioritized daily list based on fit and intent',
      'AI-drafted follow-ups, ready for review',
      'Call summaries logged to the deal automatically',
    ],
    snapshot: 'Today’s focus',
    stats: [
      ['4', 'hot deals'],
      ['6', 'follow-ups ready'],
      ['2', 'meetings'],
    ],
  },
  {
    icon: 'megaphone',
    badge: 'bg-violet-soft text-violet',
    check: 'text-violet',
    team: 'Marketing teams',
    title: 'Hand off leads the moment they’re ready.',
    points: [
      'Shared scoring rules with the sales team',
      'Automatic routing to the right owner',
      'Visibility into what happens after handoff',
    ],
    snapshot: 'This week’s handoff',
    stats: [
      ['28', 'leads routed'],
      ['19', 'accepted'],
      ['3', 'returned'],
    ],
  },
  {
    icon: 'sliders',
    badge: 'bg-green-soft text-green',
    check: 'text-green',
    team: 'Revenue operations',
    title: 'Keep data clean and processes consistent.',
    points: [
      'Stage rules and required fields',
      'Alerts for stale deals and duplicates',
      'An audit trail for every automated change',
    ],
    snapshot: 'Pipeline hygiene',
    stats: [
      ['12', 'stale deals'],
      ['5', 'duplicates'],
      ['98%', 'fields complete'],
    ],
  },
  {
    icon: 'building',
    badge: 'bg-amber-soft text-amber',
    check: 'text-amber',
    team: 'Small & medium businesses',
    title: 'A complete sales system without a big setup project.',
    points: ['Templates for common sales workflows', 'Guided setup and CSV import', 'Plans that scale as your team grows'],
    snapshot: 'Setup progress',
    stats: [
      ['3/5', 'steps done'],
      ['1', 'pipeline'],
      ['2', 'automations'],
    ],
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-4 bg-surface py-16 lg:py-28">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[660px] flex-col items-start gap-[18px]">
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="heading-2 text-ink">Built for every team that touches revenue.</h2>
          </div>
          <p className="lede max-w-[440px] text-muted">
            Each team works from the same customer data — with views, automations, and controls that fit how they work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {teams.map((t) => (
            <article key={t.team} className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <IconBadge icon={t.icon} size={40} iconSize={20} className={`rounded-[11px] ${t.badge}`} />
                <span className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">{t.team}</span>
              </div>
              <h3 className="font-display text-2xl leading-[30px] font-semibold tracking-[-0.015em] text-ink lg:text-[28px] lg:leading-[34px]">
                {t.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-base leading-6 tracking-[-0.003em] text-muted">
                    <Icon name="check-circle" size={18} className={`mt-[3px] ${t.check}`} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-2.5 rounded-[14px] bg-surface p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] leading-[18px] font-medium text-ink">{t.snapshot}</span>
                  <Badge tone="violet">Sample</Badge>
                </div>
                <dl className="grid grid-cols-3 gap-2.5">
                  {t.stats.map(([value, label]) => (
                    <div key={label} className="flex flex-col-reverse gap-0.5 rounded-[10px] border border-line bg-white px-3 py-2.5">
                      <dt className="text-xs leading-4 text-subtle">{label}</dt>
                      <dd className="font-display text-xl leading-6 font-semibold tracking-[-0.01em] text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
