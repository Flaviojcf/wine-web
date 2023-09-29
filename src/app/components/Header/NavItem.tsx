import { INavItem } from '@/app/interfaces/INavItem'
import Link from 'next/link'

export function NavItem({ href, label }: INavItem) {
  return (
    <Link
      href={href}
      className={`flex items-center h-[78px] group ${
        label === 'Loja'
          ? 'border-b-2 border-b-navBorderBottom sm:border-none dark:border-b-emerald-700'
          : ''
      }`}
    >
      <span
        className={`text-gray-800 font-bold text-sm hover:text-navHoverColor transition-colors duration-200 
        dark:hover:text-emerald-700
        ${
          label === 'Loja'
            ? 'text-navHoverColor dark:text-emerald-700'
            : 'dark:text-white'
        }`}
      >
        {label}
      </span>
    </Link>
  )
}
