import { AppSidebar, AppTopBar, DealCard, ScoreBar, type Deal } from '../components/AppChrome'
import { Icon } from '../components/Icon'
import { cx } from '../components/cx'
import { Avatar, Badge, Button, Container, Eyebrow, type Tone } from '../components/ui'

const stages: Array<{ name: string; count: number; total: string; color: string; deals: Deal[] }> = [
  {
    name: 'New',
    count: 3,
    total: '$186,400',
    color: '#5a78ff',
    deals: [
      { name: 'Bluepeak Logistics', status: 'New', tone: 'blue', value: '$18,500', owner: 'BL', next: 'Email · Today' },
      { name: 'Orbit Dental', status: 'Cold', tone: 'neutral', value: '$9,200', owner: 'OD', next: 'Call · Wed' },
      { name: 'Fernway Foods', status: 'Cold', tone: 'neutral', value: '$7,800', owner: 'FF', next: 'Email · Thu' },
    ],
  },
  {
    name: 'Qualified',
    count: 3,
    total: '$412,000',
    color: '#3355ff',
    deals: [
      { name: 'Northwind Co.', status: 'Hot', tone: 'green', value: '$24,000', owner: 'NC', next: 'Call · Tue' },
      { name: 'Kestrel Studio', status: 'Warm', tone: 'amber', value: '$12,750', owner: 'KS', next: 'Demo · Thu' },
      { name: 'Atlas Freight', status: 'Warm', tone: 'amber', value: '$15,600', owner: 'AF', next: 'Call · Fri' },
    ],
  },
  {
    name: 'Proposal',
    count: 2,
    total: '$368,250',
    color: '#7b5cfa',
    deals: [
      { name: 'Helio Retail', status: 'Hot', tone: 'green', value: '$48,000', owner: 'HR', next: 'Review · Fri' },
      { name: 'Summit Clinics', status: 'Warm', tone: 'amber', value: '$27,500', owner: 'SC', next: 'Review · Mon' },
    ],
  },
  {
    name: 'Negotiation',
    count: 2,
    total: '$221,900',
    color: '#d98a0b',
    deals: [
      { name: 'Acme Labs', status: 'At risk', tone: 'red', value: '$31,400', owner: 'AL', next: 'Follow-up · Mon' },
      { name: 'Granite Partners', status: 'Hot', tone: 'green', value: '$54,000', owner: 'GP', next: 'Legal review' },
    ],
  },
  {
    name: 'Won',
    count: 2,
    total: '$274,300',
    color: '#17a673',
    deals: [
      { name: 'Cedar & Co.', status: 'Won', tone: 'green', value: '$22,900', owner: 'CC', next: 'Kickoff · Next wk' },
      { name: 'Lumen Health', status: 'Won', tone: 'green', value: '$16,300', owner: 'LH', next: 'Onboarding' },
    ],
  },
]

const leads: Array<{
  initials: string
  name: string
  company: string
  source: string
  fit: number
  fitColor: string
  status: string
  tone: Tone
  activity: string
}> = [
  { initials: 'MC', name: 'Maya Chen', company: 'Bluepeak Logistics', source: 'Web form', fit: 92, fitColor: '#17a673', status: 'Qualified', tone: 'green', activity: 'Replied · 2h ago' },
  { initials: 'DO', name: 'Daniel Ortiz', company: 'Kestrel Studio', source: 'Webinar', fit: 74, fitColor: '#3355ff', status: 'Contacted', tone: 'blue', activity: 'Email opened · 5h ago' },
  { initials: 'PN', name: 'Priya Nair', company: 'Summit Clinics', source: 'Referral', fit: 81, fitColor: '#17a673', status: 'Meeting set', tone: 'green', activity: 'Meeting · Tomorrow' },
  { initials: 'TB', name: 'Tom Becker', company: 'Fernway Foods', source: 'CSV import', fit: 41, fitColor: '#d98a0b', status: 'Nurture', tone: 'amber', activity: 'Sequence step 2' },
  { initials: 'SL', name: 'Sara Lind', company: 'Orbit Dental', source: 'Inbound email', fit: 58, fitColor: '#3355ff', status: 'New', tone: 'neutral', activity: 'Created · Today' },
]

const columns = ['Lead', 'Company', 'Source', 'Fit score', 'Status', 'Last activity']
const colWidths = 'grid-cols-[220px_170px_130px_150px_120px_minmax(138px,1fr)]'

function Toolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex gap-0.5 rounded-lg bg-surface p-[3px] text-[13px] leading-[18px] font-medium">
          <span className="rounded-md border border-line bg-white px-3 py-[5px] text-ink">Board</span>
          <span className="px-3 py-[5px] text-subtle">List</span>
          <span className="px-3 py-[5px] text-subtle">Forecast</span>
        </div>
        {['Owner: All', 'Close date: This quarter'].map((f) => (
          <span
            key={f}
            className="hidden items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[13px] leading-[18px] font-medium text-muted md:flex"
          >
            {f}
            <Icon name="chevron-down" size={12} className="text-subtle" />
          </span>
        ))}
        <span className="hidden items-center gap-1.5 px-2.5 py-1.5 text-[13px] leading-[18px] font-medium text-subtle md:flex">
          <Icon name="filter" size={13} />
          Filter
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <Badge tone="violet">Sample data</Badge>
        <span className="rounded-[10px] bg-brand px-[18px] py-2 text-[15px] leading-5 font-semibold tracking-[-0.003em] text-white">
          New deal
        </span>
      </div>
    </div>
  )
}

function Board() {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-5 sm:px-5 xl:pb-0">
      <div className="grid min-w-[1022px] grid-cols-5 gap-2.5">
        {stages.map((s) => (
          <div key={s.name} className="flex flex-col gap-2 rounded-[10px] bg-surface p-2">
            <div className="flex flex-col gap-1.5 px-1 pt-1 pb-1.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[13px] leading-[18px] font-medium text-ink">
                  {s.name}
                  <Badge tone="neutral">{s.count}</Badge>
                </span>
                <span className="text-xs leading-4 text-subtle">{s.total}</span>
              </div>
              <span className="h-[3px] rounded-sm" style={{ background: s.color }} />
            </div>
            {s.deals.map((d) => (
              <DealCard key={d.name} deal={d} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function LeadTable() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-white">
      <div className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="flex items-center gap-2 text-sm leading-5 font-medium tracking-[-0.002em] text-ink">
          <Icon name="user-plus" size={16} />
          Lead records
          <Badge tone="neutral" className="max-sm:hidden">
            312 this month
          </Badge>
        </span>
        <span className="flex items-center gap-1 text-[13px] leading-[18px] font-medium text-brand">
          View all leads
          <Icon name="arrow-right" size={12} />
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1020px] text-left">
          <thead>
            <tr className={cx('grid gap-3 border-t border-line bg-surface px-4 py-2.5', colWidths)}>
              {columns.map((c) => (
                <th key={c} scope="col" className="text-[11px] leading-[14px] font-medium text-subtle uppercase">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr
                key={l.name}
                className={cx('grid items-center gap-3 border-t border-line px-4 py-3 text-[13px] leading-[18px] font-medium text-muted', colWidths)}
              >
                <td className="flex items-center gap-2 text-ink">
                  <Avatar initials={l.initials} />
                  {l.name}
                </td>
                <td>{l.company}</td>
                <td>{l.source}</td>
                <td className="flex items-center gap-2 text-ink">
                  <ScoreBar pct={l.fit} color={l.fitColor} className="w-[72px]" />
                  {l.fit}
                </td>
                <td>
                  <Badge tone={l.tone}>{l.status}</Badge>
                </td>
                <td>{l.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function Pipeline() {
  return (
    <section id="pipeline" className="scroll-mt-4 bg-white py-16 lg:py-28">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[660px] flex-col items-start gap-[18px]">
            <Eyebrow>Pipeline</Eyebrow>
            <h2 className="heading-2 text-ink">Your whole pipeline, current and in one view.</h2>
          </div>
          <div className="flex max-w-[440px] flex-col items-start gap-5">
            <p className="lede text-muted">
              Stages, deal values, owners, and next activities update automatically as emails, calls, and meetings happen.
            </p>
            <Button href="#get-started" variant="light" arrow>
              Explore the pipeline
            </Button>
          </div>
        </div>

        <div className="flex overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_16px_48px_rgba(13,18,33,0.08)]">
          <AppSidebar active="Pipeline" />
          <div className="flex min-w-0 flex-1 flex-col gap-[18px] p-4 sm:p-5">
            <AppTopBar title="Sales pipeline" />
            <Toolbar />
            <Board />
            <LeadTable />
          </div>
        </div>
      </Container>
    </section>
  )
}
