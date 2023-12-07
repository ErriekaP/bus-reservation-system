import SignIn from '@/app/components/SignIn'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <h1 className='text-black text-4xl font-global-font my-2'>
            CERES TOURS
        </h1>
        </div>
        <div className='flex justify-center'>
        <SignIn />
        </div>
    </div>
  )
}

export default SignInPage