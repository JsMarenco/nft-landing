import { useEffect, useState } from "react"

import NftCard from "../Cards/NftCard"
import { SliderProps } from "@/ts/interfaces"
import SliderControls from "./SliderControls"

export default function Slider({ images }: SliderProps) {
  const [activeSlide, setactiveSlide] = useState(0)
  const totalSlides = images.length

  const handleSlide = (action: "next" | "prev") => {
    if (action === "next") {
      if (activeSlide < totalSlides - 1) {
        setactiveSlide((previousState) => previousState + 1)
      } else {
        setactiveSlide(0)
      }
    } else if (action === "prev") {
      if (activeSlide === 0) {
        setactiveSlide(totalSlides - 1)
      } else {
        setactiveSlide((previousState) => previousState - 1)
      }
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlide("next")
    }, 1000)

    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide])

  return (
    <div>
      <div className="flex align-center justify-center gap-7 snap-x snap-mandatory overflow-x-auto scrollbar-hide mt-14">
        {images.map((slide) => (
          <div key={slide.name} className="snap-center">
            <NftCard size="medium" src={slide.src} name={slide.name} />
          </div>
        ))}
      </div>

      <SliderControls handleSlide={handleSlide} />
    </div>
  )
}
