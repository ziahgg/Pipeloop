import type { ReactNode } from 'react'
import { cx } from './cx'
import { Icon, type IconName } from './Icon'

/** 1280px content column with the 80px desktop gutter from the design. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx('mx-auto w-full max-w-[1440px] px-4 sm:px-8 xl:px-20', className)}>{children}</div>
}

type ButtonProps = {
  href: string
  variant?: 'primary' | 'light' | 'dark'
  arrow?: boolean
  className?: string
  children: ReactNode
}

export function Button({ href, variant = 'primary', arrow, className, children }: ButtonProps) {
  return (
    <a
      href={href}
      className={cx(
        'inline-flex items-center justify-center gap-2 rounded-[10px] px-[18px] py-3 text-[15px] leading-5 font-semibold tracking-[-0.003em] whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
        variant === 'primary' && 'bg-brand text-white hover:bg-[#2443e6]',
        variant === 'light' && 'border border-line bg-white text-ink hover:bg-surface',
        variant === 'dark' && 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
        className,
      )}
    >
      {children}
      {arrow && <Icon name="arrow-right" size={16} />}
    </a>
  )
}

export type Tone = 'blue' | 'violet' | 'green' | 'amber' | 'red' | 'neutral'

const toneClass: Record<Tone, string> = {
  blue: 'bg-brand-soft text-brand',
  violet: 'bg-violet-soft text-violet',
  green: 'bg-green-soft text-green',
  amber: 'bg-amber-soft text-amber',
  red: 'bg-red-soft text-red',
  neutral: 'bg-neutral-soft text-muted',
}

export function Badge({ tone = 'blue', className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span
      className={cx(
        'inline-flex shrink-0 items-center gap-[5px] rounded-full px-2 py-[3px] text-[11px] leading-[14px] font-medium whitespace-nowrap',
        toneClass[tone],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

export function Eyebrow({ icon = 'sparkles', dark, children }: { icon?: IconName; dark?: boolean; children: ReactNode }) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-full border py-1.5 pr-3 pl-2.5 text-[13px] leading-[18px] font-medium',
        dark ? 'border-white bg-white text-[#3b3b3b]' : 'border-line bg-white text-ink',
      )}
    >
      <Icon name={icon} size={14} className={dark ? 'text-brand-light' : 'text-violet'} />
      {children}
    </span>
  )
}

export function Avatar({ initials, size = 28, className }: { initials: string; size?: number; className?: string }) {
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.39 }}
      className={cx('inline-flex shrink-0 items-center justify-center rounded-full bg-brand-soft leading-none font-medium text-brand', className)}
    >
      {initials}
    </span>
  )
}

export function IconBadge({
  icon,
  size = 32,
  iconSize = 16,
  className,
}: {
  icon: IconName
  size?: number
  iconSize?: number
  className?: string
}) {
  return (
    <span
      style={{ width: size, height: size }}
      className={cx('inline-flex shrink-0 items-center justify-center rounded-[9px] bg-brand-soft text-brand', className)}
    >
      <Icon name={icon} size={iconSize} />
    </span>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  eyebrowIcon?: IconName
  title: ReactNode
  description?: ReactNode
  dark?: boolean
  className?: string
}

/** Centered eyebrow + 48/56 heading + 18/28 lede used by most sections. */
export function SectionHeader({ eyebrow, eyebrowIcon, title, description, dark, className }: SectionHeaderProps) {
  return (
    <div className={cx('mx-auto flex max-w-[760px] flex-col items-center gap-[18px] text-center', className)}>
      <Eyebrow icon={eyebrowIcon} dark={dark}>
        {eyebrow}
      </Eyebrow>
      <h2 className={cx('heading-2', dark ? 'text-white' : 'text-ink')}>{title}</h2>
      {description && (
        <p className={cx('lede max-w-[640px]', dark ? 'text-white' : 'text-muted')}>{description}</p>
      )}
    </div>
  )
}
