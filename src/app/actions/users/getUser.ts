"use server";

import prisma from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export const getUser = async (email: string) => {
    const user = await prisma.user.findUnique({
        where:{
            email: email
        },
    });

    if(user){
        return user
    }

}