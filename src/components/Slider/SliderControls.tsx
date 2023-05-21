import { SliderControlsProps } from "@/ts/interfaces"

export default function SliderControls({ handleSlide }: SliderControlsProps) {
  return (
    <div className="flex align-center justify-center gap-5 mt-14">
      <div className="flex align-center justify-center gap-2 text-yellow-500">
        <button className="cursor-pointer" onClick={() => handleSlide("prev")}>
          <i className="fa-regular fa-circle"></i>
        </button>

        <button
          className="text-1xl border border-yellow-500 rounded-full w-8 h-8 flex align-center justify-center cursor-pointer"
          onClick={() => handleSlide("prev")}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <button className="cursor-pointer" onClick={() => handleSlide("prev")}>
          <i className="fa-regular fa-circle"></i>
        </button>
      </div>

      <div className="w-[60px] h-[1.5px] bg-yellow-500 rounded-3xl"></div>

      <div className="flex align-center justify-center gap-2 text-yellow-500">
        <button className="cursor-pointer" onClick={() => handleSlide("next")}>
          <i className="fa-regular fa-circle"></i>
        </button>

        <button
          className="text-1xl border border-yellow-500 rounded-full w-8 h-8 flex align-center justify-center cursor-pointer"
          onClick={() => handleSlide("next")}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>

        <button className="cursor-pointer" onClick={() => handleSlide("next")}>
          <i className="fa-regular fa-circle"></i>
        </button>
      </div>
    </div>
  )
}
