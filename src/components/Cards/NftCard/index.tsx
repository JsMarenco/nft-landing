import Image from "next/image"

import { NftCardProps } from "@/ts/interfaces"

export default function NftCard({ name, src }: NftCardProps) {
  return (
    <article className="border border-blue-400 rounded-xl p-5 w-80 h-80 flex-shrink-0 transition-transform duration-[600ms] ease-in-out">
      <Image
        src={src}
        alt={name}
        className="rounded-lg overflow-hidden"
        width={350}
        height={350}
      />
    </article>
  )
}
