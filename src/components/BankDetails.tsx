import React from 'react'

export default function BankDetails({ name, mobile, bankName, accNo, ifsc, upi }) {
  return (
    <div className='texts p-4'>
      <div className='name flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>Name:</span>
        <span>{name}</span>
      </div>
      <div className='phone flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>Mobile:</span>
        <span>{mobile}</span>
      </div>
      <div className='phone flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>Bank name:</span>
        <span>{bankName}</span>
      </div>
      <div className='account flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>Account No:</span>
        <span>{accNo}</span>
      </div>
      <div className='account flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>IFSC Code:</span>
        <span>{ifsc}</span>
      </div>
      <div className='account flex items-center justify-start'>
        <span className='font-bold pr-4 w-1/2'>UPI Address:</span>
        <span>{upi}</span>
      </div>
    </div>
  )
}
