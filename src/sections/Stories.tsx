import { Icon } from '../components/Icon'
import { Badge, Button, Container, Eyebrow } from '../components/ui'

function Label({ children }: { children: string }) {
  return <p className="text-xs leading-4 font-semibold tracking-[0.06em] text-brand uppercase">{children}</p>
}

function CaseStudy() {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-[500px_1fr]">
      <div className="flex flex-col justify-between gap-[22px] bg-night p-6 sm:p-10">
        <span className="inline-flex items-center gap-2.5 self-start rounded-[10px] border border-dashed border-white px-3.5 py-2.5 text-sm leading-5 font-medium text-white">
          <span className="size-[18px] rounded-[5px] bg-white" />
          [Customer logo]
        </span>
        <div className="flex flex-col items-start gap-4">
          <Badge tone="violet">Case study · Placeholder</Badge>
          <h3 className="font-display text-2xl leading-[30px] font-semibold tracking-[-0.015em] text-white sm:text-[28px] sm:leading-[34px]">
            [Headline describing the customer’s verified outcome]
          </h3>
          <ul className="flex flex-wrap gap-2">
            {['[Industry]', '[Team size]', '[Region]'].map((c) => (
              <li
                key={c}
                className="rounded-full border border-white/20 bg-white/10 px-2.5 py-[5px] text-[13px] leading-[18px] font-medium text-white"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 p-6 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <Label>The challenge</Label>
            <p className="text-base leading-6 tracking-[-0.003em] text-muted">
              [Describe the problem the team faced before switching.]
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Label>The approach</Label>
            <p className="text-base leading-6 tracking-[-0.003em] text-muted">
              [Describe how the team set up pipelines, automations, and AI assistance.]
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Label>Verified results</Label>
          <div className="grid gap-3 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-1 rounded-xl border border-dashed border-line bg-surface p-4">
                <p className="font-display text-[28px] leading-8 font-semibold tracking-[-0.02em] text-ink">[Metric]</p>
                <p className="text-xs leading-4 text-subtle xl:whitespace-nowrap">[What improved, over what period]</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5 text-xs leading-4 text-subtle">
            <Icon name="shield" size={14} />
            Publish only customer-approved, verifiable results.
          </p>
          <Button href="#stories" variant="light" arrow>
            Read the case study
          </Button>
        </div>
      </div>
    </article>
  )
}

function Testimonial() {
  return (
    <figure className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <Icon name="quote" size={28} className="text-brand" />
        <Badge tone="neutral">Placeholder</Badge>
      </div>
      <blockquote className="lede text-ink">
        [Customer quote placeholder — replace with a verified quote, shared with written permission.]
      </blockquote>
      <hr className="border-line" />
      <figcaption className="flex items-center gap-3">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-surface text-subtle">
          <Icon name="user" size={18} />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-sm leading-5 font-medium tracking-[-0.002em] text-ink">[Name], [Role]</span>
          <span className="text-xs leading-4 text-subtle">[Company] · [Industry]</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Stories() {
  return (
    <section id="stories" className="scroll-mt-4 bg-surface py-16 lg:py-28">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-[660px] flex-col items-start gap-[18px]">
            <Eyebrow>Customer stories</Eyebrow>
            <h2 className="heading-2 text-ink">Customer stories, ready for real results.</h2>
          </div>
          <p className="lede max-w-[440px] text-muted">
            Every block below is a labeled placeholder. Replace it with a verified case study or quote, shared with the
            customer’s written permission.
          </p>
        </div>
        <CaseStudy />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </Container>
    </section>
  )
}
