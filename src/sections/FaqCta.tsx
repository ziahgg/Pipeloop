import { useId, useState } from 'react'
import { Icon } from '../components/Icon'
import { cx } from '../components/cx'
import { Button, Container, Eyebrow, IconBadge } from '../components/ui'

// Answers for the closed items come from the hidden answer layers in the Figma FAQ component.
const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most teams start with guided setup: connect email and calendar, import contacts, and pick a pipeline template. Your onboarding plan sets the timeline based on your data and workflows.',
  },
  {
    q: 'Which tools does Pipeloop integrate with?',
    a: 'Common email, calendar, team chat, video meeting, form, and billing tools, plus webhooks and an API. [Add your current integration list.]',
  },
  {
    q: 'How much control do we have over automations?',
    a: 'You decide what runs automatically. Every workflow has on/off controls, conditions, and approval steps, and every automated change is logged.',
  },
  {
    q: 'Does the AI send messages on its own?',
    a: 'Not by default. AI drafts and suggestions wait for a rep to review and approve them. Admins choose which actions, if any, can run without approval.',
  },
  {
    q: 'How is our data protected?',
    a: 'Role-based permissions and audit logs control who can see and change what. [Add verified details on encryption, certifications, and data residency.]',
  },
  {
    q: 'What does onboarding include?',
    a: 'Guided setup, data import support, workflow templates, and training for your team. [Add plan-specific onboarding details.]',
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <div className="rounded-[14px] border border-line bg-white">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="flex-1 font-display text-lg leading-6 font-semibold tracking-[-0.01em] text-ink sm:text-xl sm:leading-[26px]">
            {q}
          </span>
          <span
            className={cx(
              'inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
              open ? 'bg-ink text-white' : 'bg-surface text-ink',
            )}
          >
            <Icon name={open ? 'minus' : 'plus'} size={16} />
          </span>
        </button>
      </h3>
      <div id={id} hidden={!open} className="-mt-2.5 px-5 pb-5 sm:px-6">
        <p className="text-base leading-6 tracking-[-0.003em] text-muted">{a}</p>
      </div>
    </div>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div id="faq" className="grid scroll-mt-4 gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
      <div className="flex flex-col items-start gap-5">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="heading-2 text-ink">Questions, answered.</h2>
        <p className="lede text-muted">
          What teams usually ask before they switch. Can’t find your question? Our team is happy to help.
        </p>
        <div className="flex w-full flex-col items-start gap-3.5 rounded-2xl bg-surface p-6">
          <IconBadge icon="chat" size={40} iconSize={20} className="rounded-[11px]" />
          <p className="font-display text-xl leading-[26px] font-semibold tracking-[-0.01em] text-ink">Still deciding?</p>
          <p className="text-sm leading-5 text-muted">
            Get answers about your setup, data, and workflows from a product specialist.
          </p>
          <Button href="#get-started" variant="light" arrow>
            Contact sales
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
        ))}
      </div>
    </div>
  )
}

function FinalCta() {
  return (
    <div
      id="get-started"
      className="grid scroll-mt-4 items-center gap-10 rounded-[20px] bg-night p-6 sm:p-10 lg:grid-cols-[1fr_400px] lg:gap-12 lg:rounded-[28px] lg:p-16"
    >
      <div className="flex flex-col items-start gap-[22px]">
        <Eyebrow dark>Get started</Eyebrow>
        <h2 className="font-display text-[40px] leading-[46px] font-semibold tracking-[-0.03em] text-white sm:text-[56px] sm:leading-[62px] lg:text-[72px] lg:leading-[78px]">
          See AI-powered CRM in action.
        </h2>
        <p className="lede max-w-[704px] text-white">
          Book a personalized demo with your own pipeline in mind, or start free and connect your inbox in a few steps.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="#get-started" arrow>
            Book a Demo
          </Button>
          <Button href="#get-started" variant="dark" arrow>
            Start Free
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-white p-6">
        <div className="flex items-center gap-2.5">
          <IconBadge icon="video" size={36} iconSize={18} className="rounded-[10px]" />
          <span className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">In your demo</span>
        </div>
        {['A walkthrough using a pipeline like yours', 'How AI drafts and approvals work', 'Integration and data-import options'].map(
          (item) => (
            <p key={item} className="flex items-center gap-2.5 text-[13px] leading-[18px] font-medium text-ink">
              <Icon name="check-circle" size={16} className="text-green" />
              {item}
            </p>
          ),
        )}
        <hr className="border-line" />
        <p className="flex items-center gap-2 text-xs leading-4 text-subtle">
          <Icon name="clock" size={14} />
          30 minutes · with a product specialist
        </p>
      </div>
    </div>
  )
}

export function FaqCta() {
  return (
    <section className="bg-white py-16 lg:py-28">
      <Container className="flex flex-col gap-16 lg:gap-24">
        <Faq />
        <FinalCta />
      </Container>
    </section>
  )
}
