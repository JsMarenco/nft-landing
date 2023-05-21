import Slider from "../Slider"
import { sliders } from "./sliders"

export default function Hero() {
  return (
    <section className="py-14 mt-14">
      <h4 className="uppercase text-gray-400 text-4xl font-bold text-center ttt">
        Meta legends
      </h4>

      <Slider images={sliders} />

      <h4 className="text-yellow-500 text-2xl mt-14 sm:max-w-[60%] max-w-[90%] text-center mx-auto font-medium">
        Meta Legends represent a collection of 17,000 legends categorized by
        level of rarity and generated with hundreds of elements. The Legends are
        stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
      </h4>

      <button className="border border-yellow-400 mt-14 rounded-lg uppercase mx-auto py-2 px-5 text-white block">
        Buy on Opensea
      </button>
    </section>
  )
}
