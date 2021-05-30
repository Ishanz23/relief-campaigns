import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

// markup
export default function MousuniCard({ name }) {
  return (
    <div className='w-full flex flex-col my-4 md:my-0 backdrop-filter bg-gray-600 bg-opacity-40 backdrop-blur-md shadow-lg rounded-md'>
      <header className='w-full flex items-center justify-between p-4'>
        <Link to={`/${name}`}>
          <h1 className='text-xl text-center uppercase font-bold'>Save {name}</h1>
          <h2 className='font-light text-sm'>Friday, 4th June, 2021</h2>
        </Link>
        <a href='https://goo.gl/maps/jhFoS9c1h8K29dbM9' target='_'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
              clipRule='evenodd'
            />
          </svg>
        </a>
      </header>
      <Link to={`/${name}`}>
        <div>
          <StaticImage src='https://i.imgur.com/iG8XDyi.jpeg' alt='Save Mousuni'></StaticImage>
        </div>
        <div className='p-4'>
          <p className=''>
            Mousuni Islands is a collection of small islands consisting around 17 villages, located near Sagaddwip and
            Bakkhali.
          </p>
          <p className=''>
            Due to the recent cyclone 'Yaas', combined with the effect of full moon on the same day, most of the
            villages suffered massive damages due to severe flooding.
          </p>
        </div>
      </Link>
      <div className='actions flex items-center justify-between'>
        <Link
          to={`/${name}`}
          className='flex-1 p-4 font-bold bg-gray-600 text-center backdrop-filter bg-opacity-40 backdrop-blur-md md:rounded-bl-md'>
          DETAILS
        </Link>
        <Link
          to={`/${name}/contribute`}
          className='flex-1 p-4 font-bold bg-gray-500 text-center backdrop-filter bg-opacity-40 backdrop-blur-md md:rounded-br-md'>
          CONTRIBUTE
        </Link>
      </div>
    </div>
  )
}
