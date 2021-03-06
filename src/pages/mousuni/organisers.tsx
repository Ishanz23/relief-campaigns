import React from 'react'

import Layout from '../../components/Layout'
import Organiser from '../../components/Organiser'
import CampaignHeader from '../../components/CampaignHeader'

export default function Organisers() {
  const organisers = [
    {
      name: 'Barnali Mam',
      fb: '',
      mobile: '6291262467',
    },
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
    {
      name: 'Snigdha Das Ghosh',
      fb: 'https://www.facebook.com/snigdha.das.5264',
      mobile: '7044311500',
    },
    {
      name: 'Avijit Sinha',
      fb: 'https://www.facebook.com/avijit.sinha.370',
      mobile: '7980288929',
    },
    {
      name: 'Saidul Ali',
      fb: 'https://www.facebook.com/saidul.ali.75',
      mobile: '9051816879',
    },
    {
      name: 'Sayantan Dey',
      fb: 'https://www.facebook.com/Ishanz23',
      mobile: '9748365829',
    },
    {
      name: 'Rahul Das',
      fb: 'https://www.facebook.com/rahul.das.96930',
      mobile: '8336908320',
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
              {organisers.map((item, i) => (
                <Organiser name={item.name} fb={item.fb} mobile={item.mobile} key={item.mobile} index={i}></Organiser>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
