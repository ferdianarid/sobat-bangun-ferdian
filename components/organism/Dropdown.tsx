"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

export const DropdownAbout = () => {
  return (
    <NavigationMenu.Root className="relative w-fit z-[100] flex justify-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center outline-none gap-2 font-semibold text-md leading-[36px] text-black group  select-none rounded-[4px]">
            Tentang Kami
            <Image className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" src="/icons/arrow-down-black.svg" width={20} height={20} alt="arrow" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={clsx(
            "py-[8px] pl-[16px] pr-[24px] z-[80] absolute top-[48px] left-0 w-full bg-white border border-grey-200 rounded-[8px]",
            "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight"
          )}>
            <ul className="one m-0 grid list-none gap-[10px]">
              <li className="grid">
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Karyawan</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Jangkauan</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Kantor</Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export const DropdownService = () => {
  return (
    <NavigationMenu.Root className="relative w-fit z-[80] flex justify-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex items-center outline-none gap-2 font-semibold text-md leading-[36px] text-primary-700 group  select-none rounded-[4px]">
            Produk & Layanan
            <Image className="transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" src="/icons/arrow-down.svg" width={20} height={20} alt="arrow" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className={clsx(
            "py-[8px] pl-[16px] pr-[24px] z-[80] absolute top-[48px] left-0 w-full bg-white border border-grey-200 rounded-[8px]",
            "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight"
          )}>
            <ul className="one m-0 grid list-none gap-[10px]">
              <li className="grid">
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Desain Rumah</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-primary-700" href="#">Layanan Design</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Renovasi</Link>
                </NavigationMenu.Link>
                <NavigationMenu.Link asChild>
                  <Link className="font-semibold text-md leading-[36px] text-black" href="#">Bangun Rumah</Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}