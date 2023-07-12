import clsx from "clsx"
import Image from "next/image"
import Company from "@components/moleculs/Company"
import Information from "@components/organism/Information"
import Testimonial from "@components/organism/Testimonial"
import RoomList from "@components/organism/RoomList"
import { HorizontalSeparator } from "@components/atoms/Separator"
import { ITestimonial } from "@interfaces"
import { testimonialList } from "@data"

const RoomPreview = () => {
  return (
    <section className="w-full phone:p-[24px] tablet:px-[40px] phone:pb-[48px] pt-[24px] px-[64px] pb-[135px] tablet:pb-[80px]">
      <div className="max-w-[1440px] mx-auto flex phone:flex-col phone:gap-[24px] tablet:gap-[24px] gap-[36px]">
        <div className="w-full">
          <h1 className="font-semibold text-heading-4 text-dark leading-[28.8px]">Tampilan Rumah</h1>

          {/* Client Component */}
          <RoomList />
        </div>

        <div className="w-full phone:max-w-full tablet:max-w-[350px] max-w-[364px] grid tablet:gap-[24px] gap-[32px]">
          <div className="w-full h-fit border border-grey-200 rounded-[16px] p-[24px]">
            <h1 className="font-semibold text-heading-4 text-dark leading-[28.8px]">Omah Apik 3</h1>

            <Company image="studio-sae.png" company="Studio Sae" classnames="mt-[8px]" />

            <div className="grid gap-[16px] mt-[16px]">
              <div className="flex gap-[24px]">
                <div className="grid gap-[8px]">
                  <p className="description-text text-grey-800">Jenis Rumah</p>
                  <p className="description-text text-grey-800">Tipe Desain</p>
                </div>
                <div className="grid gap-[8px]">
                  <p className="description-text text-black">Scandinavian</p>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/check.svg" width={16} height={16} alt="check" />
                    <p className="description-text text-primary-700">Dapat Dimodifikasi</p>
                  </div>
                </div>
              </div>

              <HorizontalSeparator />

              <Information />

              <HorizontalSeparator />

              <div className="grid gap-[4px]">
                <p className="small-text text-black">Harga Desain</p>
                <h1 className="font-semibold phone:text-heading-4 phone:leading-[30px] text-heading-3 tablet:text-heading-4 tablet:leading-[30px] text-black leading-[38.4px]">Rp. 32.500.000</h1>
                <p className="small-text text-grey-600">Harga konstruksi mulai dari Rp 560.000.000</p>
              </div>

              <button className={clsx(
                "w-full py-[14px] bg-primary-700 rounded-[6px] border-none",
                "transition-all duration-300 hover:bg-[#E62936]",
                "text-white font-semibold text-[16px] leading-[20.11px]"
              )}>Konsultasi Sekarang</button>
            </div>
          </div>

          <div className="w-full h-fit">
            <h1 className="font-semibold text-heading-4 leading-[28.8px] text-dark mb-[16px]">Testimoni</h1>
            <div className="grid gap-[16px]">
              {testimonialList.map((item: ITestimonial) => (
                <Testimonial
                  key={item.id}
                  name={item.name}
                  rating={item.rating}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomPreview