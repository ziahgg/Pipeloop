import { useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { cx } from '../components/cx'
import { Badge, Container, Eyebrow, IconBadge } from '../components/ui'

const capabilities: Array<{ icon: IconName; title: string; body: string }> = [
  { icon: 'file', title: 'Summarizes conversations', body: 'Key points, objections, and commitments from every call.' },
  { icon: 'target', title: 'Suggests next steps', body: 'Recommended actions based on deal stage and activity.' },
  { icon: 'pencil', title: 'Drafts follow-ups', body: 'Personalized emails written in your team’s tone.' },
  { icon: 'trending-up', title: 'Highlights opportunities', body: 'Flags warm deals and accounts that need attention.' },
]

const summary = [
  'Expanding to two new warehouses in Q3; current tool can’t track multi-site deals.',
  'Concerned about onboarding time for a 12-person team.',
  'Asked for pricing on annual billing and a security overview.',
]

const nextSteps = [
  'Send annual pricing and security overview',
  'Share a 30-day onboarding plan',
  'Schedule a demo with the ops lead',
]

function CardTitle({ icon, iconClass, children }: { icon: IconName; iconClass?: string; children: string }) {
  return (
    <span className="flex items-center gap-2 text-sm leading-5 font-medium tracking-[-0.002em] text-ink">
      <Icon name={icon} size={16} className={iconClass} />
      {children}
    </span>
  )
}

function NextSteps() {
  const [added, setAdded] = useState<Record<string, boolean>>({})
  return (
    <div className="flex flex-col gap-2.5 rounded-[14px] bg-surface p-4">
      <CardTitle icon="sparkles" iconClass="text-violet">
        Suggested next steps
      </CardTitle>
      {nextSteps.map((step) => {
        const on = added[step]
        return (
          <div key={step} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-2.5 py-2">
            <span
              className={cx(
                'flex size-4 shrink-0 items-center justify-center rounded border',
                on ? 'border-brand bg-brand text-white' : 'border-subtle',
              )}
            >
              {on && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              )}
            </span>
            <span className="flex-1 text-[13px] leading-[18px] font-medium text-ink">{step}</span>
            <button
              type="button"
              aria-pressed={on}
              onClick={() => setAdded((s) => ({ ...s, [step]: !on }))}
              className="shrink-0 text-[11px] leading-[14px] font-medium text-brand hover:underline"
            >
              {on ? 'Added' : 'Add task'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

function AssistantPanel() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-4 rounded-[20px] border border-line bg-white p-4 shadow-[0_16px_48px_rgba(13,18,33,0.08)] sm:p-5 lg:max-w-[760px]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <IconBadge icon="sparkles" className="bg-violet text-white" />
          <div className="min-w-0">
            <p className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">Pipeloop Assistant</p>
            <p className="text-xs leading-4 text-subtle">Deal: Bluepeak Logistics · $18,500 · Qualified</p>
          </div>
        </div>
        <Badge tone="violet" className="max-sm:hidden">
          Sample data
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-2.5 rounded-[14px] bg-surface p-4">
          <CardTitle icon="file">Call summary · Today, 32 min</CardTitle>
          {summary.map((s) => (
            <p key={s} className="flex gap-2 text-xs leading-4 text-muted">
              <span className="mt-[6.5px] size-[5px] shrink-0 rounded-full bg-violet" />
              {s}
            </p>
          ))}
        </div>
        <NextSteps />
      </div>

      <div className="flex flex-col gap-3 rounded-[14px] border border-violet bg-white p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle icon="pencil">Draft follow-up email</CardTitle>
          <Badge tone="amber">Awaiting approval</Badge>
        </div>
        <dl className="flex flex-col gap-3">
          {[
            ['To', 'maya.chen@bluepeak.example'],
            ['Subject', 'Annual pricing + security overview for Bluepeak'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline gap-2.5 border-b border-line pb-2">
              <dt className="w-14 shrink-0 text-xs leading-4 text-subtle">{k}</dt>
              <dd className="min-w-0 text-[13px] leading-[18px] font-medium break-words text-ink">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="flex flex-col gap-5 text-sm leading-5 text-muted">
          <p>Hi Maya,</p>
          <p>
            Thanks for the time today. As promised, I’ve attached annual pricing for 12 seats and our security overview. I’ve
            also included a 30-day onboarding plan so your team can be up and running before the new warehouses open.
          </p>
          <p>Would Thursday or Friday work for a short demo with your ops lead?</p>
        </div>
        <div className="flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5 text-xs leading-4 text-subtle">
            <Icon name="eye" size={14} />
            Nothing is sent until you approve.
          </p>
          <div className="flex gap-2">
            <span className="rounded-[10px] border border-line bg-white px-[18px] py-2 text-[15px] leading-5 font-semibold tracking-[-0.003em] text-ink">
              Edit draft
            </span>
            <span className="rounded-[10px] bg-brand px-[18px] py-2 text-[15px] leading-5 font-semibold tracking-[-0.003em] text-white">
              Approve &amp; send
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 rounded-[14px] bg-surface p-4">
        <CardTitle icon="trending-up">Opportunities to watch</CardTitle>
        {[
          { name: 'Granite Partners', note: 'Legal review started — decision expected this month.', status: 'Likely to close', tone: 'green' as const },
          { name: 'Acme Labs', note: 'No reply in 9 days after pricing was sent.', status: 'Needs attention', tone: 'red' as const },
        ].map((o) => (
          <div key={o.name} className="flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-2.5">
            <div className="min-w-0 flex-1">
              <p className="text-[13px] leading-[18px] font-medium text-ink">{o.name}</p>
              <p className="text-xs leading-4 text-subtle">{o.note}</p>
            </div>
            <Badge tone={o.tone}>{o.status}</Badge>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Assistant() {
  return (
    <section id="ai-assistant" className="scroll-mt-4 bg-surface py-16 lg:py-28">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start gap-7 lg:max-w-[456px]">
          <Eyebrow>AI Sales Assistant</Eyebrow>
          <h2 className="heading-2 -mt-2.5 text-ink">An assistant that does the prep work. Your team makes the call.</h2>
          <p className="lede text-muted">
            It reads the context around every deal — calls, emails, and activity — and turns it into summaries, suggestions, and
            ready-to-review drafts.
          </p>
          <ul className="flex flex-col gap-5">
            {capabilities.map((c) => (
              <li key={c.title} className="flex gap-3.5">
                <IconBadge icon={c.icon} size={40} iconSize={18} className="rounded-[10px] bg-violet-soft text-violet" />
                <div className="flex flex-col gap-0.5 text-sm leading-5">
                  <p className="font-medium tracking-[-0.002em] text-ink">{c.title}</p>
                  <p className="text-muted">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="flex w-full gap-3 rounded-xl border border-line bg-white p-4 text-[13px] leading-[18px] font-medium text-ink">
            <IconBadge icon="shield" className="bg-green-soft text-green" />
            Drafts and suggestions stay pending until a rep approves them, and every AI action is logged.
          </p>
        </div>
        <AssistantPanel />
      </Container>
    </section>
  )
}
