interface Props {
  name: string
  business: string
  price: string
  image: string
}
const ProductCardSmall = ({ name, business, price, image }: Props) => {
  return (
    <div className="flex">
      <img src={image} alt="image" className="max-w-[90px] max-h-[70px] mr-2 rounded-2xl" />
      <div>
        <p>{name}</p>
        <p>{price} Rwf</p>
        <p>
          <span className="font-bold">Business:</span>
          {business}
        </p>
      </div>
    </div>
  )
}

export default ProductCardSmall
