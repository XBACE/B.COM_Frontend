import { FiCheck } from 'react-icons/fi'
import PricingButton from '../buttons/PricingButton'

interface CardProps {
  type: string
  price: string
}
const PricingCard = ({ type, price }: CardProps) => {
  const TextColor = type == 'Future plan' ? 'text-gray-400' : ''
  const IconColor = type == 'Future plan' ? 'text-gray-400' : 'text-[#0569B6]'
  const ButtonColor = type == 'Future plan' ? 'bg-gray-400' : 'bg-[#0569B6]'

  const list = (text: string) => {
    return (
      <div className="grid grid-cols-9 gap-5 justify-content-center">
        <FiCheck className={` ${IconColor} col-span-1 text-[20px]`} />{' '}
        <p className="col-span-8">{text}</p>
      </div>
    )
  }

  return (
    <div className={`p-[50px] shadow-lg ${TextColor} rounded-lg bg-white w-[100%]`}>
      {type == 'Pro' && (
        <div className="flex justify-center mt-[-20px]">
          <p className="rounded-[20px] w-[160Px] bg-[#F0B255] text-white text-[14px]  text-center">
            RECOMMENDED
          </p>
        </div>
      )}

      <div className="text-center pt-[30px]">
        <p className="font-bold">{type}</p>
        <h1 className="mt-2 font-bold text-6xl leading-tight">${price}</h1>
        <p>Per month</p>
      </div>
      <div className="my-[50px]">
        {list('Plan a soft launch to identify anyissues Plan')}
        {list('Plan a soft launch to identify anyissues.')}
        {list('Plan a soft launch to identify anyissues.')}
        {list('Plan a soft launch to identify anyissues.')}
      </div>
      <div className="flex justify-center">
        {type !== 'Pro' && type !== 'Future plan' ? (
          <PricingButton />
        ) : (
          <button
            className={`flex justify-center button ${ButtonColor} text-white   font-bold py-2 px-9 rounded-[20px] w-[200Px]`}
          >
            Get started
          </button>
        )}
      </div>
    </div>
  )
}

export default PricingCard
