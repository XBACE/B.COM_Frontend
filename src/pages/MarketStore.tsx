import React, { useState } from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Carousel from '../componets/carousel/Carousel'
import Businesscard from '../componets/cards/Businesscard'
import ProductCardSmall from '../componets/cards/ProductCardSmall'
import BusinessCardSmall from '../componets/cards/BusinessCardSmall'
import ProductCarousel from '../componets/carousel/ProductCarousel'
import SmallCarousel from '../componets/carousel/SmallCarousel'
import { Pagination } from '@mui/material'
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

const businessCardsData: BusinessData[] = [
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 5, image: '/business1.svg' },
  { name: 'Shoes market', category: 'Groceries', rate: 2, image: '/business1.svg' }
]

interface BusinessData {
  name: string
  category: string
  rate: number
  image: string
}

const MarketStore = () => {
  const [page, setPage] = useState<number>(1)
  const cardsPerPage: number = 6

  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    console.log(event)
    setPage(value)
  }

  const startIndex: number = (page - 1) * cardsPerPage
  const endIndex: number = startIndex + cardsPerPage
  const visibleCards: BusinessData[] = businessCardsData.slice(startIndex, endIndex)

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      <Carousel />

      <div className="lg:grid lg:grid-cols-3 2xl:grid-cols-4  gap-5 px-[10px] sm:px-[50px] sm:py-[50px] py-[10px]">
        <div className="col-span-2 2xl:col-span-3">
          <div className="bg-white mb-[20px] shadow-lg p-[50px] rounded-lg">
            <h1 className="mb-10 font-bold text-[24px]">My favorite products</h1>
            <ProductCarousel />
          </div>
          <div className="bg-white shadow-lg p-[50px] rounded-lg">
            <h1 className="mb-10 font-bold text-[24px]">All businesses</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleCards.map((card: BusinessData, index: number) => (
                <Businesscard
                  key={index}
                  name={card.name}
                  category={card.category}
                  rate={card.rate}
                  image={card.image}
                />
              ))}
            </div>
            <div className='mt-4 flex justify-end'>
            <Pagination
              count={Math.ceil(businessCardsData.length / cardsPerPage)}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-4 lg:mt-0 ">
          <div className="bg-white  shadow-lg px-[40px] py-[20px] rounded-lg">
            <h1 className="mb-3 font-bold text-[24px]"> Most trending products</h1>
            <SmallCarousel>
              {products.map((product: any, index: any) => {
                return (
                  <div key={index}>
                    <ProductCardSmall
                      image={product.image}
                      price={product.price}
                      business={product.business}
                      name={product.name}
                    />
                  </div>
                )
              })}
            </SmallCarousel>
          </div>
          <div className="bg-white shadow-lg px-[40px] py-[20px] rounded-lg mt-[20px]">
            <h1 className="mb-3 font-bold text-[24px]">Most popular businesses</h1>
            <div className="grid grid-cols-1 gap-4">
              <SmallCarousel>
                <div>
                  <BusinessCardSmall name="Business name" image="/business3.svg" />
                </div>
                <div>
                  <BusinessCardSmall name="Business name" image="/business2.svg" />
                </div>
                <div>
                  <BusinessCardSmall name="Business name" image="/business3.svg" />
                </div>
                <div>
                  <BusinessCardSmall name="Business name" image="/business2.svg" />
                </div>
                <div>
                  <BusinessCardSmall name="Business name" image="/business2.svg" />
                </div>
              </SmallCarousel>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default MarketStore
