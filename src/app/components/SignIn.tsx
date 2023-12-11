'use client';

import React, { useEffect, useState } from 'react';
import { register } from '../actions/users/register';
import { getUser } from '../actions/users/getUser';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/userContext';

const SignInForm = () => {
    const router = useRouter();

    const { status } = useSession();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    const { changeUser } = useUser();

    const handleSubmit = async () => {
        //setMessage('Signing in...');
        
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials.");
            } else {
                router.refresh();
            }

        } catch(err) {
            console.log(err);
        }
        //setMessage("Invalid credentials.");
        //setMessage(message);
    };

    const handleRedirect = () => {
        router.push('/auth/register');
      };

    useEffect(() => { 
        async function fetchUser (){
            if (status === 'authenticated') {
                const user = await getUser(email)
                changeUser(user)
                
                if(user?.userType === 'admin'){
                    router.push('/auth/admin');
                } else{
                    router.push('/auth/passenger');
                }
                console.log(user)
    
                //router.push('/auth/admin');
                router.refresh();
            }
        } 
        fetchUser()

    }, [status]);

    return (
        <div className='flex flex-col gap-4 m-5'>
            <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div>
            <button className="bg-primary hover:bg-[#267961] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow mr-4 " onClick={handleSubmit}>Sign In</button>
            <button className="bg-secondary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow " onClick={handleRedirect}>Register</button>
            </div>
            <p className='text-accent font-extrabold'>{message}</p>
        </div>
    );
};

export default SignInForm;