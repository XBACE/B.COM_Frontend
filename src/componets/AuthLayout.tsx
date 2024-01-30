import React, { ReactNode } from 'react'
import LanguageSwitch from './language/LanguageSwitch'

type LoginFormContainerProps = {
  children: ReactNode
  image: string
  title: string
  google?: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AuthLayout: React.FC<LoginFormContainerProps> = ({
  children,
  image,
  title,
  google,
  onSubmit
}) => {
  return (
    <div className=" md:h-screen flex flex-col md:flex-row bg-[#0569B6]">
      <div className="hidden md:flex md:w-1/2 flex-col">
        <div className="p-4">
          <img src="/logo1.svg" alt="logo" />
        </div>
        <div className="flex flex-grow justify-center items-center">
          <img src={image} alt="logo" className="h-[70%] w-[70%] object-cover" />
        </div>
      </div>
      <div className="w-full md:w-1/2 pl-4 bg-white md:rounded-tl-[7%] md:rounded-bl-[7%] flex flex-col">
        <div className="flex flex-row-reverse cursor-pointer">
          <LanguageSwitch />
        </div>
        <div className="flex flex-grow justify-center items-center">
          <div className='w-[70%]'>
            <h1 className="text-center text-3xl mb-5 font-bold">{title}</h1>
            {google && (
              <>
                <div className="flex justify-center">
                  <button className="flex justify-center items-center mt-5 p-1 border rounded-[40px] w-[50%]">
                    <img src="/google.svg" alt="google-login" width={"10%"} />
                    <p className="text-[18px] font-[400px] text-[#6F6F6F] ml-5">
                      {google}
                    </p>
                  </button>
                </div>

                <p className="text-1xl text-center text-gray-500 mt-3 pt-3">- OR -</p>
              </>
            )}

            <form onSubmit={onSubmit} className="px-10 pt-3 pb-3">
              {children}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
