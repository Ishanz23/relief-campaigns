import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

// markup
export default function MousuniCard() {
  return (
    <div className='flex flex-col my-8 md:my-0 backdrop-filter bg-gray-600 bg-opacity-40 backdrop-blur-md rounded-md'>
      <header className='w-full flex items-center justify-between p-4'>
        <Link to='mousuni'>
          <h1 className='text-xl text-center uppercase font-bold'>Save Mousuni</h1>
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
      <Link to='mousuni'>
        <div>
          <StaticImage src='../images/campaigns/mousuni/mousuni-cover.jpeg' alt='Save Mousuni'></StaticImage>
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
    </div>
  )
}
