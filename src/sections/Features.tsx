import type { ReactNode } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { cx } from '../components/cx'
import { Avatar, Badge, Container, IconBadge, SectionHeader, type Tone } from '../components/ui'

function Visual({ center, gap = 'gap-2', children }: { center?: boolean; gap?: string; children: ReactNode }) {
  return (
    <div
      className={cx(
        'flex h-[210px] flex-col justify-center rounded-xl bg-surface p-4',
        gap,
        center && 'items-center',
      )}
    >
      {children}
    </div>
  )
}

function Bar({ pct, color, width = 'w-20' }: { pct: number; color: string; width?: string }) {
  return (
    <span className={cx('h-1.5 shrink-0 overflow-hidden rounded-[3px] bg-line', width)}>
      <span className="block h-full rounded-[3px]" style={{ width: `${pct}%`, background: color }} />
    </span>
  )
}

const leads = [
  { initials: 'BL', name: 'Bluepeak Logistics', source: 'Inbound form', score: 92, color: '#17a673' },
  { initials: 'KS', name: 'Kestrel Studio', source: 'Webinar signup', score: 74, color: '#3355ff' },
  { initials: 'FF', name: 'Fernway Foods', source: 'Cold import', score: 41, color: '#d98a0b' },
]

const LeadVisual = (
  <Visual>
    {leads.map((l) => (
      <div key={l.name} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-2.5 py-2">
        <Avatar initials={l.initials} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] leading-[18px] font-medium text-ink">{l.name}</p>
          <p className="text-[11px] leading-[14px] font-medium text-subtle">{l.source}</p>
        </div>
        <Bar pct={l.score} color={l.color} />
        <span className="w-[18px] text-[13px] leading-[18px] font-medium text-ink">{l.score}</span>
      </div>
    ))}
  </Visual>
)

const ContactVisual = (
  <Visual>
    <div className="flex flex-col gap-2 rounded-[10px] border border-line bg-white p-3">
      <div className="flex items-center gap-2.5">
        <Avatar initials="JL" size={36} />
        <div>
          <p className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">Jordan Lee</p>
          <p className="text-xs leading-4 text-subtle">Head of Operations · Northwind Co.</p>
        </div>
      </div>
      <p className="flex items-center gap-2 text-xs leading-4 text-muted">
        <Icon name="mail" size={13} className="text-subtle" />
        jordan@northwind.example
      </p>
      <p className="flex items-center gap-2 text-xs leading-4 text-muted">
        <Icon name="building" size={13} className="text-subtle" />
        Northwind Co. · 3 open deals
      </p>
      <div className="flex gap-1.5">
        <Badge tone="blue">Decision maker</Badge>
        <Badge tone="green">Champion</Badge>
      </div>
    </div>
  </Visual>
)

const pipeline = [
  { stage: 'New', value: '$186K', pct: 43, color: '#5a78ff' },
  { stage: 'Qualified', value: '$412K', pct: 95, color: '#3355ff' },
  { stage: 'Proposal', value: '$368K', pct: 85, color: '#7b5cfa' },
  { stage: 'Won', value: '$274K', pct: 63, color: '#17a673' },
]

const PipelineVisual = (
  <Visual>
    {pipeline.map((p) => (
      <div key={p.stage} className="flex items-center gap-2.5">
        <span className="w-16 shrink-0 text-xs leading-4 text-muted">{p.stage}</span>
        <span className="h-1.5 flex-1 overflow-hidden rounded-[3px] bg-line">
          <span className="block h-full rounded-[3px]" style={{ width: `${p.pct}%`, background: p.color }} />
        </span>
        <span className="w-[43px] text-[13px] leading-[18px] font-medium text-ink">{p.value}</span>
      </div>
    ))}
  </Visual>
)

const steps: Array<{ day: string; label: string; status: string; tone: Tone; dot: string; last?: boolean }> = [
  { day: 'Day 0', label: 'Intro email sent', status: 'Sent', tone: 'green', dot: 'bg-green' },
  { day: 'Day 3', label: 'Reminder if no reply', status: 'Scheduled', tone: 'blue', dot: 'bg-brand' },
  { day: 'Day 7', label: 'Call task for owner', status: 'Queued', tone: 'neutral', dot: 'bg-subtle', last: true },
]

const FollowUpVisual = (
  <Visual gap="gap-0">
    {steps.map((s) => (
      <div key={s.day} className="flex gap-3">
        <div className="flex w-3.5 flex-col items-center">
          <span className={cx('size-2.5 shrink-0 rounded-full', s.dot)} />
          {!s.last && <span className="h-[42px] w-0.5 bg-line" />}
        </div>
        <div className="-mt-1 flex flex-1 flex-col gap-0.5">
          <span className="text-[11px] leading-[14px] font-medium text-subtle">{s.day}</span>
          <span className="text-[13px] leading-[18px] font-medium text-ink">{s.label}</span>
        </div>
        <Badge tone={s.tone} className="self-start">
          {s.status}
        </Badge>
      </div>
    ))}
  </Visual>
)

