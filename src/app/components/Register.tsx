'use client'
import { register } from '../actions/users/register'
import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [userType, setuserType] = useState('');

  const handleSubmit = async () => {
      setMessage("Signing up...");
      const message = await register(email, password, name, userType);
      setMessage(message);
  };

  return (
      <div className='flex flex-col gap-4 m-5'>
          <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <div className="form-check">
            <input className="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="admin" onChange={(e) => setuserType(e.target.value)}/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Admin
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="passenger" onChange={(e) => setuserType(e.target.value)}/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
                Passenger
            </label>
         </div>

          <button className='bg-secondary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow' onClick={handleSubmit}>Register</button>


          <p>{message}</p>
      </div>
  );
}

export default Register
