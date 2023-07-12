import Image from "next/image"
import clsx from "clsx"
import { motion } from "framer-motion"
import Information from "./Information"
import Company from "@components/moleculs/Company"
import { HorizontalSeparator } from "@components/atoms/Separator"
import { IHouse } from "@interfaces"

const HousePreviewCard: React.FC<IHouse> = ({ image, title, type, price, startFrom, variant }) => {
  return (
    <motion.div
      variants={variant}
      className="w-full p-[16px] grid gap-[24px] border border-grey-200 rounded-[8px] bg-white"
    >
      <div className="w-full h-[201px] relative">
        <Image
          src={`/house/sae/${image}`}
          layout="fill"
          className="rounded-[4px]"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="grid gap-[16px]">
        <div className="grid gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <h1 className="font-bold text-[20px] leading-[24px] text-[#1A202C]">{title}</h1>
            <p className={clsx(
              "w-fit rounded-[16px] bg-grey-100 py-[4px] px-[12px]",
              "font-normal text-[14px] leading-[19.6px] text-black"
            )}>{type}</p>
          </div>
          <Company image="studio-sae.png" company="Studio Sae" />
        </div>
        <Information />
        <HorizontalSeparator />
        <div>
          <div className="grid gap-[4px]">
            <p className="small-text text-black">Harga Desain</p>
            <h1 className="font-semibold text-heading-4 text-black leading-[28.8px]">
              Rp. {Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(price)}
            </h1>
            <p className="small-text text-grey-600">
              Harga konstruksi mulai dari Rp. {Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(startFrom)}
            </p>
          </div>
        </div>
        <button className={clsx(
          "w-full py-[8px] bg-white rounded-[6px] border border-primary-600",
          "hover:text-white hover:bg-primary-600 transition-all duration-300",
          "text-primary-700 font-semibold text-[14px] leading-[21px]"
        )}>Lihat Detail</button>
      </div>
    </motion.div>
  )
}

export default HousePreviewCard