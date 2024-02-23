import React, { ReactNode, useRef } from 'react'
import Slider from 'react-slick'
import { FiChevronDown } from 'react-icons/fi'
import { FiChevronUp } from 'react-icons/fi'

interface SmallCarouselProps {
  children: ReactNode
}
const SmallCarousel: React.FC<SmallCarouselProps> = ({ children }) => {
  let sliderRef = useRef(null) as any
  const next = () => {
    sliderRef?.slickNext()
  }
  const previous = () => {
    sliderRef?.slickPrev()
  }
  const settings = {
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide: any) {
      console.log('after change', currentSlide)
    }
  }
  return (
    <>
      <div className="flex justify-center">
        <FiChevronUp onClick={next} className="bg-[#D5E6F3] rounded-xl w-[25px] h-[25px]" />
      </div>

      <Slider
        {...settings}
        ref={slider => {
          sliderRef = slider
        }}
      >
        {children}
      </Slider>
      <div className="flex justify-center">
        <FiChevronDown onClick={previous} className="bg-[#D5E6F3] rounded-xl w-[25px] h-[25px]" />
      </div>
    </>
  )
}

export default SmallCarousel
