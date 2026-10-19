import type { FormEvent } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { Container } from '../components/ui'
import { Logo } from './Header'

const columns: Array<{ title: string; links: Array<[string, string]> }> = [
  {
    title: 'Product',
    links: [
      ['Overview', '#platform'],
      ['Pipeline', '#pipeline'],
      ['Automations', '#automation'],
      ['AI Assistant', '#ai-assistant'],
      ['Reports', '#insights'],
      ['Pricing', '#get-started'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['Sales teams', '#solutions'],
      ['Marketing teams', '#solutions'],
      ['Revenue operations', '#solutions'],
      ['Small businesses', '#solutions'],
    ],
  },
  {
    title: 'Integrations',
    links: [
      ['Email', '#integrations'],
      ['Calendar', '#integrations'],
      ['Team chat', '#integrations'],
      ['Web forms', '#integrations'],
      ['API & webhooks', '#integrations'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Blog', '#'],
      ['Guides', '#'],
      ['Webinars', '#'],
      ['Help center', '#faq'],
      ['Changelog', '#'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#'],
      ['Careers', '#'],
      ['Customers', '#stories'],
      ['Partners', '#'],
      ['Press', '#'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy policy', '#'],
      ['Terms of service', '#'],
      ['Security', '#'],
      ['Data processing', '#'],
      ['Cookie settings', '#'],
    ],
  },
  {
    title: 'Contact',
    links: [
      ['sales@pipeloop.example', 'mailto:sales@pipeloop.example'],
      ['support@pipeloop.example', 'mailto:support@pipeloop.example'],
      ['[Office address]', '#'],
      ['Book a demo', '#get-started'],
    ],
  },
]

const socials: Array<{ icon: IconName; label: string }> = [
  { icon: 'linkedin', label: 'LinkedIn' },
  { icon: 'x-social', label: 'X' },
  { icon: 'youtube', label: 'YouTube' },
]

function Newsletter() {
  // Static site with no backend: the form validates the address but is not connected to a mailing service yet.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()
  return (
    <div className="flex w-full max-w-[440px] flex-col gap-3">
      <p className="font-display text-xl leading-[26px] font-semibold tracking-[-0.01em] text-white">
        Sales automation insights, monthly
      </p>
      <p className="text-sm leading-5 text-white">Practical playbooks for pipelines, follow-ups, and AI-assisted selling.</p>
        <form onSubmit={onSubmit} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-[5px]">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@company.com"
            className="min-w-0 flex-1 bg-transparent px-2.5 text-sm leading-5 text-white placeholder:text-white/60 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-[10px] bg-brand px-[18px] py-[9px] text-[15px] leading-5 font-semibold tracking-[-0.003em] text-white hover:bg-[#2443e6]"
          >
            Subscribe
          </button>
        </form>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-night pt-16 pb-10 lg:pt-20">
      <Container className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-[360px] flex-col gap-[18px]">
            <Logo dark />
            <p className="text-sm leading-5 text-white">
              AI-powered CRM and sales automation for teams that want to spend more time selling.
            </p>
            <ul className="flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    aria-label={s.label}
                    className="inline-flex size-9 items-center justify-center rounded-[10px] border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  >
                    <Icon name={s.icon} size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Newsletter />
        </div>

        <hr className="border-white/10" />

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:justify-between">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <p className="text-xs leading-4 font-semibold tracking-[0.06em] text-white uppercase">{col.title}</p>
              {col.links.map(([label, href]) => (
                <a key={label} href={href} className="text-sm leading-5 break-words text-white hover:text-brand-light">
                  {label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <hr className="border-white/10" />

        <div className="flex flex-col justify-between gap-4 text-xs leading-4 text-white md:flex-row">
          <p>© 2026 Pipeloop. All rights reserved. Pipeloop is a fictional brand used for this design.</p>
          <ul className="flex gap-5">
            {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand-light">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
