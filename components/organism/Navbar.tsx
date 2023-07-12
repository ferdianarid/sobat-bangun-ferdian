"use client"

import Image from "next/image"
import { useState } from "react"
import { Transition } from "@headlessui/react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavbarLink } from "@components/atoms/Links"
import { navlinkList } from "@data"
import { DropdownAbout, DropdownService } from "./Dropdown"
import "react-lazy-load-image-component/src/effects/blur.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full relative z-[50] py-10 phone:p-[24px] tablet:px-[40px] px-[62px] bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="md:hidden block">
          <LazyLoadImage
            src="/logo.svg"
            effect="blur"
            className="block" width={147} height={42} alt="sobat-bangun-logo"
          />
        </div>
        <div className="phone:hidden w-full flex items-center justify-between mx-auto">
          <LazyLoadImage
            src="/logo.svg"
            effect="blur"
            className="hidden md:block" width={147} height={42} alt="sobat-bangun-logo"
          />
          <div className="w-fit phone:hidden flex items-center tablet:gap-[20px] gap-8">

            {/* Client Component */}
            <DropdownAbout />
            <DropdownService />

            {navlinkList.map((link: any, idx: number) => (
              <NavbarLink key={idx} route={link.route} title={link.title} />
            ))}
          </div>
          <div className="phone:hidden flex items-center gap-4">
            <button className="button-md-navbar bg-white text-black">Daftar</button>
            <button className="button-md-navbar bg-primary-700 text-white hover:bg-[#E62936]">Masuk</button>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-900 focus:outline-none "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref: any) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="flex flex-col py-[24px]">
              <div className="w-fit md:hidden flex flex-col gap-[16px]">

                {/* Client Component */}
                <DropdownAbout />
                <DropdownService />

                {navlinkList.map((link: any, idx: number) => (
                  <NavbarLink key={idx} route={link.route} title={link.title} />
                ))}
              </div>
              <div className="w-full flex items-center gap-4 mt-[16px]">
                <button className="w-full py-[10px] px-[16px] rounded-[6px] bg-white text-black font-semibold text-md leading-[20.11px] border-none">Daftar</button>
                <button className="w-full py-[10px] px-[16px] rounded-[6px] bg-primary-700 hover:bg-[#E62936] text-white font-semibold text-md leading-[20.11px] border-none">Masuk</button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Navbar