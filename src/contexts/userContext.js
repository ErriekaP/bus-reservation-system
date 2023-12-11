'use client';
//{user || pathname === '/auth/signin' || pathname === '/auth/register'|| pathname === '/auth/signout'  ? children: <div>not authenticated</div>}

import { useContext, createContext, useState } from "react";
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const UserContext = createContext()

export function UserProvider( {children} ){
    const [user, setUser] = useState(null)
    const pathname = usePathname()
    const {data: session} = useSession()

    const changeUser= (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, changeUser}}>
            {session || pathname === '/auth/signin' || pathname === '/auth/register'|| pathname === '/auth/signout'  ? children: <div>not authenticated</div>}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext)
}
