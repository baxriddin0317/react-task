import React from 'react'

const Btn = ({children, className}) => {
  return (
    <button className={`${className} bg-indigo-600 py-1 px-3 text-xs rounded-md text-white hover:bg-indigo-500 duration-300`}> 
      {children}
    </button>
  )
}

export default Btn
