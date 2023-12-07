import React from 'react'
import Register from '../../components/Register'
const RegisterPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='text-black text-4xl font-global-font my-2'>
            CERES TOURS
        </h1>
        </div>
        <div className='flex justify-center'>
        <Register />
        </div>
    </div>
  )
}

export default RegisterPage
