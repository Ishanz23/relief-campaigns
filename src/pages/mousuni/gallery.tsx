import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/Layout'
import CampaignHeader from '../../components/CampaignHeader'

export default function Gallery() {
  return (
    <Layout>
      <section className='w-full h-full'>
        <CampaignHeader />
        <div className='body'>
          <div className='w-full gallery p-8'>
            <div className='images mb-8 w-full'>
              <h1 className='text-lg font-bold mb-8 w-full text-center'>Current State of Mousuni Islands</h1>
              <div className='images grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <StaticImage src='https://i.imgur.com/bMleumL.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/ZLk9ZoH.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/ETaXm09.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/tfYkyaT.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/KbqfqdU.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/Pg2tuwa.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/AUavAkp.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/FftFIZD.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/ATW0mpH.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/UMp8twT.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
                <StaticImage src='https://i.imgur.com/TIpzeUI.jpeg' alt='mousuni' className='roudned-md'></StaticImage>
              </div>
            </div>

            <div className='w-full'>
              <h1 className='text-lg font-bold mb-8 w-full text-center'>Videos</h1>
              <div className='videos w-full text-center'>No videos yet</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
