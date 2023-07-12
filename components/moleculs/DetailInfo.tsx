import Image from "next/image"
import { IDetailInfo } from "@interfaces"

const DetailInfo = ({ icons, title, children }: IDetailInfo) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={`/icons/${icons}.svg`} width={24} height={24} alt={icons} />
      <p className="caption-text">{title}</p>
      <p className="small-text text-black">{children}</p>
    </div>
  )
}

export default DetailInfo