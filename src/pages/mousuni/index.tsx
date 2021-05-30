import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/Layout'
import CampaignHeader from '../../components/CampaignHeader'

export default function Mousuni() {
  return (
    <Layout>
      <section className='w-full h-full'>
        <CampaignHeader />
        <div className='body'>
          <div className='details grid place-items-center gap-8 md:p-8'>
            <div className='texts text-justify order-2 md:flex backdrop-filter bg-gray-600 bg-opacity-30 backdrop-blur-md md:rounded-lg'>
              <StaticImage
                src='https://i.imgur.com/PleVeJC.jpg'
                alt='mousuni'
                width={600}
                className='md:rounded-l-lg'></StaticImage>
              <div className='div caption p-4 md:w-3/4 flex flex-col items-center justify-center'>
                <h1 className='text-center font-bold uppercase text-lg'>THE CRISIS</h1>
                <p className='p-4 md:p-4'>
                  Mousuni Islands is a collection of small islands consisting around 17 villages, located near Sagaddwip
                  and Bakkhali. Due to the recent cyclone 'Yaas', combined with the effect of full moon on the same day,
                  most of the villages suffered massive damages due to severe flooding.
                </p>
              </div>
            </div>
            <div className='texts text-justify order-2 md:flex backdrop-filter bg-gray-600 bg-opacity-30 backdrop-blur-md md:rounded-lg'>
              <div className='div caption p-4 md:w-3/4 flex flex-col items-center justify-center'>
                <h1 className='text-center font-bold uppercase text-lg'>WHAT WE AIM TO DO</h1>
                <p className='p-4'>
                  The recent cyclone Yash left no room to keep our urban sophistication within, we have to stand by the
                  helpless people residing in the devastated areas.The situation is extremely troublesome and require
                  our physical and mental attention. Since last year we have been doing this and as per our experience
                  we have realized that in order to put an effort of recovering a calamitous situation such as this we
                  must have huge amount of funds,your contribution. We implore you in accordance with the urgent
                  requirement that even the slightest donation can be part of this course of action.
                </p>
              </div>
              <StaticImage
                src='https://i.imgur.com/ph6jIZn.jpg'
                alt='mousuni'
                width={600}
                className='md:rounded-r-lg'></StaticImage>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
