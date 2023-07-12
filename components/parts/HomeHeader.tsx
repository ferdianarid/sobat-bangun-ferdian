"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import { listImageHero } from "@data"

const HomeHeader = () => {
  return (
    <header className="w-full max-w-[1440px] mx-auto phone:h-[300px] tablet:h-[400px] h-[552px] bg-grey-500">
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        className="h-[552px] tablet:h-[400px] phone:h-[300px] w-full relative"
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop={true}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button"
        }}
      >
        <button className="carousel-button phone:left-[20px] phone:bottom-[20px] left-[43px] prev-button">
          <Image src="/icons/chevron-left.svg" width={28} height={28} alt="left" />
        </button>

        {listImageHero.map((item: any, idx: number) => (
          <SwiperSlide key={idx} className="w-full relative h-[552px]">
            <Image src={`/house/hero/${item.originalImage}`} layout="fill" objectFit="cover" alt="images" />
          </SwiperSlide>
        ))}

        <button className="carousel-button phone:right-[20px] phone:bottom-[20px] right-[43px] next-button">
          <Image src="/icons/chevron-left.svg" className="rotate-180" width={28} height={28} alt="right" />
        </button>
      </Swiper>
    </header>
  )
}

export default HomeHeader