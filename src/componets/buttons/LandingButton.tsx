import React from 'react'

interface Props {
  name: string
}
function LandingButton({ name }: Props) {
  return (
    <button className="flex justify-center button hover:bg-transparent text-[#0569B6] bg-white hover:text-white font-bold py-2 px-9 rounded-[20px] border-2 border-white transition duration-300 ease-in-out w-[200Px]">
      {name}
      <img className="ml-4 icon" src="/icon.svg" alt="icon" />
    </button>
  )
}

export default LandingButton
