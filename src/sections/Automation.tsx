import type { CSSProperties } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { cx } from '../components/cx'
import { Container, IconBadge, SectionHeader } from '../components/ui'

type NodeType = 'trigger' | 'ai' | 'action' | 'notify'

const nodeStyle: Record<NodeType, { label: string; badge: string; text: string }> = {
  trigger: { label: 'Trigger', badge: 'bg-brand-soft text-brand', text: 'text-brand' },
  ai: { label: 'AI step', badge: 'bg-violet-soft text-violet', text: 'text-violet' },
  action: { label: 'Action', badge: 'bg-green-soft text-green', text: 'text-green' },
  notify: { label: 'Notify', badge: 'bg-amber-soft text-ink', text: 'text-amber' },
}

type FlowNode = { key: string; type: NodeType; icon: IconName; title: string; body: string; x: number; y: number }

const nodes: FlowNode[] = [
  { key: 'trigger', type: 'trigger', icon: 'inbox', title: 'New lead captured', body: 'Website form, inbound email, or CSV import.', x: 40, y: 184 },
  { key: 'qualify', type: 'ai', icon: 'sparkles', title: 'Qualify & score lead', body: 'Fit and intent scored from company data and activity.', x: 316, y: 184 },
  { key: 'draft', type: 'ai', icon: 'sparkles', title: 'Draft personalized follow-up', body: 'AI drafts the email — a rep reviews and approves it.', x: 592, y: 56 },
  { key: 'book', type: 'action', icon: 'calendar', title: 'Book a meeting', body: 'Prospect picks a time from the owner’s calendar.', x: 868, y: 56 },
  { key: 'notify', type: 'notify', icon: 'bell', title: 'Notify the sales team', body: 'Owner gets a summary in team chat and the CRM.', x: 1016, y: 312 },
  { key: 'nurture', type: 'action', icon: 'mail', title: 'Add to nurture sequence', body: 'Lower-fit leads get helpful content over time.', x: 592, y: 336 },
]

const byKey = Object.fromEntries(nodes.map((n) => [n.key, n])) as Record<string, FlowNode>

const conditions = [
  { label: 'Score ≥ 70', x: 481, y: 113 },
  { label: 'Score < 70', x: 481, y: 393 },
  { label: 'Approved by rep', x: 787, y: 22 },
  { label: 'Meeting confirmed', x: 919, y: 276 },
]

const legend = [
  { label: 'Trigger', color: 'bg-brand' },
  { label: 'AI step', color: 'bg-violet' },
  { label: 'Action', color: 'bg-green' },
  { label: 'Notification', color: 'bg-amber' },
]

function NodeCard({ node, className, style }: { node: FlowNode; className?: string; style?: CSSProperties }) {
  const s = nodeStyle[node.type]
  return (
    <div className={cx('flex flex-col gap-2.5 rounded-[14px] border border-line bg-white p-4', className)} style={style}>
      <div className="flex items-center gap-2.5">
        <IconBadge icon={node.icon} className={s.badge} />
        <span className={cx('text-xs leading-4 font-semibold tracking-[0.06em] uppercase', s.text)}>{s.label}</span>
      </div>
      <p className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">{node.title}</p>
      <p className="text-xs leading-4 text-subtle">{node.body}</p>
    </div>
  )
}

function Condition({ label, className, style }: { label: string; className?: string; style?: CSSProperties }) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border border-white bg-[#151d33] px-2.5 py-1 text-[11px] leading-[14px] font-medium whitespace-nowrap text-white',
        className,
      )}
      style={style}
    >
      {label}
    </span>
  )
}

/** Desktop canvas: node and connector coordinates come straight from the 1280×520 Figma frame. */
function Canvas() {
  return (
    <div
      className="relative hidden h-[520px] w-full max-w-[1280px] overflow-hidden rounded-3xl border border-white bg-ink xl:block"
      style={{
        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1.2px)',
        backgroundSize: '40px 40px',
        backgroundPosition: '20px 20px',
      }}
    >
      <svg className="absolute inset-0" width="1280" height="520" fill="none" aria-hidden="true">
        <g stroke="#5a78ff" strokeWidth="2">
          <path d="M264 253h44" />
          <path d="M540 253h30V125h14" />
          <path d="M816 125h44" />
          <path d="M980 194v187h28" />
        </g>
        <path d="M540 253h30v152h14" stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6" />
        <g fill="#5a78ff">
          {[
            [307, 248],
            [583, 120],
            [583, 400],
            [859, 120],
            [1007, 376],
          ].map(([x, y]) => (
            <path key={`${x}-${y}`} d={`M${x} ${y}l10 5-10 5z`} />
          ))}
        </g>
      </svg>
      {nodes.map((n) => (
        <NodeCard key={n.key} node={n} className="absolute w-56" style={{ left: n.x, top: n.y }} />
      ))}
      {conditions.map((c) => (
        <Condition key={c.label} label={c.label} className="absolute" style={{ left: c.x, top: c.y }} />
      ))}
    </div>
  )
}

function Rail({ label }: { label?: string }) {
  return (
    <div className="flex items-center gap-2 pl-[15px]">
      <span className="h-8 w-0.5 bg-brand-light" />
      {label && <Condition label={label} />}
    </div>
  )
}

/** Stacked flow used below the xl breakpoint, following the Figma mobile frame. */
function StackedFlow() {
  return (
    <div className="mx-auto flex w-full max-w-[640px] flex-col rounded-3xl border border-white bg-ink p-4 sm:p-6 xl:hidden">
      <NodeCard node={byKey.trigger} />
      <Rail label="Score ≥ 70" />
      <NodeCard node={byKey.qualify} />
      <Rail label="Approved by rep" />
      <NodeCard node={byKey.draft} />
      <Rail label="Meeting confirmed" />
      <NodeCard node={byKey.book} />
      <Rail />
      <NodeCard node={byKey.notify} />
      <p className="flex items-center gap-2 pt-5 pb-3 text-xs leading-4 font-medium text-white">
        <Icon name="workflow" size={14} className="text-brand-light" />
        Branch · Score &lt; 70
      </p>
      <NodeCard node={byKey.nurture} />
    </div>
  )
}

export function Automation() {
  return (
    <section id="automation" className="scroll-mt-4 bg-night py-16 lg:py-28">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionHeader
          dark
          eyebrow="Automation"
          title="From new lead to booked meeting — on autopilot, with you in control."
          description="Build workflows that qualify, follow up, and hand off leads. AI drafts the messages; your reps approve them."
        />
        <Canvas />
        <StackedFlow />
        <div className="flex flex-col items-center gap-4 text-[13px] leading-[18px] font-medium text-white lg:flex-row lg:gap-7">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center gap-2">
                <span className={cx('size-2 rounded-full', l.color)} />
                {l.label}
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 text-center">
            <Icon name="shield" size={14} className="text-green" />
            No message is sent without rep approval unless you choose otherwise.
          </p>
        </div>
      </Container>
    </section>
  )
}
