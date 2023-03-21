import React from 'react'
import Graph from '../components/Graph'
import Map from '../components/Map'

const Center = () => {
  return (
    <section className='container mx-auto px-5 pt-10 pb-10'>
      <div className='flex items-stretch justify-between gap-10'>
        <Map />
        <Graph />
      </div>
    </section>
  )
}

export default Center
