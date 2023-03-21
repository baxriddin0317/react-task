import React from 'react'
import Btn from '../components/Btn'

const Buttons = () => {
  return (
    <section className='container mx-auto px-5 '>
      <div className='flex items-center gap-2 shadow-lg rounded px-4 py-4 w-full'>
        <Btn className="uppercase">
          front
        </Btn>
        <Btn className="uppercase">
          back
        </Btn>
        <Btn className="capitalize">
          right
        </Btn>
        <Btn className="capitalize">
          left
        </Btn>
        <Btn className="capitalize">
          go down
        </Btn>
        <Btn className="capitalize">
          go up
        </Btn>
        <Btn className="capitalize">
          get moisture
        </Btn>
        <Btn className="capitalize">
          get water
        </Btn>
        <Btn className="capitalize">
          give fertilizer
        </Btn>
        <Btn className="capitalize">
          give weed killer
        </Btn>
      </div>
    </section>
  )
}

export default Buttons
