import React, { Fragment } from 'react'
import { Link } from 'gatsby'

export default function Layout({ children, header = false }) {
  return (
    <Fragment>
      <main className='min-h-screen w-full text-gray-900 dark:text-gray-100 bg-gradient-to-b from-gray-900 to-blue-800'>
        {header && (
          <header className='w-full h-16 text-xl p-4 flex items-center justify-center md:justify-start shadow-md uppercase'>
            <Link to='/'>Relief Campaigns</Link>
          </header>
        )}
        {children}
      </main>
    </Fragment>
  )
}
