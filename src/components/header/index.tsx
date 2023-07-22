import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <div className='flex items-center justify-between'>
      <Link to='/' className='text-3xl font-mono my-6'>DevFinder</Link>
    </div>
  )
}