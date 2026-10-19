import type { CSSProperties } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { cx } from '../components/cx'
import { Badge, Button, Container, SectionHeader } from '../components/ui'
import { Logo } from './Header'

type Tile = { icon: IconName; name: string; note: string; x: number; y: number }

const tiles: Tile[] = [
  { icon: 'mail', name: 'Email', note: 'Sync conversations', x: 60, y: 80 },
  { icon: 'chat', name: 'Team chat', note: 'Deal alerts & summaries', x: 272, y: 80 },
  { icon: 'calendar', name: 'Calendar', note: 'Book & log meetings', x: 60, y: 330 },
  { icon: 'video', name: 'Video meetings', note: 'Call notes & summaries', x: 272, y: 330 },
  { icon: 'inbox', name: 'Web forms', note: 'Capture new leads', x: 840, y: 80 },
  { icon: 'megaphone', name: 'Marketing automation', note: 'Campaign engagement', x: 1052, y: 80 },
  { icon: 'credit-card', name: 'Billing', note: 'Invoices & renewals', x: 840, y: 330 },
  { icon: 'database', name: 'Data warehouse', note: 'Reporting & exports', x: 1052, y: 330 },
]

// Dashed connectors from the 1280×560 Figma hub frame, in absolute frame coordinates.
const connectors = [
  'M228 146h44',
  'M228 396h44',
  'M440 146c25 0 25 104 50 104',
  'M440 396c25 0 25-86 50-86',
  'M840 146c-25 0-25 104-50 104',
  'M840 396c-25 0-25-86-50-86',
  'M1008 146h44',
  'M1008 396h44',
]

function TileCard({ tile, className, style }: { tile: Tile; className?: string; style?: CSSProperties }) {
  return (
    <div
      className={cx('flex flex-col items-center gap-2.5 rounded-2xl border border-line bg-white p-4 text-center', className)}
      style={style}
    >
      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-surface text-ink">
        <Icon name={tile.icon} size={22} />
      </span>
      <span className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">{tile.name}</span>
      <span className="text-[11px] leading-[14px] font-medium text-subtle">{tile.note}</span>
    </div>
  )
}

function Hub({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <div
      className={cx(
        'flex flex-col items-center gap-3.5 rounded-[20px] border border-line bg-white p-6 shadow-[0_16px_40px_rgba(13,18,33,0.1)]',
        className,
      )}
      style={style}
    >
      <Logo />
      <span className="text-xs leading-4 text-subtle">Your CRM data &amp; workflows</span>
      <div className="flex max-w-[252px] flex-wrap justify-center gap-1.5">
        {['Contacts', 'Deals', 'Activities', 'Workflows'].map((t) => (
          <Badge key={t} tone="blue">
            {t}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function Integrations() {
  return (
    <section id="integrations" className="scroll-mt-4 bg-white py-16 lg:py-28">
      <Container className="flex flex-col items-center gap-10 lg:gap-12">
        <SectionHeader
          eyebrow="Integrations"
          title="Connected to the tools your team already uses."
          description="Sync contacts, conversations, meetings, and activity both ways, so your CRM stays current without manual data entry."
        />

        <div className="relative hidden h-[560px] w-full max-w-[1280px] rounded-3xl bg-surface xl:block">
          <svg className="absolute inset-0" width="1280" height="560" fill="none" aria-hidden="true">
            <g stroke="#3355ff" strokeWidth="1.5" strokeDasharray="5 5">
              {connectors.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
          </svg>
          <Hub className="absolute w-[300px]" style={{ left: 490, top: 194 }} />
          {tiles.map((t) => (
            <TileCard key={t.name} tile={t} className="absolute h-[132px] w-[168px]" style={{ left: t.x, top: t.y }} />
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-4 rounded-3xl bg-surface p-4 sm:p-8 xl:hidden">
          <Hub className="w-full max-w-[300px]" />
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {tiles.map((t) => (
              <TileCard key={t.name} tile={t} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:flex-row">
          <p className="text-sm leading-5 text-subtle">
            Integration categories shown as examples — no third-party partnership is implied.
          </p>
          <Button href="#get-started" variant="light" arrow>
            Browse integrations
          </Button>
        </div>
      </Container>
    </section>
  )
}
