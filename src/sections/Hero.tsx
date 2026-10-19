import { Icon, type IconName } from '../components/Icon'
import { AppSidebar, AppTopBar, DealCard, type Deal } from '../components/AppChrome'
import { cx } from '../components/cx'
import { Badge, Button, Container, Eyebrow } from '../components/ui'

const kpis: Array<{ label: string; icon: IconName; value: string; delta: string; note: string }> = [
  { label: 'Open pipeline', icon: 'dollar', value: '$1.24M', delta: '+12.4%', note: 'vs. last quarter' },
  { label: 'New leads', icon: 'user-plus', value: '312', delta: '+8.1%', note: 'this month' },
  { label: 'AI-qualified leads', icon: 'sparkles', value: '128', delta: '+15.2%', note: 'this month' },
  { label: 'Meetings booked', icon: 'calendar', value: '46', delta: '+5.0%', note: 'this month' },
]

const stages: Array<{ name: string; total: string; deals: Deal[] }> = [
  {
    name: 'New',
    total: '$186K',
    deals: [
      { name: 'Bluepeak Logistics', status: 'New', tone: 'blue', value: '$18,500', owner: 'BL', next: 'Email · Today' },
      { name: 'Orbit Dental', status: 'Cold', tone: 'neutral', value: '$9,200', owner: 'OD', next: 'Call · Wed' },
    ],
  },
  {
    name: 'Qualified',
    total: '$412K',
    deals: [
      { name: 'Northwind Co.', status: 'Hot', tone: 'green', value: '$24,000', owner: 'NC', next: 'Call · Tue' },
      { name: 'Kestrel Studio', status: 'Warm', tone: 'amber', value: '$12,750', owner: 'KS', next: 'Demo · Thu' },
    ],
  },
  {
    name: 'Proposal',
    total: '$368K',
    deals: [
      { name: 'Helio Retail', status: 'Hot', tone: 'green', value: '$48,000', owner: 'HR', next: 'Review · Fri' },
      { name: 'Acme Labs', status: 'At risk', tone: 'red', value: '$31,400', owner: 'AL', next: 'Follow-up · Mon' },
    ],
  },
]

const recommendations = [
  { title: 'Follow up with Helio Retail', body: 'Proposal viewed 3 times since Friday.', action: 'Draft follow-up' },
  { title: 'Re-engage Acme Labs', body: 'No reply in 9 days — deal marked at risk.', action: 'Suggest next step' },
  { title: 'Prioritize Bluepeak Logistics', body: 'High fit score (92) from inbound form.', action: 'Assign to rep' },
]

