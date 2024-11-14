'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="grid h-[50px] grid-cols-[1fr_1fr_1fr_1fr] rounded-tr-base border-b-4 border-b-border bg-black text-xl dark:border-b-darkBorder w600:text-lg w400:h-10 w400:text-base portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'bg-main text-text',
        )}
        href="/"
      >
        Home
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/about' ? 'bg-black text-white' : 'bg-main text-text',
        )}
        href="/about"
      >
        About Me
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/contact' ? 'bg-black text-white' : 'bg-main text-text',
        )}
        href="/contact"
      >
        Contact
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/work' ? 'bg-black text-white' : 'bg-main text-text',
        )}
        href="/work"
      >
        Projects
      </Link>
    </nav>
  )
}
