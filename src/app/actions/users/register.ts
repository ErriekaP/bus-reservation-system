"use server";

import prisma from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export const register = async (email: string, password: string, name: string, userType: string) => {
    const user = await prisma.user.findUnique({
        where:{
            email
        },
    });

    if(user){
        return "User with that email already exists."
    }

    //const pass = bcrypt.h ashSync(password, 10)

    await prisma.user.create({
        data: {
            userType: userType,
            name: name,
            email: email,
            pass: password,
        },
    });
    return "Successfully created new user!";
}