import { useCallback, useEffect, useState } from "react"

export default function ScrollTop() {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    // Button is displayed after scrolling for 100 pixels
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener("scroll", handleScrollButtonVisiblity)

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity)
    }
  }, [])

  return (
    <>
      {showButton && (
        <div className="fixed bottom-5 right-5 flex align-center justify-between flex-col gap-12">
          <h6 className="rotate-90 text-yellow-400 block">Scroll to Top</h6>

          <button
            className="w-11 h-11 bg-black flex items-center justify-center rounded-full"
            onClick={scrollToTop}
          >
            <i className="fa-sharp fa-solid fa-angle-up text-white"></i>
          </button>
        </div>
      )}
    </>
  )
}
