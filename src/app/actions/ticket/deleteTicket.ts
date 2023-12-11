"use server";

import prisma from "@/app/lib/prisma";

export const deleteTicket = async (userId: string) => {
    try{
        const deletedTicket  = await prisma.ticket.delete({
            where: {
                id: userId,
            }
        });
        
        return deletedTicket;
    } catch (error){
        console.log('Error deleting ticket', error)
        throw error;
    } 

}