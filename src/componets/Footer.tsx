const Footer = () => {
  return (
    <>
      <div className="bg-[#0A4C7E] px-[10px] lg:px-[50px] pt-[50px] mb-0">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-2 text-white">
          <div className="col-span-3 w-[80%]">
            <img className="min-w-[100px]" src="/logo.svg" alt="logo" />
            <p className="mt-2 text-[12px]">
              Encompassed or contained within a modern and up-to-date platform. It conveys the idea
              that various elements or features are{' '}
            </p>
          </div>
          <div className="col-span-2  justify-center">
            <h1 className="text-[12px] font-bold">PRODUCTS</h1>
            <div className="flex flex-col text-[12px] mt-2">
              <a href="#" className="hover:underline mt-2">
                Business Management
              </a>
              <a href="#" className="hover:underline mt-2">
                Business e-Commerce
              </a>
              <a href="#" className="hover:underline mt-2">
                Online Shopping
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-[12px] font-bold">LEARN MORE</h1>
            <div className="flex flex-col text-[12px] mt-2">
              <a href="/pricing" className="hover:underline mt-2">
                Pricing
              </a>
              <a href="/market-store" className="hover:underline mt-2">
                Market store
              </a>
            </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-[12px] font-bold">CONNECT WITH US</h1>
            <div className="grid grid-cols-12 gap-0 text-[12px] mt-4">
              <a href="#" className="hover:underline">
                <img src="/FiInstagram.svg" alt="link" />
              </a>
              <a href="#" className="hover:underline">
                <img src="/x-twitter.svg" alt="link" />
              </a>
              <a href="#" className="hover:underline">
                <img src="/FiLinkedin.svg" alt="link" />
              </a>
            </div>
          </div>
          <form className="col-span-4">
            <h1 className="text-[12px] font-bold">CONTACT US</h1>
            <div className="grid grid-cols-2 gap-6  mt-4">
              <div className="lg:col-span-1 col-span-2">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="bg-[#1A5C8ECC] w-[100%] text-gray-200 shadow-md font-bold text-12 leading-normal outline-none focus:outline-none p-3 rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Your email*"
                  className="bg-[#1A5C8ECC] w-[100%] mt-6 text-gray-200 shadow-md font-bold text-12 leading-normal outline-none focus:outline-none p-3 rounded-xl"
                />
              </div>
              <div className="lg:col-span-1 col-span-2">
                <textarea
                  rows={4}
                  placeholder="Your message*"
                  className="bg-[#1A5C8ECC] w-[100%] text-gray-200 shadow-md font-bold text-12 leading-normal outline-none focus:outline-none p-3 rounded-xl"
                ></textarea>
              </div>
            </div>
            <button className="flex justify-center py-2 mt-5 text-[#0569B6] bg-white font-bold  rounded-[20px]  min-w-[100%]">
              Send Message
            </button>
          </form>
        </div>
        <hr className="mt-[50px] border-[#1A5C8E]" />
        <div className="py-5 text-white">
          <p className="flex text-[12px]">
            Copyright
            <img className="w-[10px]" src="/copyright.svg" alt="copyright" /> 2024 B.com | Call Us:
            +250 000 000 | Email: support@yourdomain.com
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer
