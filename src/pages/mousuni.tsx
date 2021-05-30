import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import BankDetails from '../components/BankDetails'
import Organiser from '../components/Organiser'

export default function Mousuni() {
  const [active, setActive] = useState('details')

  const organisers = [
    {
      name: 'Sovon Das',
      fb: 'https://www.facebook.com/sovon.z',
      mobile: '9163353526',
    },
    {
      name: 'Kaushik Bharat',
      fb: 'https://www.facebook.com/kaushik.bharat.3',
      mobile: '9804800754',
    },
    {
      name: 'Soumoy Chakraborty',
      fb: 'https://www.facebook.com/soumoy.chakraborty.1',
      mobile: '7044311500',
    },
  ]

  const sayantan = {
    image: '../images/campaigns/mousuni/donation/qr-sayantan-phonepe.jpeg',
    name: 'Sayantan Dey',
    mobile: '9748365829',
    bankName: 'DBS Bank',
    accNo: '881014245725',
    ifsc: 'DBSS0IN0811',
    upi: 'deysayantan@dbs',
  }
  const snigdha = {
    image: '../images/campaigns/mousuni/donation/qr-sayantan-phonepe.jpeg',
    name: 'Snigdha Das Ghosh',
    mobile: '8013200128',
    bankName: 'State Bank of India',
    accNo: '32077074227',
    ifsc: 'SBIN0012347',
    upi: '8013200128@ybl',
  }
  return (
    <Layout>
      <section className='w-full h-full'>
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
          <nav>
            <ul className='uppercase flex items-center justify-evenly backdrop-filter bg-gray-600 bg-opacity-30 backdrop-blur-md font-bold'>
              <li
                className={`p-4 flex-1 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300 ${
                  active === 'details' ? 'bg-gray-500' : ''
                }`}
                onClick={() => setActive('details')}>
                Details
              </li>
              <li
                className={`p-4 flex-1 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300 ${
                  active === 'gallery' ? 'bg-gray-500' : ''
                }`}
                onClick={() => setActive('gallery')}>
                gallery
              </li>
              <li
                className={`p-4 flex-1 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300 ${
                  active === 'organisers' ? 'bg-gray-500' : ''
                }`}
                onClick={() => setActive('organisers')}>
                organisers
              </li>
              <li
                className={`p-4 flex-1 text-center cursor-pointer hover:bg-gray-500 transition-colors duration-300 ${
                  active === 'donate' ? 'bg-gray-500' : ''
                }`}
                onClick={() => setActive('donate')}>
                donate
              </li>
            </ul>
          </nav>
        </header>
        <div className='body'>
          {active === 'details' && (
            <div className='details'>
              <StaticImage
                src='../images/campaigns/mousuni/mousuni-details-cover.jpeg'
                alt='mousuni'
                className=''></StaticImage>
              <p className='p-8'>
                Mousuni Islands is a collection of small islands consisting around 17 villages, located near Sagaddwip
                and Bakkhali. Due to the recent cyclone 'Yaas', combined with the effect of full moon on the same day,
                most of the villages suffered massive damages due to severe flooding.
              </p>
            </div>
          )}
          {active === 'gallery' && (
            <div className='w-full gallery p-8'>
              <div className='images mb-8 w-full'>
                <h1 className='text-lg font-bold mb-8 w-full text-center'>Images</h1>
                <div className='images grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                  <StaticImage
                    src='../images/campaigns/mousuni/1.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/2.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/3.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/4.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/5.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/6.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/7.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/8.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/9.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/10.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                  <StaticImage
                    src='../images/campaigns/mousuni/11.jpeg'
                    alt='mousuni'
                    className='roudned-md'></StaticImage>
                </div>
              </div>
              <div className='w-full'>
                <h1 className='text-lg font-bold mb-8 w-full text-center'>Videos</h1>
                <div className='videos w-full text-center'>No videos yet</div>
              </div>
            </div>
          )}
          {active === 'organisers' && (
            <div className='organisers p-8'>
              <h1 className='text-xl font-bold md:text-2xl text-center md:text-left mb-8'>
                Meet the people behind the campaign
              </h1>
              <div className='people grid md:grid-cols-4 gap-8'>
                {organisers.map((item) => (
                  <Organiser name={item.name} fb={item.fb} mobile={item.mobile} key={item.mobile}></Organiser>
                ))}
              </div>
            </div>
          )}
          {active === 'donate' && (
            <div className='donate p-8'>
              <p className='w-full my-8'>You can donate any amount as you wish in the below accounts:</p>
              <div className='details grid md:grid-cols-2 gap-8 place-items-center'>
                <div className='bank backdrop-filter bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-md'>
                  <StaticImage
                    src='../images/campaigns/mousuni/donation/qr-snigdha-phonepe.jpeg'
                    alt='upi-qr'
                    width={450}></StaticImage>
                  <BankDetails
                    name={snigdha.name}
                    mobile={snigdha.mobile}
                    accNo={snigdha.accNo}
                    bankName={snigdha.bankName}
                    ifsc={snigdha.ifsc}
                    upi={snigdha.upi}></BankDetails>
                </div>
                <div className='bank backdrop-filter bg-gray-800 bg-opacity-30 backdrop-blur-md rounded-md'>
                  <StaticImage
                    src='../images/campaigns/mousuni/donation/qr-sayantan-phonepe.jpeg'
                    alt='upi-qr'
                    width={450}></StaticImage>
                  <BankDetails
                    name={sayantan.name}
                    mobile={sayantan.mobile}
                    accNo={sayantan.accNo}
                    bankName={sayantan.bankName}
                    ifsc={sayantan.ifsc}
                    upi={sayantan.upi}></BankDetails>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
