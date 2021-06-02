import React from 'react'

export default function Organiser({ name, fb, mobile, index }) {
  return (
    <div
      className={`flex flex-col items-center p-4 justify-center shadow-md
    backdrop-filter ${index % 2 ? 'bg-gray-600' : 'bg-gray-500'}  bg-opacity-40 backdrop-blur-md rounded-md`}>
      <a href={fb} target='_'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-32 w-32' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fill-rule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
            clip-rule='evenodd'
          />
        </svg>
      </a>
      <p className='font-bold mb-4'>{name}</p>
      <a href={`tel:+91${mobile}`} className='font-bold flex gap-4 items-center'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
          <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
        </svg>
        {mobile}
      </a>
    </div>
  )
}
