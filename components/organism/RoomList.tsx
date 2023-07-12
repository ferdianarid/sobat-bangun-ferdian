"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import RoomPreviewCard from "./RoomPreviewCard"
import { IRoomPreview } from "@interfaces"
import { containerVariant, childVariant } from "@animations"
import { detailRoomList } from "@data"

const RoomList = () => {
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
      className="w-full grid phone:grid-cols-1 tablet:grid-cols-2 grid-cols-3 gap-[16px] mt-[16px]">
      {detailRoomList.map((room: IRoomPreview) => (
        <RoomPreviewCard
          key={room.id}
          variant={childVariant}
          image={room.image}
          title={room.title}
          dimension={room.dimension}
        />
      ))}
    </motion.div>
  )
}

export default RoomList