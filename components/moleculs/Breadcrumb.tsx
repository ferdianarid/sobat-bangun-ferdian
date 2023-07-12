import Image from "next/image"

const Breadcrumb = () => {
  return (
    <div className="w-full phone:p-[24px] tablet:px-[40px] tablet:pt-[16px] tablet:pb-[24px] px-[64px] py-[24px] bg-white">
      <div className="max-w-[1440px] mx-auto flex items-center phone:gap-[4px] gap-[8px]">
        <button className="font-semibold text-[14px] leading-[21px] text-primary-700">Home</button>
        <Image src="/icons/chevron-right.svg" width={24} height={24} alt="arrow-right" />
        <button className="font-semibold text-[14px] leading-[21px] text-primary-700">Layanan Design</button>
        <Image src="/icons/chevron-right.svg" width={24} height={24} alt="arrow-right" />
        <button className="font-semibold text-grey-500 text-[14px] leading-[21px]">Omah Apik 3</button>
      </div>
    </div>
  )
}

export default Breadcrumb