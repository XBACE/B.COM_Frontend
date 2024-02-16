import Slider from 'react-slick'
import React, { useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const images = ['/b1.webp', '/b2.jpg', '/b3.jpg']

const Carousel: React.FC = () => {
  let sliderRef = useRef(null) as any
  const next = () => {
    sliderRef?.slickNext()
  }
  const previous = () => {
    sliderRef?.slickPrev()
  }

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    nextArrow: <FiChevronRight onClick={next} />,
    prevArrow: <FiChevronLeft onClick={previous} />
  }

  return (
    <Slider
      {...settings}
      ref={slider => {
        sliderRef = slider
      }}
    >
      {images.map((imageUrl, index) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`Slide ${index + 1}`}
            className="object-fill lg:h-[50vh] sm:h-[30vh] h-[20vh] w-full"
          />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
