interface Props {
  image: string
  title: string
  description: string
}
function ServiceCard({ image, title, description }: Props) {
  return (
    <div className="bg-white  text-center mx-auto rounded-md shadow-md border-t-0  border-gray-300 p-5 w-[380px] h-[290px]">
      <img className='mx-auto mb-5' src={image} alt="image" />
      <h1 className='text-[#0569B6] font-bold'>{title}</h1>
      <p className='text-[#667085] mt-5 text-[14px]'>{description}</p>
    </div>
  )
}

export default ServiceCard
