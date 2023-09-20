import Link from 'next/link'

interface INavItem {
  label: string
  href: string
}

export function NavItem({ href, label }: INavItem) {
  return (
    <Link
      href={href}
      className={`flex items-center h-[78px] ${
        label === 'Loja'
          ? 'border-b-2 border-b-navBorderBottom sm:border-none'
          : ''
      }`}
    >
      <span
        className={`text-gray-800 text-sm hover:text-navHoverColor transition-colors duration-200 
        ${label === 'Loja' ? 'text-navHoverColor' : ''}`}
      >
        {label}
      </span>
    </Link>
  )
}
