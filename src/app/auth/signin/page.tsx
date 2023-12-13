import SignIn from '@/app/components/SignIn'
import React from 'react'
import Image from 'next/image'

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex items-center justify-center gap-4'>
        <Image src="/logo.png" width={50} height={50} alt='logo' />
        <h1 className='text-black text-4xl font-global-font my-2'>
            CERES TOURS
        </h1>
      </div>
      <div >
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage