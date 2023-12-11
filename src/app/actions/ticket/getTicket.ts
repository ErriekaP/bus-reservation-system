
"use server";

import prisma from "@/app/lib/prisma";
import bcrypt from 'bcryptjs';

export const getTicket = async (userId: string) => {
    try{
        const tickets = await prisma.ticket.findMany({
            where: {
                userId: userId,
            },
            include: {
                bus: true,
                ticket: true,
            },
        });
        
        return tickets;
    } catch (error){
        console.log('Error retrieving tickets', error)
        throw error;
    } 

}

export const getUserIdByEmail = async (email: string) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          id: true,
        },
      });
  
      if (!user) {
        throw new Error(`No user found with email: ${email}`);
      }
  
      return user.id;
    } catch (error) {
      console.error('Error fetching user ID by email:', error);
      throw error;
    } 
  };

  export const getBusTicket = async (BusId: string) => {
    try{
        const buses = await prisma.bus.findMany({
            where: {
              id: BusId,
            },
            include: {
                ticket: true,
            },
        });
        
        return buses;
    } catch (error){
        console.log('Error retrieving buses', error)
        throw error;
    } 

}