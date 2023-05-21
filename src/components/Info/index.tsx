import { FC } from "react"

export default function Info() {
  return (
    <>
      <section className="my-14 py-14 bg-slate-800">
        <div className="max-w-[90%] mx-auto flex items-center justify-between gap-3">
          <InfoItem title="9999" label="Total Items" />
          <div className="w-[60px] h-[1.5px] bg-yellow-500 rounded-3xl"></div>
          <InfoItem title="3.9k+" label="Total Owners" />
          <div className="w-[60px] h-[1.5px] bg-yellow-500 rounded-3xl"></div>
          <InfoItem title="2.4" label="Floor Price (ETH)" />
          <div className="w-[60px] h-[1.5px] bg-yellow-500 rounded-3xl"></div>
          <InfoItem title="144k+" label="Volume Traded (ETH)" />
        </div>
      </section>
    </>
  )
}

const InfoItem: FC<{ title: string; label: string }> = ({ title, label }) => {
  return (
    <article>
      <h6 className="text-yellow-500 text-3xl text-center font-bold p-3">
        {title}
      </h6>
      <p className="text-yellow-500 text-center font-light">{label}</p>
    </article>
  )
}
