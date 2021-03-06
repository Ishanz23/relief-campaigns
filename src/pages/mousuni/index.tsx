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
          <div className='details grid place-items-center md:gap-8 md:p-8'>
            <div className='md:flex md:backdrop-filter md:bg-gray-600 md:bg-opacity-30 md:backdrop-blur-md md:rounded-lg'>
              <StaticImage
                src='https://i.imgur.com/PleVeJC.jpg'
                alt='mousuni'
                width={600}
                className='md:rounded-l-lg order-1'></StaticImage>
              <div className='div caption p-4 md:w-3/4 flex flex-col items-center justify-center order-2'>
                <h1 className='w-full md:text-center font-bold uppercase text-lg'>THE CRISIS</h1>
                <p className='py-4'>
                  Mousuni Islands is a collection of small islands consisting around 17 villages, located near Sagaddwip
                  and Bakkhali. Due to the recent cyclone 'Yaas', combined with the effect of full moon on the same day,
                  most of the villages suffered massive damages due to severe flooding. The people lost almost all of
                  their belongings, drinking water is polluted with the salt water from the sea, Stored food got rotten
                  due the flood. The devastation around the villages is massive.
                </p>
              </div>
            </div>
            <div className='md:flex md:backdrop-filter md:bg-gray-600 md:bg-opacity-30 md:backdrop-blur-md md:rounded-lg'>
              <StaticImage
                src='https://i.imgur.com/ph6jIZn.jpg'
                alt='mousuni'
                width={600}
                className='md:rounded-r-lg order-2'></StaticImage>
              <div className='div caption p-4 md:w-3/4 flex flex-col items-center justify-center order-1'>
                <h1 className='w-full md:text-center font-bold uppercase text-lg'>WHAT WE AIM TO DO</h1>
                <p className='py-4'>
                  The recent cyclone Yash left no room to keep our urban sophistication within, we have to stand by the
                  helpless people residing in the devastated areas.The situation is extremely troublesome and require
                  our physical and mental attention. Since last year we have been doing this and as per our experience
                  we have realized that in order to put an effort of recovering a calamitous situation such as this we
                  must have huge amount of funds,your contribution. We implore you in accordance with the urgent
                  requirement that even the slightest donation can be part of this course of action.
                </p>
                <p>
                  We have arranged essential foods like rice, potato, packaged foods; clothes for men and women and
                  water purification items like alum, permanganate and bleaching powder and will be distributing them on
                  <strong> Saturday, 6th June, 2021.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
