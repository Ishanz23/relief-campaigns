import React from 'react'
import MousuniCard from '../components/MousuniCard'
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout header={true}>
      <header className='w-full h-16 flex items-center justify-center md:px-8'>
        <h1 className='sm:text-2xl md:text-4xl font-bold uppercase'>Upcoming Relief Campaigns</h1>
      </header>
      <section className='h-full md:w-1/2 md:mx-auto p-2 md:p-8 md:grid md:grid-cols-1 gap-4'>
        <MousuniCard name={'mousuni'}></MousuniCard>
      </section>
    </Layout>
  )
}

export default IndexPage
