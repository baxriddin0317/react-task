import React from 'react'

const Btn = ({children, className}) => {
  return (
    <button className={`${className} bg-cyan-700 py-1 px-3 text-xs rounded-md text-white hover:text-cyan-700 border border-cyan-700 hover:bg-transparent duration-300`}> 
      {children}
    </button>
  )
}

export default Btn
