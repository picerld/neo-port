import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

export default function Badge({
  className,
  text,
}: {
  className?: ClassValue
  text: string
}) {
  return (
    <div
      className={cn(
        'w-min rounded-base border-2 border-border bg-main px-3 py-1.5 text-sm font-base text-text dark:border-darkBorder',
        className,
      )}
    >
      {text}
    </div>
  )
}
