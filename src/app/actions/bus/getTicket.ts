

"use server";

import prisma from "@/app/lib/prisma";

export const getTicketsByBusId = async (busId: string) => {
    try {
      const tickets = await prisma.ticket.findMany({
        where: {
          busId: busId,
        },
        include: {
          bus: true,
        },
      });
  
      return tickets;
    } catch (error) {
      console.error('Error fetching tickets by bus ID:', error);
      throw error;
    }
  };