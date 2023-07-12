import Image from "next/image"
import clsx from "clsx"

const Company = ({ image, company, classnames }: { image: string, company: string, classnames?: string }) => {
  return (
    <div className={clsx(
      "flex items-center gap-[4px]",
      classnames
    )}>
      <Image src={`/icons/${image}`} width={28} height={28} alt={company} />
      <h3 className="font-normal text-black text-[14px] leading-[21px]">{company}</h3>
    </div>
  )
}

export default Company