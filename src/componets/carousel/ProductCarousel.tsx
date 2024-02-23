import React, { useRef } from 'react'
import ProductCard from '../cards/ProductCard'
import Slider from 'react-slick'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const products = [
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product4.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product4.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product1.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' },
  { image: '/product4.svg', price: '2000', business: 'Business name', name: 'Ladies Zipper New' }
]

const ProductCarousel: React.FC = () => {
  let sliderRef = useRef(null) as any
  const next = () => {
    sliderRef?.slickNext()
  }
  const previous = () => {
    sliderRef?.slickPrev()
  }
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    nextArrow: <FiChevronRight onClick={next}/>,
    prevArrow: <FiChevronLeft onClick={previous} />,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1510,
        settings: {
          slidesToShow: 3,
          rows: 2
        }
      },
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          rows: 2
        }
      },
      {
        breakpoint: 1194,
        settings: {
          slidesToShow: 2,
          rows: 2
        }
      },
      {
        breakpoint: 1014,
        settings: {
          slidesToShow: 3,
          rows: 2
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 3,
          rows: 1
        }
      },
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          rows: 1
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          rows: 1
        }
      }
    ]
  }

  return (
    <>
      <Slider
        {...settings}
        ref={slider => {
          sliderRef = slider
        }}
      >
        {products.map((product: any, index: any) => {
          return (
            <div key={index}>
              <ProductCard
                image={product.image}
                price={product.price}
                business={product.business}
                name={product.name}
              />
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default ProductCarousel
