import { useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { cx } from '../components/cx'
import { Badge, Container, Eyebrow, type Tone } from '../components/ui'

const kpis: Array<{ label: string; icon: IconName; value: string; delta: string; note: string }> = [
  { label: 'Lead conversion rate', icon: 'target', value: '18.4%', delta: '+2.1 pts', note: 'vs. last quarter' },
  { label: 'Pipeline health score', icon: 'kanban', value: '82/100', delta: 'Healthy', note: '12 stale deals' },
  { label: 'Sales activities', icon: 'zap', value: '1,486', delta: '+9.0%', note: 'calls, emails, meetings' },
  { label: 'Follow-up reply rate', icon: 'send', value: '31.2%', delta: '+3.4 pts', note: 'across 6 sequences' },
]

const stages = [
  { name: 'New', value: '$186K', width: 149, color: '#5a78ff' },
  { name: 'Qualified', value: '$412K', width: 332, color: '#3355ff' },
  { name: 'Proposal', value: '$368K', width: 295, color: '#7b5cfa' },
  { name: 'Negotiation', value: '$222K', width: 179, color: '#d98a0b' },
  { name: 'Won', value: '$274K', width: 219, color: '#17a673' },
]

const activity = [
  { label: 'Emails', value: '612', height: 120, color: '#3355ff' },
  { label: 'Calls', value: '384', height: 75, color: '#5a78ff' },
  { label: 'Meetings', value: '146', height: 29, color: '#7b5cfa' },
  { label: 'Tasks', value: '344', height: 67, color: '#17a673' },
]

const sequences: Array<{ name: string; sent: string; opened: string; replied: string; tone: Tone; meetings: string }> = [
  { name: 'Inbound demo request', sent: '412', opened: '71%', replied: '38%', tone: 'green', meetings: '64' },
  { name: 'Webinar follow-up', sent: '286', opened: '58%', replied: '24%', tone: 'blue', meetings: '21' },
  { name: 'Re-engage stalled deals', sent: '198', opened: '49%', replied: '19%', tone: 'amber', meetings: '12' },
  { name: 'Post-proposal check-in', sent: '144', opened: '66%', replied: '35%', tone: 'green', meetings: '18' },
]

const ranges = ['7 days', '30 days', 'Quarter']

// Series coordinates from the Figma "Line chart" vectors (plot area 676×215 at x=36, y=16).
const xs = Array.from({ length: 12 }, (_, i) => +(i * (676 / 11)).toFixed(2))
const leadsY = [99, 82.5, 90.75, 68.75, 55, 63.25, 44, 33, 46.75, 22, 11, 0]
const convY = [24.75, 22, 22, 16.5, 13.75, 16.5, 11, 8.25, 11, 5.5, 2.75, 0]
const line = (ys: number[]) => ys.map((y, i) => `${i ? 'L' : 'M'}${xs[i]} ${y}`).join(' ')

function CardTitle({ icon, children }: { icon: IconName; children: string }) {
  return (
    <span className="flex items-center gap-2 text-sm leading-5 font-medium tracking-[-0.002em] text-ink">
      <Icon name={icon} size={16} />
      {children}
    </span>
  )
}

function LineChart() {
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <svg viewBox="0 0 804 254" className="h-auto w-full min-w-[560px]" role="img" aria-label="Weekly new leads and converted leads, rising over 12 weeks">
        {[0, 20, 40, 60, 80].map((v, i) => {
          const y = 230 - i * 55
          return (
            <g key={v}>
              <rect x="36" y={y} width="676" height="1" fill="#e4e7ef" />
              <text x="0" y={y + 4} fontSize="11" fontWeight="500" fill="#8590a6">
                {v}
              </text>
            </g>
          )
        })}
        <g transform="translate(36 16)">
          <path d={`${line(leadsY)} L676 214.5 L0 214.5 Z`} fill="#3355ff" />
          <path d={line(leadsY)} stroke="#3355ff" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        </g>
        <circle cx="712.5" cy="15.5" r="4.5" fill="#fff" stroke="#3355ff" strokeWidth="2.5" />
        <g transform="translate(36 189)">
          <path d={`${line(convY)} L676 41.25 L0 41.25 Z`} fill="#7b5cfa" />
          <path d={line(convY)} stroke="#7b5cfa" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
        </g>
        <circle cx="712.5" cy="188.5" r="4.5" fill="#fff" stroke="#7b5cfa" strokeWidth="2.5" />
        {['W1', 'W3', 'W5', 'W7', 'W9', 'W11'].map((w, i) => (
          <text key={w} x={36 + i * 122.9} y="249" textAnchor="middle" fontSize="11" fontWeight="500" fill="#8590a6">
            {w}
          </text>
        ))}
      </svg>
    </div>
  )
}

