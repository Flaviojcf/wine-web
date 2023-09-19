import Link from 'next/link'

interface INavItem {
  label: string
  href: string
}

export function NavItem({ href, label }: INavItem) {
  return (
    <Link href={href}>
      <span className="text-gray-800 text-sm hover:text-navHoverColor transition-colors duration-200">
        {label}
      </span>
    </Link>
  )
}
