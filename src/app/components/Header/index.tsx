'use client'
import Image from 'next/image'
import { NavItem } from './NavItem'
import Link from 'next/link'
import { NavItensLinks } from '@/utils/mock/header/navItens'
import { NavImages } from '@/utils/mock/header/navImages'
import { Menu } from './DropdownMenu'

export function Header() {
  return (
    <header className="flex h-20 bg-white border-b-2 border-gray-400 md:px-4 px-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Menu />
          <Link href="/">
            <Image
              alt="Wine logo"
              src="/images/header/wineLogo.png"
              width={101}
              height={31}
            />
          </Link>
        </div>

        <nav className="flex items-center justify-between w-[479px] lg:hidden">
          {NavItensLinks.map((item) => (
            <NavItem
              href={item.href}
              label={item.label}
              key={`label-${item.label}`}
            />
          ))}
        </nav>

        <nav className="flex items-center justify-between w-64 sm:justify-end sm:gap-6 sm:w-28">
          {NavImages.map((item) => (
            <Image
              key={`image-${item.alt}`}
              alt={item.alt}
              src={item.src}
              width={item.width}
              height={item.height}
              className={`cursor-pointer ${
                item.alt === 'Wine account image' ? 'sm:hidden' : ''
              }`}
            />
          ))}
        </nav>
      </div>
    </header>
  )
}
