import Rating from '@mui/material/Rating'

interface Props {
  name: string
  category: string
  rate: number
  image: string
}
const Businesscard = ({ name, category, rate, image }: Props) => {
  return (
    <div className="flex">
      <img src={image} alt="image" className="max-w-[103px] max-h-[80px] mr-2" />
      <div>
        <h1>{name}</h1>
        <p>
          Category: <span>{category}</span>
        </p>
        <Rating name="read-only" value={rate} readOnly />
      </div>
    </div>
  )
}

export default Businesscard