const RecommendationVisual = (
  <Visual>
    <div className="flex flex-col gap-2 rounded-[10px] border border-violet bg-white p-3.5">
      <p className="flex items-center gap-1.5 text-[13px] leading-[18px] font-medium text-violet">
        <Icon name="sparkles" size={14} />
        Suggested next step
      </p>
      <p className="text-[13px] leading-[18px] font-medium text-ink">
        Send a pricing recap to Helio Retail — they asked about annual plans on Friday’s call.
      </p>
      <div className="flex gap-2">
        <span className="rounded-md bg-violet px-2.5 py-[5px] text-[11px] leading-[14px] font-medium text-white">
          Review draft
        </span>
        <span className="rounded-md border border-line px-2.5 py-[5px] text-[11px] leading-[14px] font-medium text-muted">
          Skip
        </span>
      </div>
    </div>
  </Visual>
)

const chain: Array<{ icon: IconName; label: string; badge: string }> = [
  { icon: 'inbox', label: 'Form submitted', badge: 'bg-brand-soft text-brand' },
  { icon: 'sparkles', label: 'Score lead', badge: 'bg-violet-soft text-violet' },
  { icon: 'user-plus', label: 'Assign owner', badge: 'bg-green-soft text-green' },
]

const WorkflowVisual = (
  <Visual center>
    <div className="flex w-full items-center justify-center gap-1.5">
      {chain.map((c, i) => (
        <div key={c.label} className="contents">
          {i > 0 && <Icon name="arrow-right" size={14} className="text-subtle" />}
          <div className="flex max-w-[98px] min-w-0 flex-1 flex-col items-center gap-1.5 rounded-[10px] border border-line bg-white p-2.5">
            <IconBadge icon={c.icon} size={28} iconSize={14} className={cx('rounded-lg', c.badge)} />
            <span className="text-center text-[11px] leading-[14px] font-medium text-ink">{c.label}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="flex items-center gap-2 text-xs leading-4 text-muted">
      <span className="flex h-4 w-7 items-center justify-end rounded-full bg-green p-0.5">
        <span className="size-3 rounded-full bg-white" />
      </span>
      Workflow active
    </p>
  </Visual>
)

const features: Array<{ icon: IconName; iconClass?: string; title: string; body: string; visual: ReactNode }> = [
  {
    icon: 'target',
    iconClass: 'text-ink',
    title: 'AI lead qualification',
    body: 'Every new lead is scored on fit and intent, so reps start the day with the right conversations.',
    visual: LeadVisual,
  },
  {
    icon: 'users',
    title: 'Contact & account management',
    body: 'One timeline per contact and account: emails, calls, meetings, notes, and open deals.',
    visual: ContactVisual,
  },
  {
    icon: 'kanban',
    title: 'Sales pipeline tracking',
    body: 'See every stage, value, and stalled deal at a glance — and drill in with one click.',
    visual: PipelineVisual,
  },
  {
    icon: 'send',
    title: 'Automated follow-ups',
    body: 'Multi-step sequences send, remind, and create tasks automatically when prospects go quiet.',
    visual: FollowUpVisual,
  },
  {
    icon: 'sparkles',
    title: 'AI sales recommendations',
    body: 'Suggested next steps based on deal activity, ready for a rep to review and act on.',
    visual: RecommendationVisual,
  },
  {
    icon: 'workflow',
    title: 'Workflow automation',
    body: 'Route, assign, and update records with simple if-this-then-that rules your team controls.',
    visual: WorkflowVisual,
  },
]

export function Features() {
  return (
    <section id="platform" className="scroll-mt-4 bg-surface py-16 lg:py-28">
      <Container className="flex flex-col gap-10 lg:gap-14">
        <SectionHeader
          eyebrow="Platform"
          title="One workspace for every lead, deal, and follow-up."
          description="Pipeloop brings your contacts, pipeline, and automations together — with AI that does the busywork and leaves the decisions to your team."
        />
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((f) => (
            <article key={f.title} className="flex min-w-0 flex-col gap-5 rounded-[20px] border border-line bg-white p-3 pb-6">
              {f.visual}
              <div className="flex flex-col gap-2 px-3">
                <div className="flex items-center gap-2.5">
                  <IconBadge icon={f.icon} className={f.iconClass} />
                  <h3 className="font-display text-xl leading-[26px] font-semibold tracking-[-0.01em] text-ink">{f.title}</h3>
                </div>
                <p className="text-sm leading-5 text-muted">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
