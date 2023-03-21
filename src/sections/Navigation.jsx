import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-indigo-600 py-5'>
      <div className='container mx-auto px-2'>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <Link href={'/'} className='font-bold text-3xl text-white underline capitalize'>
              logo
            </Link>
          </div>

          {/* buttons */}
          <div>
            <Link href={'/login'} className='bg-transparent capitalize text-3xl font-semibold text-white'>
              login
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