function Dashboard() {
  const [range, setRange] = useState('Quarter')
  return (
    <div className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-4 shadow-[0_12px_40px_rgba(13,18,33,0.06)] sm:p-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div className="flex flex-wrap items-center gap-2.5">
          <Icon name="chart" size={18} />
          <span className="font-display text-xl leading-[26px] font-semibold tracking-[-0.01em] text-ink">Performance insights</span>
          <Badge tone="violet">Sample data — for illustration only</Badge>
        </div>
        <div className="flex self-start rounded-lg bg-surface p-[3px] md:self-auto" role="group" aria-label="Date range">
          {ranges.map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={range === r}
              onClick={() => setRange(r)}
              className={cx(
                'rounded-md border px-3 py-[5px] text-[13px] whitespace-nowrap leading-[18px] font-medium transition-colors',
                range === r ? 'border-line bg-white text-ink' : 'border-transparent text-subtle hover:text-ink',
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs leading-4 text-subtle">{k.label}</span>
              <Icon name={k.icon} size={16} className="text-subtle" />
            </div>
            <p className="font-display text-[28px] leading-8 font-semibold tracking-[-0.02em] text-ink">{k.value}</p>
            <div className="flex items-center gap-1.5">
              <Badge tone="green">{k.delta}</Badge>
              <span className="text-[11px] leading-[14px] font-medium text-subtle">{k.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[838fr_380fr]">
        <div className="flex min-w-0 flex-col gap-3 rounded-[14px] border border-line bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <CardTitle icon="trending-up">Leads &amp; conversions · weekly</CardTitle>
            <div className="flex gap-3.5 text-xs leading-4 text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-[3px] w-2.5 rounded-sm bg-brand" />
                New leads
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-[3px] w-2.5 rounded-sm bg-violet" />
                Converted
              </span>
            </div>
          </div>
          <LineChart />
        </div>
        <div className="flex flex-col gap-3.5 rounded-[14px] border border-line bg-white p-4">
          <CardTitle icon="layers">Pipeline by stage</CardTitle>
          {stages.map((s) => (
            <div key={s.name} className="flex flex-col gap-1.5">
              <div className="flex justify-between text-[13px] leading-[18px] font-medium">
                <span className="text-muted">{s.name}</span>
                <span className="text-ink">{s.value}</span>
              </div>
              <span className="h-2.5 overflow-hidden rounded-[5px] bg-surface">
                <span className="block h-full rounded-[5px]" style={{ width: `${(s.width / 346) * 100}%`, background: s.color }} />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 xl:grid-cols-[380fr_838fr]">
        <div className="flex flex-col gap-3 rounded-[14px] border border-line bg-white p-4">
          <CardTitle icon="zap">Sales activity by type</CardTitle>
          <div className="flex h-[180px] items-end justify-center gap-[22px]">
            {activity.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-1.5 text-[11px] leading-[14px] font-medium">
                <span className="text-ink">{a.value}</span>
                <span className="w-11 rounded-t-md" style={{ height: a.height, background: a.color }} />
                <span className="text-subtle">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="min-w-0 overflow-hidden rounded-[14px] border border-line bg-white">
          <div className="px-4 py-3.5">
            <CardTitle icon="send">Follow-up performance by sequence</CardTitle>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] text-left text-[13px] leading-[18px] font-medium">
              <thead>
                <tr className="border-t border-line bg-surface text-[11px] leading-[14px] text-subtle uppercase">
                  <th scope="col" className="w-[230px] py-[9px] pl-4 font-medium">Sequence</th>
                  <th scope="col" className="w-[102px] py-[9px] pl-3 font-medium">Sent</th>
                  <th scope="col" className="w-[102px] py-[9px] pl-3 font-medium">Opened</th>
                  <th scope="col" className="w-[102px] py-[9px] pl-3 font-medium">Replied</th>
                  <th scope="col" className="py-[9px] pr-4 pl-3 font-medium">Meetings</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {sequences.map((s) => (
                  <tr key={s.name} className="h-[43px] border-t border-line">
                    <td className="pl-4 text-ink">{s.name}</td>
                    <td className="pl-3">{s.sent}</td>
                    <td className="pl-3">{s.opened}</td>
                    <td className="pl-3">
                      <Badge tone={s.tone}>{s.replied}</Badge>
                    </td>
                    <td className="pr-4 pl-3">{s.meetings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="flex items-start gap-2 text-xs leading-4 text-subtle">
        <Icon name="eye" size={14} className="mt-px" />
        Fictional sample data for demonstration. Results depend on your team, market, and processes.
      </p>
    </div>
  )
}

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-4 bg-white py-16 lg:py-28">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[660px] flex-col items-start gap-[18px]">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="heading-2 text-ink">See what’s working across your pipeline.</h2>
          </div>
          <p className="lede max-w-[440px] text-muted">
            Track conversion, pipeline health, activity, and follow-up performance in real time — and share the same view with
            leadership.
          </p>
        </div>
        <Dashboard />
      </Container>
    </section>
  )
}
