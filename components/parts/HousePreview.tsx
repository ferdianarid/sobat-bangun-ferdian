import HouseList from "@components/organism/HouseList"

const HousePreview = () => {
  return (
    <section className="w-full phone:px-[24px] phone:pb-[48px] tablet:px-[40px] px-[64px] pb-[41px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="font-semibold text-heading-4 text-black leading-[28.8px]">Desain Lainnya oleh Studio SAe</h1>
        {/* Client Component */}
        <HouseList />
      </div>
    </section>
  )
}

export default HousePreview