import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import PricingCard from '../componets/cards/PricingCard'

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pricing mb-[50px] mt-[-5px] px-[7%]">
        <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider text-center text-white pt-[5%]">
          Get started for free
        </h1>
        <div className="grid lg:grid-cols-4 gap-3 mt-[5%] justify-content-center">
          <PricingCard type="Free" price="0"/>
          <PricingCard type="Starter" price="45"/>
          <PricingCard type="Pro" price="145"/>
          <PricingCard type="Future plan" price="245"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pricing
