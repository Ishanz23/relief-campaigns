import React, { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../../components/Layout'
import BankDetails from '../../components/BankDetails'
import CampaignHeader from '../../components/CampaignHeader'

export default function Donate() {
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
        <CampaignHeader />
        <div className='body'>
          <div className='donate px-4 mt-4 md:px-8'>
            <p className='w-full my-4 text-center font-bold'>
              You can donate any amount as you wish in the below accounts:
            </p>
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
        </div>
      </section>
    </Layout>
  )
}
