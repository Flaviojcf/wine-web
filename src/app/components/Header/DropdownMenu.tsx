import { NavItensLinks } from '@/utils/mock/header/navItens'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './NavItem'

export function Menu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="hidden sm:flex">
        <Image
          src="/images/menuWine.png"
          alt="Dropdown Menu"
          width={21}
          height={16}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="z-50">
        <ul className="bg-white flex flex-col px-8 py-4 rounded-md gap-4 text-black mt-6 ml-2 ">
          {NavItensLinks.map((item) => (
            <li key={`label-${item.label}`}>
              <NavItem href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
