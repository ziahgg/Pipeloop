import { useEffect, useState } from 'react'
import { Icon } from '../components/Icon'
import { cx } from '../components/cx'
import { Badge, Button, Container } from '../components/ui'

const links = [
  { label: 'Product', href: '#platform', menu: true },
  { label: 'Solutions', href: '#solutions', menu: true },
  { label: 'Features', href: '#platform' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Resources', href: '#faq', menu: true },
  { label: 'Pricing', href: '#get-started' },
]

export function Logo({ dark }: { dark?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Pipeloop home">
      <span className="inline-flex size-8 items-center justify-center rounded-[9px] bg-brand text-white">
        <Icon name="workflow" size={18} />
      </span>
      <span
        className={cx(
          'font-display text-xl leading-[26px] font-semibold tracking-[-0.01em]',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        Pipeloop
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const close = () => window.innerWidth >= 1280 && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('resize', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('resize', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header id="top" className="relative z-30 bg-white">
      <div className="bg-night px-4 py-2.5 text-center sm:px-8 xl:px-20">
        <p className="flex flex-col items-center justify-center gap-x-3 gap-y-1.5 text-[13px] leading-[18px] font-medium text-white sm:flex-row sm:flex-wrap">
          <Badge tone="blue">New</Badge>
          <span>The AI Assistant can now draft follow-ups for your review before anything is sent.</span>
          <a href="#ai-assistant" className="inline-flex items-center gap-1 text-brand-light hover:underline">
            See what’s new
            <Icon name="arrow-right" size={14} />
          </a>
        </p>
      </div>

      <nav className="relative border-b border-line bg-white" aria-label="Main">
        <Container className="flex items-center justify-between py-4">
          <Logo />

          <ul className="hidden items-center gap-[30px] xl:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="inline-flex items-center gap-1 text-sm leading-5 font-medium tracking-[-0.002em] text-ink hover:text-brand"
                >
                  {l.label}
                  {l.menu && <Icon name="chevron-down" size={14} className="text-subtle" />}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href="#get-started" className="hidden text-sm leading-5 font-medium text-ink hover:text-brand xl:inline">
              Sign in
            </a>
            <Button href="#get-started" variant="light" className="max-xl:hidden">
              Book a Demo
            </Button>
            <Button href="#get-started" arrow className="max-sm:px-3.5 max-sm:py-2.5">
              Start Free
            </Button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[10px] border border-line text-ink xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </Container>

        {open && (
          <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-white shadow-[0_16px_40px_rgba(13,18,33,0.12)] xl:hidden">
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-[15px] font-medium text-ink hover:bg-surface"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 grid gap-3 border-t border-line pt-4 sm:grid-cols-2">
                <Button href="#get-started" variant="light">
                  Book a Demo
                </Button>
                <Button href="#get-started" variant="light">
                  Sign in
                </Button>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  )
}
