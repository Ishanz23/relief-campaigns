import React from 'react'
import { Link } from 'gatsby'

export default function CampaignHeader() {
  return (
    <header className='w-full'>
      <div className='flex items-center justify-between px-8 py-4 text-center backdrop-filter bg-gray-700 bg-opacity-30 backdrop-blur-md'>
        <Link to='/'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
        </Link>
        <h1 className='text-2xl font-bold uppercase md:text-3xl'>Save Mousuni</h1>
        <a href='https://goo.gl/maps/jhFoS9c1h8K29dbM9' target='_'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </div>
      <nav className='w-full text-xs sm:text-sm font-bold md:text-base'>
        <ul className='w-full uppercase flex flex-wrap items-center justify-evenly backdrop-filter bg-gray-600 bg-opacity-30 backdrop-blur-md'>
          <Link to='/mousuni' className='flex-1' activeClassName='bg-gray-500'>
            <li
              className={`py-4 px-2 sm:px-3 md:px-4 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300`}>
              Details
            </li>
          </Link>
          <Link to='/mousuni/gallery' className='flex-1' activeClassName='bg-gray-500'>
            <li
              className={`py-4 px-2 sm:px-3 md:px-4 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300`}>
              Gallery
            </li>
          </Link>
          <Link to='/mousuni/organisers' className='flex-1' activeClassName='bg-gray-500'>
            <li
              className={`py-4 px-2 sm:px-3 md:px-4 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300`}>
              Organisers
            </li>
          </Link>
          <Link to='/mousuni/contribute' className='flex-1' activeClassName='bg-gray-500'>
            <li
              className={`py-4 px-2 sm:px-3 md:px-4 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300`}>
              Donate
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
