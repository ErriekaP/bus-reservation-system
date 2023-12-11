"use server";

import prisma from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export const createBus = async (destination: string, ticketlimit: number) => {
    const bus = await prisma.bus.findUnique({
        where:{
            destination
        },
    });

    //const pass = bcrypt.h ashSync(password, 10)

    await prisma.bus.create({
        data: {
            destination: destination,
            ticketLimit: ticketlimit,
       
        },
    });
    return "Successfully created a new destination!";
}