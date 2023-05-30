export default function ContactUs() {
  return (
    <div>
      <h1 className="text-white text-center text-4xl py-20 xl:text-6xl xl:pb-32">
        CONTACT US
      </h1>

      <div className="flex flex-col gap-5 px-6 xl:flex-row xl:px-28 xl:gap-20 xl:pb-12">
        <div className="w-full">
          <p className="text-slate-400 pb-7">
            Duis suscipit egestas ullamcorper. Cras porta nulla et tristique
            pellentesque. Praesent finibus mauris eu sollicitudin interdum.
            Morbi et blandit quam. Donec vitae massa purus. Curabitur nunc
            mauris, iaculis a nibh at, ultricies sodales dolor.
          </p>
          <p className="text-slate-400">
            Curabitur pharetra velit eget dignissim varius. In vulputate elit at
            tortor pellentesque, non pulvinar neque consequat
          </p>
        </div>
        <div className="w-full pt-10 xl:pt-0">
          <span className="text-slate-400 font-semibold">PHONE</span>
          <p className="text-white hover:text-pink-600 text-3xl pb-10">
            +77 022 177 05 05
          </p>
          <span className="text-slate-400 font-semibold">EMAIL</span>
          <p className="text-white hover:text-pink-600 text-3xl">
            frenifyteam@gmail.com
          </p>
        </div>
        <div className="w-full pb-10">
          <span className="text-slate-400 font-semibold">OFFICE</span>
          <p className="text-white text-3xl">
            124 S Main St, Scottville, MI 49454, United States
          </p>
        </div>
      </div>

      <form action="" className="px-5 xl:px-28">
        <div className="flex flex-col gap-5 py-5 md:flex-row xl:gap-10 xl:pb-10">
          <input
            className="bg-transparent border-2 border-slate-500 focus:outline-none focus:border-pink-600 rounded-md w-1/2 p-5 text-white w-full"
            type="text"
            placeholder="Your Name*"
          />
          <input
            className="bg-transparent border-2 border-slate-500 focus:outline-none focus:border-pink-600 rounded-md w-1/2 p-5 text-white w-full"
            type="text"
            placeholder="Your Email*"
          />
        </div>
        <div className="flex flex-col gap-5 pb-5 md:flex-row xl:gap-10 xl:pb-10">
          <input
            className="bg-transparent border-2 border-slate-500 focus:outline-none focus:border-pink-600 rounded-md w-1/2 p-5 text-white w-full"
            type="text"
            placeholder="Your Phone (optional)"
          />
          <input
            className="bg-transparent border-2 border-slate-500 focus:outline-none focus:border-pink-600 rounded-md w-1/2 p-5 text-white w-full"
            type="text"
            placeholder="Topic (optional)"
          />
        </div>
        <textarea
          className="bg-transparent border-2 border-slate-500 focus:outline-none focus:border-pink-600 rounded-md w-full h-60 p-5 text-white"
          name=""
          id=""
          placeholder="Your Message*"
        ></textarea>
        <div className="flex gap-3 pt-5 pb-10">
          <input type="checkbox" />
          <p className="text-slate-400">
            I'm okay with getting emails and having that activity tracked to
            improve my experience
          </p>
        </div>
        <input
          type="submit"
          value="SEND MESSAGE"
          className="text-white border-2 border-pink-600 w-60 py-5 rounded-md font-semibold text-sm"
        />
      </form>
    </div>
  )
}
