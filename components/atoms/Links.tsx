import Link from "next/link"
import { ReactNode } from "react"
import clsx from "clsx"
import { IFooterLink } from "@interfaces"

export const FooterLink = ({ route, title }: IFooterLink) => (
  <Link href={route} className="footer-link phone:text-[14px] phone:leading-[23px]">{title}</Link>
)

export const NavbarLink = ({ route, title }: IFooterLink) => (
  <Link href={route} className="font-semibold text-md leading-[36px] text-black">{title}</Link>
)

export const SocialMedia = ({ children }: { children: ReactNode }) => (
  <button className={clsx(
    "w-[51.56px] h-[50px] rounded-full border-none bg-white flex items-center justify-center hover:cursor-pointer",
    "transition-all duration-300"
  )}>
    {children}
  </button>
)