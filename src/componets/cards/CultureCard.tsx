import React from 'react'

interface Props {
  image: string
  title: string
  description: string
}

function CultureCard({ image, title, description }: Props) {
  const [isHovered, setIsHovered] = React.useState<boolean>(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div
      className="p-5 bg-white shadow-lg rounded-lg overflow-hidden w-[340px] h-[200px]"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="p-4">
        {!isHovered ? (
          <div className='my-auto'>
            <img className='mx-auto' src={image} alt="image" />
            <p className="mt-2 text-center text-gray-600 text-[29px]">{title}</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-600">{description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CultureCard
