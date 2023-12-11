import AddTicket from '@/app/components/AddTicket'
import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center my-20 '>
        <h1 className='text-black text-2xl font-global-font my-2'> Create Ticket </h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <AddTicket/>
        </div>
    </div>
  )
}

export default page
