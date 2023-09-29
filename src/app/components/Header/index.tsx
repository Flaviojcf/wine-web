'use client'
import { CiDark } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import Image from 'next/image'
import { NavItem } from './NavItem'
import Link from 'next/link'
import { NavItensLinks } from '@/utils/mock/header/navItens'
import { NavImages } from '@/utils/mock/header/navImages'
import { Menu } from './Menu'
import { useState, useEffect } from 'react'

export function Header() {
  const [theme, setTheme] = useState<string>('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <header className="flex h-20 bg-white border-b-2 border-gray-400 md:px-4 px-6 dark:bg-gray-800  dark:border-gray-700">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Menu />
          <Link href="/">
            <Image
              alt="Wine logo"
              src="/images/header/wineLogo.svg"
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

        <nav className="flex items-center justify-between w-32 sm:justify-end sm:gap-4 sm:w-28 sm:hidden">
          {NavImages.map((item) => (
            <Image
              key={`image-${item.alt}`}
              alt={item.alt}
              src={item.src}
              width={item.width}
              height={item.height}
              className={`cursor-pointer`}
            />
          ))}
        </nav>
        <div onClick={handleThemeSwitch}>
          <CiDark
            size={40}
            className={`cursor-pointer ${
              theme === 'dark' ? 'hidden' : 'flex'
            } fill-black`}
          />
          <MdDarkMode
            size={40}
            className={`cursor-pointer ${
              theme === 'dark' ? 'flex' : 'hidden'
            } fill-emerald-700`}
          />
        </div>
      </div>
    </header>
  )
}
