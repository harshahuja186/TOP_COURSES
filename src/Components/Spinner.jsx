import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2 mt-16'>
      <div className='spinner'></div>
      <p className='text-blue-700 text-xl font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
