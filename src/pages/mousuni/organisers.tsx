import React from 'react'

import Layout from '../../components/Layout'
import Organiser from '../../components/Organiser'
import CampaignHeader from '../../components/CampaignHeader'

export default function Mousuni() {
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
  return (
    <Layout>
      <section className='w-full h-full'>
        <CampaignHeader />
        <div className='body'>
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
        </div>
      </section>
    </Layout>
  )
}
