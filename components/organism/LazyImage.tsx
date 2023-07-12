import React, { useRef, useState, useEffect } from "react"
import Image from "next/image"

interface LazyImageInterfaces {
  id?: number
  src: string
  placeholderImage: string
  classNames?: string
  alt?: string
  onClick?: any
}

const LazyImage: React.FC<LazyImageInterfaces> = ({ src, placeholderImage, classNames, alt = "images", onClick }) => {
  const rootRef = useRef<HTMLElement | any>()
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const defaultIntersectionOptions = {
      threshold: 0,
      rootMargin: "0px",
    }

    const checkIntersections = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }

    if (!isVisible) {
      const newIO = new IntersectionObserver(checkIntersections, defaultIntersectionOptions)
      newIO.observe(rootRef.current)
      return () => newIO.disconnect()
    }
  }, [isVisible])

  return (
    <Image
      ref={rootRef}
      onClick={onClick}
      layout="fill"
      objectFit="cover"
      className={classNames}
      src={isVisible ? src : placeholderImage}
      alt={alt}
    />
  )
}

export default LazyImage