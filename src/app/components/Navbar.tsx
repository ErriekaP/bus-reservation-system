import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (


<nav className="bg-background shadow-lg">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <p  className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-global-font whitespace-nowrap">CERES TOURS</span>
    </p>
   
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-background">
      {session && session.user?.email ? (
                <>
                <li>
                    <a href="/auth/signout" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-accent ">Sign out</a>
                </li>
                <li>
                    <p className="block py-2 px-3 text-gray-900 rounded font-bold ">Signed in as {session.user?.name}</p>
                </li>
    
                </>
            ) : (
               <div></div>
            )}
       
      </ul>
    </div>
  </div>
</nav>



        
        // <div classNameNameName='w-full px-4 py-8 bg-primary flex flex-row gap-4'>
        //     <p classNameNameName='font-global-font text-black'>CERES TOURS</p>
            
        //     {session && session.user?.email ? (
        //         <>
        //             <Link href='/auth/signout'>Sign out</Link>
        //             <p>
        //                 <b>Signed in as {session.user?.name}</b>
        //             </p>
        //         </>
        //     ) : (
        //         <div classNameNameName='grid grid-rows-3 grid-flow-col gap-4'>
        //             <div classNameNameName='row-end-3 row-span-2'>
        //                 <Link href='/auth/signin'>Sign in</Link>
        //             </div>
        //             <div classNameNameName=''>
        //                 <Link href='/auth/register'>Register</Link>
        //             </div>

        //         </div>
        //     )}
        // </div>
    );
};

export default Navbar;