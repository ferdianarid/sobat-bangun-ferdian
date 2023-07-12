import Image from "next/image"
import { motion } from "framer-motion"
import { IRoomPreview } from "@interfaces"

const RoomPreviewCard: React.FC<IRoomPreview> = ({ image, title, dimension, variant }) => {
  return (
    <motion.div
      variants={variant}
      className="w-full p-[16px] rounded-[8px] border border-grey-200 bg-white"
    >
      <div className="w-full h-[201px] tablet:h-[180px] rounded-[4px] relative">
        <Image
          src={`/house/${image}`}
          className="rounded-[4px]"
          layout="fill"
          alt={image}
          objectFit="cover"
        />
      </div>
      <div className="mt-[24px]">
        <h1 className="font-semibold text-[#1A202C] text-heading-5 leading-[24px]">{title}</h1>
        <p className="text-[14px] leading-[21px] text-black mt-[8px] font-normal">{dimension}</p>
      </div>
    </motion.div>
  )
}

export default RoomPreviewCard