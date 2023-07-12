"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { IHouse } from "@interfaces"
import HousePreviewCard from "./HousePreviewCard"
import { listHouseDetail } from "@data"
import { childVariant, containerVariant } from "@animations"

const HouseList = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariant}
      className="w-full grid grid-cols-4 tablet:grid-cols-3 phone:grid-cols-1 gap-[16px] mt-[24px]">
      {listHouseDetail.map((item: IHouse) => (
        <HousePreviewCard
          key={item.id}
          variant={childVariant}
          image={item.image}
          type={item.type}
          title={item.title}
          price={item.price}
          startFrom={item.startFrom}
        />
      ))}
    </motion.div>
  )
}

export default HouseList