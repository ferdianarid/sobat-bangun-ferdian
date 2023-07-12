import DetailInfo from "@components/moleculs/DetailInfo"

const Information = () => {
  return (
    <div className="flex items-center justify-between">
      <DetailInfo icons="dimension" title="Dimensi Tanah">
        15 x 8m
      </DetailInfo>
      <DetailInfo icons="house" title="Luas Bangunan">
        112m<sup>2</sup>
      </DetailInfo>
      <DetailInfo icons="stairs" title="Lantai">
        2
      </DetailInfo>
      <DetailInfo icons="room" title="Kamar Tidur">
        4
      </DetailInfo>
    </div>
  )
}

export default Information