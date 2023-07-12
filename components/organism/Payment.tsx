import Image from "next/image"
import { IListPayment, IPayment } from "@interfaces"

const Payment: React.FC<IPayment> = ({ title, prefix, listPayment }) => {
  return (
    <div className="w-full gap-[4px]">
      <h1 className="font-semibold text-[16px] leading-[19.2px] text-white">{title}</h1>
      <div className="flex items-center tablet:gap-[16px] gap-[24px]">
        {listPayment.map((pay: IListPayment, idx: number) => (
          <div key={idx} className="relative w-[56px] h-fit">
            <Image src={`/${prefix}/${pay}.png`} width={56} height={56} alt={`pay-${pay}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Payment