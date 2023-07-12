"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full flex items-center justify-center">
      <h2 className="text-red-600 font-bold text-center text-4xl mb-4">Oops! Ada sesuatu yang salah</h2>
      <button
        onClick={() => reset()}
        className="w-fit py-3 px-5 rounded-[8px] bg-primary-700 text-white font-semibold text-[16px]"
      >
        Coba Lagi
      </button>
    </div>
  )
}