interface Props {
  image: string
  name: string
  price: string
  business: string
}
const ProductCard = ({ image, name, price, business }: Props) => {
  return (
    <div>
      <img src={image} alt="image" className=" rounded-2xl max-w-[176px] max-h-[106px]"/>
      <div className="p-2 text-gray-600">
        <p>{name}</p>
        <p>{price} Rwf</p>
        <p>
          <span className="font-bold mr-1">Business:</span>
          {business}
        </p>
        <button className="text-white bg-[#0569B6] text-center p-1 w-[76px] rounded-md">Details</button>
      </div>
    </div>
  )
}

export default ProductCard
