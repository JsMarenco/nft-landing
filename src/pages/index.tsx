import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ScrollTop from "@/components/Buttons/ScrollTop"
import Info from "@/components/Info"
import Footer from "@/components/Footer"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <ContactUs />
      <Footer />

      <ScrollTop />
    </>
  )
}
