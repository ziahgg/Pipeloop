import { Icon, type IconName } from './Icon'
import { cx } from './cx'
import { Avatar, Badge, type Tone } from './ui'

// Shared pieces of the product UI mockups (hero dashboard and pipeline board).

const navItems: Array<{ label: string; icon: IconName; badge?: string }> = [
  { label: 'Dashboard', icon: 'grid' },
  { label: 'Leads', icon: 'user-plus' },
  { label: 'Contacts', icon: 'users' },
  { label: 'Accounts', icon: 'building' },
  { label: 'Pipeline', icon: 'kanban' },
  { label: 'Automations', icon: 'workflow' },
  { label: 'AI Assistant', icon: 'sparkles', badge: 'New' },
  { label: 'Reports', icon: 'chart' },
  { label: 'Settings', icon: 'sliders' },
]

export function AppSidebar({ active }: { active: string }) {
  return (
    <aside className="hidden w-[216px] shrink-0 flex-col gap-1 border-r border-line bg-surface px-3.5 py-5 lg:flex">
      <div className="flex items-center gap-2.5 pb-[18px] pl-1.5">
        <span className="inline-flex size-8 items-center justify-center rounded-[9px] bg-brand text-white">
          <Icon name="workflow" size={18} />
        </span>
        <span className="font-display text-xl leading-[26px] font-semibold tracking-[-0.01em] text-ink">Pipeloop</span>
      </div>
      {navItems.map((item) => {
        const isActive = item.label === active
        return (
          <span
            key={item.label}
            className={cx(
              'flex items-center gap-2.5 rounded-lg border px-2.5 py-2 text-[13px] leading-[18px] font-medium',
              isActive ? 'border-line bg-white text-ink' : 'border-transparent text-muted',
            )}
          >
            <Icon
              name={item.icon}
              size={16}
              className={isActive ? 'text-brand' : item.icon === 'sparkles' ? 'text-violet' : 'text-muted'}
            />
            {item.label}
            {item.badge && <Badge tone="violet">{item.badge}</Badge>}
          </span>
        )
      })}
    </aside>
  )
}

export function AppTopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-display text-lg leading-[26px] font-semibold tracking-[-0.01em] text-ink sm:text-xl">{title}</p>
      <div className="flex items-center gap-2.5">
        <span className="hidden h-[34px] w-[220px] items-center gap-2 rounded-lg border border-line bg-surface px-2.5 text-xs leading-4 text-subtle md:flex">
          <Icon name="search" size={14} />
          Search leads, deals…
        </span>
        <span className="hidden h-[34px] items-center gap-1.5 rounded-lg border border-line px-2.5 text-[13px] leading-[18px] font-medium text-ink sm:flex">
          <Icon name="calendar" size={14} className="text-muted" />
          This quarter
        </span>
        <span className="inline-flex size-[34px] items-center justify-center rounded-lg border border-line bg-white text-[#0a1a2f]">
          <Icon name="bell" size={16} />
        </span>
        <Avatar initials="AL" />
      </div>
    </div>
  )
}

export type Deal = { name: string; status: string; tone: Tone; value: string; owner: string; next: string }

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="flex flex-col gap-2.5 rounded-[10px] border border-line bg-white p-3">
      <div className="flex flex-col items-start gap-1.5">
        <p className="text-[13px] leading-[18px] font-medium text-ink">{deal.name}</p>
        <Badge tone={deal.tone}>{deal.status}</Badge>
      </div>
      <p className="font-display text-xl leading-6 font-semibold tracking-[-0.01em] text-ink">{deal.value}</p>
      <div className="flex items-center gap-2">
        <Avatar initials={deal.owner} />
        <span className="text-xs leading-4 text-subtle">{deal.next}</span>
      </div>
    </div>
  )
}

/** Thin progress bar used for fit scores and stage values. */
export function ScoreBar({ pct, color, className }: { pct: number; color: string; className?: string }) {
  return (
    <span className={cx('h-1.5 shrink-0 overflow-hidden rounded-[3px] bg-line', className)}>
      <span className="block h-full rounded-[3px]" style={{ width: `${pct}%`, background: color }} />
    </span>
  )
}
