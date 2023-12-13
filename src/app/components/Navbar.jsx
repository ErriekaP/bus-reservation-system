import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';

const Navbar = async () => {
    const session = await getServerSession(authOptions);

    return (


    <nav className="bg-background shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p  className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/logo.png" width={40} height={40} alt='logo' />
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
    );
};

export default Navbar;