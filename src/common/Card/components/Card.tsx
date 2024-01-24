import React from 'react'

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col  justify-center py-8 mx-auto lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 md:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">{children}</div>
      </div>
    </div>
  )
}

export default Card