function FloatingCard({
  icon,
  iconClass,
  title,
  body,
  className,
}: {
  icon: IconName
  iconClass: string
  title: string
  body: string
  className?: string
}) {
  return (
    <div
      className={cx(
        'absolute z-10 hidden items-center gap-2.5 rounded-[14px] border border-line bg-white p-3 shadow-[0_16px_40px_rgba(13,18,33,0.18)] xl:flex',
        className,
      )}
    >
      <span className={cx('inline-flex size-8 items-center justify-center rounded-[9px]', iconClass)}>
        <Icon name={icon} size={16} />
      </span>
      <span className="flex flex-col gap-px">
        <span className="text-[13px] leading-[18px] font-medium text-ink">{title}</span>
        <span className="text-xs leading-4 whitespace-nowrap text-subtle">{body}</span>
      </span>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="flex overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_rgba(13,18,33,0.3)]">
      <AppSidebar active="Dashboard" />

      <div className="flex min-w-0 flex-1 flex-col gap-[18px] p-4 sm:p-5">
        <AppTopBar title="Pipeline overview" />

        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">Good morning, Alex</p>
            <p className="text-xs leading-4 text-subtle">Here’s what changed in your pipeline since yesterday.</p>
          </div>
          <Badge tone="violet">Sample data</Badge>
        </div>

        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-3 sm:p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs leading-4 text-subtle">{k.label}</span>
                <Icon name={k.icon} size={16} className={k.icon === 'dollar' ? 'text-ink' : 'text-subtle'} />
              </div>
              <p className="font-display text-2xl leading-8 font-semibold tracking-[-0.02em] text-ink sm:text-[28px]">
                {k.value}
              </p>
              <div className="flex items-center gap-1.5">
                <Badge tone="green">{k.delta}</Badge>
                <span className="hidden text-[11px] leading-[14px] font-medium text-subtle sm:inline">{k.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 xl:h-[474px] xl:flex-row">
          <div className="flex min-w-0 flex-1 flex-col gap-3 rounded-[14px] border border-line bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm leading-5 font-medium tracking-[-0.002em] text-ink">
                <Icon name="kanban" size={16} />
                Pipeline · This quarter
              </span>
              <span className="flex items-center gap-1 text-[13px] leading-[18px] font-medium text-brand">
                View board
                <Icon name="arrow-right" size={12} />
              </span>
            </div>
            <div className="-mx-4 overflow-x-auto px-4 pb-1">
              <div className="grid min-w-[566px] grid-cols-3 gap-2.5">
                {stages.map((s) => (
                  <div key={s.name} className="flex flex-col gap-2 rounded-[10px] bg-surface p-2 xl:h-[338px]">
                    <div className="flex items-center justify-between px-1 py-0.5">
                      <span className="text-[13px] leading-[18px] font-medium text-ink">{s.name}</span>
                      <span className="text-xs leading-4 text-subtle">{s.total}</span>
                    </div>
                    {s.deals.map((d) => (
                      <DealCard key={d.name} deal={d} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 rounded-[14px] border border-violet bg-white p-4 xl:w-[330px] xl:shrink-0">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm leading-5 font-medium tracking-[-0.002em] text-ink">
                <Icon name="sparkles" size={16} className="text-violet" />
                AI recommendations
              </span>
              <Badge tone="violet">3 new</Badge>
            </div>
            {recommendations.map((r) => (
              <div key={r.title} className="flex flex-col gap-1.5 rounded-[10px] bg-violet-soft p-3">
                <p className="text-[13px] leading-[18px] font-medium text-ink">{r.title}</p>
                <p className="text-xs leading-4 text-muted">{r.body}</p>
                <div className="flex items-center gap-3 text-[13px] leading-[18px] font-medium">
                  <span className="flex items-center gap-1 text-violet">
                    <Icon name="sparkles" size={12} />
                    {r.action}
                  </span>
                  <span className="text-subtle">Dismiss</span>
                </div>
              </div>
            ))}
            <p className="flex items-center gap-1.5 py-2 text-xs leading-4 text-muted">
              <Icon name="shield" size={14} className="text-green" />
              You review and approve every AI-drafted message.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="bg-white pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
      <Container className="flex flex-col items-center gap-10 lg:gap-14">
        <div className="flex max-w-[900px] flex-col items-center gap-6 text-center">
          <Eyebrow>AI-powered CRM &amp; sales automation</Eyebrow>
          <h1 className="font-display text-[40px] leading-[46px] font-semibold tracking-[-0.03em] text-ink sm:text-[56px] sm:leading-[62px] lg:text-[72px] lg:leading-[78px]">
            Turn every lead into a customer, automatically.
          </h1>
          <p className="lede max-w-[680px] text-muted">
            Pipeloop qualifies new leads, drafts personalized follow-ups, books meetings, and keeps your pipeline current — so
            your team spends its time selling.
          </p>
          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href="#get-started" arrow>
              Start Free
            </Button>
            <Button href="#platform" variant="light" arrow>
              Explore the Platform
            </Button>
          </div>
          <ul className="flex flex-col items-center gap-x-5 gap-y-2 text-[13px] leading-[18px] font-medium text-muted sm:flex-row">
            <li className="flex items-center gap-1.5">
              <Icon name="check-circle" size={16} className="text-green" />
              Human approval on every AI message
            </li>
            <li className="flex items-center gap-1.5">
              <Icon name="check-circle" size={16} className="text-green" />
              Connects to the tools you already use
            </li>
          </ul>
        </div>

        <div className="relative w-full max-w-[1280px] rounded-[20px] bg-night p-2 sm:p-4 lg:rounded-[28px] lg:p-10 lg:pb-5">
          <Dashboard />
          <FloatingCard
            icon="sparkles"
            iconClass="bg-violet-soft text-violet"
            title="Lead qualified by AI"
            body="Bluepeak Logistics · Fit score 92"
            className="top-[560px] -left-7"
          />
          <FloatingCard
            icon="calendar"
            iconClass="bg-green-soft text-green"
            title="Meeting booked"
            body="Northwind Co. · Tue, 10:30 AM"
            className="top-[120px] -right-7"
          />
        </div>
      </Container>
    </section>
  )
}
