
interface Props {
  image: string
  name: string
}
const BusinessCardSmall = ({ image, name }: Props) => {
  return (
    <div className="flex">
      <img src={image} alt="image" className=" rounded-2xl max-w-[75px] max-h-[59px] mr-3" />
      <p className='mt-4'>{name}</p>
    </div>
  )
}

export default BusinessCardSmall
