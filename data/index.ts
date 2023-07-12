import { IFooterLink, IHouse, IRoomPreview, ITestimonial } from "@interfaces"

export const detailRoomList: Array<IRoomPreview> = [
  { id: 1, image: "room1.png", title: "Ruang Keluarga", dimension: "2.0 x 2.9" },
  { id: 2, image: "room2.png", title: "Kamar Tidur", dimension: "4.0 x 3.4" },
  { id: 3, image: "room3.png", title: "Ruang Makan & Dapur", dimension: "3.0 x 2.9" },
  { id: 4, image: "room4.png", title: "Ruang Kerja", dimension: "2.0 x 2.9" },
  { id: 5, image: "room5.png", title: "Kamar Tidur", dimension: "4.0 x 3.4" }
]

export const listHouseDetail: Array<IHouse> = [
  {id: 1,image: "house1.png", title: "Omah Apik 1", type: "Scandinavian", price: 32500000, startFrom: 560000000},
  {id: 2,image: "house2.png", title: "Omah Apik 2", type: "Scandinavian", price: 32500000, startFrom: 560000000},
  {id: 3,image: "house3.png", title: "Omah Apik 3", type: "Scandinavian", price: 32500000, startFrom: 560000000},
  {id: 4,image: "house4.png", title: "Omah Apik 4", type: "Scandinavian", price: 32500000, startFrom: 560000000}
]

export const detailInfo: any = [
  {id: 1, icons: "dimension", title: "Dimensi Tanah", values: "15 x 8"},
  {id: 2, icons: "house", title: "Luas Bangunan", values: 112},
  {id: 3, icons: "stairs", title: "Lantai", values: 2},
  {id: 4, icons: "room", title: "Kamar Tidur", values: 4}
]

export const listPaymentMethod = {
  homeCredit: {
    id: 1,
    title: "Kredit Bangun Rumah",
    prefix: "bank",
    images: [
      "mandiri", "btn", "bni"
    ]
  },
  bankTransfer: {
    id: 2,
    title: "Tunai Via Bank Transfer",
    prefix: "bank",
    images: [
      "mandiri", "bri", "bni", "permata"
    ]
  },
  creditCard: {
    id: 3,
    title: "Kartu Kredit",
    prefix: "credit",
    images: [
      "visa", "mastercard", "jcb"
    ]
  },
  partner: {
    id: 4,
    title: "Rekan Teknologi Tambahan",
    prefix: "partner",    
    images: [
      "asco", "ineco", "adidaya", "agra"
    ]
  }
}

export const testimonialList: ITestimonial[] = [
  {id: 1, name: "Budi Setiadi", rating: 4.5, description: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"},
  {id: 2, name: "Budi Setiadi", rating: 4.5, description: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"},
  {id: 3, name: "Budi Setiadi", rating: 4.5, description: "Desainnya sangat bagus dan pengirimannya cepat. Terima kasih Sobat Bangun"}
]

export const footerLinkList: IFooterLink[]= [
  {id: 1, route: "#", title: "Renovasi"},
  {id: 2, route: "#", title: "Bangun Rumah"},
  {id: 3, route: "#", title: "Layanan Desain"},
  {id: 4, route: "#", title: "Teknologi Tambahan"},
  {id: 5, route: "#", title: "Beli Material"},
  {id: 6, route: "#", title: "Tentang SobatBangun"},
  {id: 7, route: "#", title: "Kebijakan Dan Privasi"},
  {id: 8, route: "#", title: "Syarat Dan Ketentuan"},
  {id: 9, route: "#", title: "FAQ"},
  {id: 10, route: "#", title: "Daftar Menjadi Mitra"}
]

export const listImageHero = [
  {originalImage: "house2.jpg", fallbackImage: "webp/house2.webp"},
  {originalImage: "house3.jpg", fallbackImage: "webp/house3.webp"},
  {originalImage: "house4.jpg", fallbackImage: "webp/house4.webp"},
  {originalImage: "house5.jpg", fallbackImage: "webp/house5.webp"},
  {originalImage: "house6.jpg", fallbackImage: "webp/house6.webp"}
]

export const navlinkList = [
  {route: "/blog", title: "Blog"},
  {route: "/faq", title: "FAQ"}
]