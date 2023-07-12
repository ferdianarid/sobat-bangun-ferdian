import Image from "next/image"
import { ITestimonial } from "@interfaces"

const Testimonial: React.FC<ITestimonial> = ({ name, rating, description }) => {
  return (
    <div className="flex items-start gap-[16px]">
      <Image src="/icons/account-circle.svg" width={44} height={44} alt="account" />
      <div className="grid gap-[4px]">
        <div className="flex gap-[8px] items-center">
          <h3 className="medium-text font-semibold text-dark">{name}</h3>
          <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0V16" stroke="#C5C7D0" />
          </svg>
          <div className="flex gap-[4px] items-center">
            <Image src="/icons/star.svg" width={20} height={20} alt="star" />
            <h3 className="font-normal text-[14px] leading-[28px] text-[#4A5568]">{rating}</h3>
          </div>
        </div>
        <p className="text-[16px] leading-[21.76px] font-normal text-grey-700">{description}</p>
      </div>
    </div>
  )
}

export default Testimonial