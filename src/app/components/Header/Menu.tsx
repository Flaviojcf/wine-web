'use client'
import { NavItensLinks } from '@/utils/mock/header/navItens'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import { NavItem } from './NavItem'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { NavImages } from '@/utils/mock/header/navImages'

export function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="hidden sm:flex">
        <div>
          <Image
            src="/images/header/menuWine.svg"
            alt="Dropdown Menu"
            width={21}
            height={16}
          />
        </div>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu.Content className="h-screen -mt-10" asChild forceMount>
            <motion.ul
              className="flex flex-col px-8 py-4 pt-16 
              rounded-md gap-4 text-black w-[290px] h-full bg-white z-50 drop-shadow-2xl dark:bg-gray-600"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex items-center justify-between w-32 -mt-10 sm:gap-4 sm:w-28">
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
              <div
                className="w-6 h-6 relative cursor-pointer -mt-8 ml-auto"
                onClick={() => setOpen(false)}
              >
                <div className="w-full h-0.5 bg-black absolute top-1/2 transform -translate-y-1/2 rotate-45 dark:bg-emerald-700"></div>
                <div className="w-full h-0.5 bg-black absolute top-1/2 transform -translate-y-1/2 -rotate-45 dark:bg-emerald-700"></div>
              </div>
              {NavItensLinks.map((item) => (
                <li key={`label-${item.label}`}>
                  <NavItem href={item.href} label={item.label} />
                </li>
              ))}
            </motion.ul>
          </DropdownMenu.Content>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  )
}
