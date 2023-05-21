export interface SliderImage {
  src: string
  name: string
}

export interface SliderProps {
  images: SliderImage[]
}

export type SliderAction = "next" | "prev"

export interface SliderControlsProps {
  // eslint-disable-next-line no-unused-vars
  handleSlide: (action: SliderAction) => void
}
