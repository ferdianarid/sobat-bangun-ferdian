import Link from "next/link"
import Image from "next/image"
import Payment from "./Payment"
import { SocialMedia, FooterLink } from "@components/atoms/Links"
import { IFooterLink } from "@interfaces"
import { footerLinkList, listPaymentMethod } from "@data"

const Footer = () => {
  const { homeCredit, bankTransfer, creditCard, partner } = listPaymentMethod
  return (
    <footer className="w-full phone:px-[24px] tablet:px-[40px] phone:py-[32px] py-[39px] px-[64px] bg-navy">
      <div className="w-full max-w-[1440px] mx-auto grid gap-[46px]">
        <div className="w-full flex phone:flex-col justify-between">
          <div className="w-full tablet:max-w-[500px] max-w-[686px] phone:max-w-full">
            <Image src="/icons/logo-white.svg" width={169} height={47} alt="logo-white" />
            <p className="font-normal text-[16px] leading-[24px] text-white mt-[16px] mb-[8px]">SobatBangun adalah platform digital dari SIG yang bergerak dengan misi mengembangkan proses pembangunan dan renovasi rumah secara lebih baik serta berkelanjutan.</p>

            <div className="flex items-center gap-[8px] mb-[29px]">
              <Image src="/icons/message.svg" width={32} height={32} alt="email" />
              <Link href="mailto:sobat@sobatbangun.com" className="text-[16px] font-normal leading-[22.4px] underline text-white">sobat@sobatbangun.com</Link>
            </div>

            <div className="grid gap-[16px]">
              <p className="text-white font-normal text-[16px] leading-[22.4px]">Sosial Media:</p>
              <div className="flex phone:gap-[20px] tablet:gap-[20px] gap-[26px]">
                <SocialMedia>
                  <Image src="/social/instagram.svg" width={18.56} height={18} alt="instagram" />
                </SocialMedia>
                <SocialMedia>
                  <Image src="/social/facebook.svg" width={9.21} height={14.39} alt="facebook" />
                </SocialMedia>
                <SocialMedia>
                  <Image src="/social/youtube.svg" width={24} height={24} alt="youtube" />
                </SocialMedia>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 phone:mt-[32px] phone:gap-[24px] tablet:gap-[32px] gap-[48px]">
            <div className="grid h-fit gap-[24px]">
              <h1 className="font-bold phone:text-[18px] phone:leading-[24px] text-[20px] leading-[30px] text-white">Produk & Layanan</h1>
              <div className="grid gap-[8px]">
                {footerLinkList.slice(1, 5).map((item: IFooterLink) => (
                  <FooterLink key={item.id} route="#" title={item.title} />
                ))}
              </div>
            </div>

            <div className="grid h-fit gap-[24px]">
              <h1 className="font-bold phone:text-[18px] phone:leading-[24px] text-[20px] leading-[30px] text-white">Tentang Kami</h1>
              <div className="grid gap-[8px]">
                {footerLinkList.slice(5, 10).map((item: IFooterLink) => (
                  <FooterLink key={item.id} route="#" title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid phone:grid-cols-1 phone:gap-[20px] grid-cols-4">
          <Payment
            title={homeCredit.title}
            prefix={homeCredit.prefix}
            listPayment={homeCredit.images}
          />
          <Payment
            title={bankTransfer.title}
            prefix={bankTransfer.prefix}
            listPayment={bankTransfer.images}
          />
          <Payment
            title={creditCard.title}
            prefix={creditCard.prefix}
            listPayment={creditCard.images}
          />
          <Payment
            title={partner.title}
            prefix={partner.prefix}
            listPayment={partner.images}
          />
        </div>

        <div className="w-full flex phone:flex-col phone:gap-[24px] items-center justify-between">
          <div className="flex phone:flex-col items-center phone:gap-[8px] gap-[16px]">
            <p className="text-[16px] font-normal text-white leading-[36px]">Powered by :</p>
            <Image src="/partner/sig.svg" width={71} height={41} alt="sig" />
          </div>
          <p className="font-normal text-[14px] leading-[16.8px] text-white">Copyright © 2023 SobatBangun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer