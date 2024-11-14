import { ClassValue } from 'clsx'

import { cn } from '@/lib/utils'

export default function Avatar({
  className,
  imageUrl,
}: {
  className?: ClassValue
  imageUrl: string
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={cn(
        'size-32 aspect-square rounded-full border-2 border-border bg-cover bg-center dark:border-darkBorder',
        className,
      )}
    ></div>
  )
}
