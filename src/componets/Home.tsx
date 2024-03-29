import LandingButton from './buttons/LandingButton'
import CultureCard from './cards/CultureCard'
import ServiceCard from './cards/ServiceCard'
import CountUpAnimation from './CountUpAnimation'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 background-image-div p-5 lg:p-[100px] xl:pl-[150px] xl:pr-[150px]">
        <div className="mr-4 text-white flex justify-center flex-col">
          <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider">
            ROREM IPSUM DOLOR SIT CONSECTETUR
          </h1>
          <p className="text-base mb-[40px] lg:text-lg xl:text-2xl font-light leading-tight tracking-wide mt-5">
            adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
            leo,adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>
          <LandingButton name="Get started" />
        </div>
        <div className="lg:flex lg:justify-end hidden">
          <img className="max-w-full" src="/image-1.svg" alt="Image" />
        </div>
      </div>

      <div className="lg:mt-[100px] mt-5" id="about">
        <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider text-center">
          About Us
        </h1>
        <div className="lg:flex lg:pl-[50px] p-5 lg:pr-[150px] lg:mt-[-100px]">
          <div className="mr-5 lg:flex lg:justify-end hidden">
            <img className="max-w-full" src="/boy.svg" alt="Image" />
          </div>
          <div className="flex justify-center flex-col lg:w-[60%]">
            <p className="text-base text-[#667085] lg:text-lg xl:text-2xl font-light leading-tight tracking-wide">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis amet mauris. Morbi accumsan ipsum
              velit. adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo,adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </p>
          </div>
        </div>
        <div className="lg:flex p-5 lg:pl-[250px] lg:mt-[-200px]">
          <div className="mr-4 lg:flex lg:justify-center lg:flex-col lg:w-[70%]">
            <p className="text-base text-[#667085] lg:pl-[50px] lg:text-lg xl:text-2xl font-light leading-tight tracking-wide">
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo,adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum, nec sagittis amet mauris. Morbi accumsan
              ipsum velit.
            </p>
          </div>
          <div className="lg:flex lg:justify-end hidden">
            <img className="max-w-full" src="/girl.svg" alt="Image" />
          </div>
        </div>
      </div>

      <div className="mt-3 lg:mt-[100px] bg-[#0569B6] pb-5 lg:pb-[100px]">
        <h1 className=" py-5 lg:pt-[100px] lg:pb-[100px] font-bold text-white text-2xl lg:text-5xl leading-tight tracking-wider text-center">
          Our culture and values
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-20">
            <CultureCard
              image="/trust.svg"
              title="Transparency and Trust"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            />
            <CultureCard
              image="/together.svg"
              title="Inclusivity"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CultureCard
              image="/ownership.svg"
              title="Ownership and Impact"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CultureCard
              image="/evaluate.svg"
              title="Speed and Execution"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CultureCard
              image="/fifo.svg"
              title="Product First"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <CultureCard
              image="/heart.svg"
              title="Customer Centricity"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </div>

      <div className="my-5 lg:mt-[100px] lg:pb-[100px]">
        <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider text-center">
          All within a contemporary platform.
        </h1>
        <div className="lg:grid grid-cols-1 md:grid-cols-2 gap-1 lg:gap-40 pt-5 lg:pt-[100px] mx-auto w-[80%] text-[20px] text-[#6F6F6F]">
          <ul className="list-disc">
            <li>Omnichannel & Commerce-as-a-Service</li>
            <li>99.99% uptime (including 100% cyber week 7 years running)</li>
            <li>Composable architecture and headless commerce integrations</li>
            <li>Omnichannel & Commerce-as-a-Service</li>
            <li>Frictionless checkout options</li>
          </ul>
          <ul className="list-disc">
            <li>Idea that various elements or features are available and accessible within this</li>
            <li>Omnichannel & Commerce-as-a-Service</li>
            <li>Enterprise B2C, B2B, multi-storefront, and localization</li>
            <li>Open APIs, SDKs, and data</li>
            <li>Omnichannel & Commerce-as-a-Service</li>
            <li>Robust security: ISO/IEC 27001:2013 & PCI DSS 3.2, Level 1 certified.</li>
          </ul>
        </div>
      </div>

      <div className="mt-[50px] pb-[100px]" id="services">
        <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider text-center">
          Our services
        </h1>
        <p className="text-center mx-auto justify-center lg:w-[70%] mt-[50px] p-2 lg:text-[24px] text-[#667085]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-1 lg:gap-20 lg:pt-[100px] mx-auto lg:w-[80%] text-[20px] text-[#6F6F6F]">
          <ServiceCard
            image="/shopping-online.svg"
            title="Business e-Commerce/Business Page"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
          <ServiceCard
            image="/shopping-bag.svg"
            title="We provide platform for shopping and making orders to different businesses"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
          <ServiceCard
            image="/inventory-management.svg"
            title="Business administration panel/Workspace"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          />
        </div>
      </div>

      <div className="lg:mt-[50px] lg:pb-[100px]">
        <div className="bg-[#0569B6] grid grid-cols-1 xl:grid-cols-3 gap-20 p-[50px] mx-auto w-[75%] rounded-xl text-white items-center justify-center ">
          <div className="border-t-0 border-b-0 border-l-0 border-[#5096cc] xl:border-r-[3px] m-5">
            <h1 className="text-[48px] font-bold text-center">
              <CountUpAnimation endNumber={1600} sign="+" />
            </h1>
            <p className="text-20px text-bold text-center">employees</p>
          </div>
          <div className="border-t-0 border-b-0 border-l-0 border-[#5096cc] xl:border-r-[3px] m-5">
            <h1 className="text-[48px] font-bold text-center">
              <CountUpAnimation endNumber={1600} sign="+" />
            </h1>
            <p className="text-20px text-bold text-center">customers</p>
          </div>
          <div className="m-5">
            <h1 className="text-[48px] font-bold text-center">
              <CountUpAnimation endNumber={86} sign="%" />
            </h1>
            <p className="text-20px text-bold text-center">of people feel happier using B.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px] pb-[100px] text-white bg-[#0569B6] pt-[100px] text-center">
        <div className="lg:w-[80%]">
          <h1 className="font-bold text-2xl lg:text-5xl leading-tight tracking-wider">
            Why Choose Us?
          </h1>
          <p className="text-base lg:text-lg xl:text-2xl font-light leading-tight tracking-wide mt-[50px] mb-[50px]">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis amet mauris. Morbi accumsan ipsum velit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
            ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex justify-center">
            <LandingButton name="Join us" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
