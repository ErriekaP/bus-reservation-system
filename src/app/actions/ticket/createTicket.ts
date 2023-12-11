"use server";

import prisma from "@/app/lib/prisma";

export const createTicket = async (userId: string, destination: string) => {
  try {
    // Find the user with the specified id
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error(`No user found with ID: ${userId}`);
    }

    // Find the bus with the specified destination
    const bus = await prisma.bus.findFirst({
      where: {
        destination: destination,
      },
    });

    if (!bus) {
      throw new Error(`No bus found with destination: ${destination}`);
    }

    // Check if the number of tickets exceeds the limit
    const ticketCount = await prisma.ticket.count({
      where: {
        busId: bus.id,
      },
    });

    const ticketLimit = bus.ticketLimit || 0; 

    if (ticketCount >= ticketLimit) {
      throw new Error(`Ticket limit exceeded for bus ${bus.id}`);
    }

    // Create a new ticket using the retrieved userId and busId
    const ticket = await prisma.ticket.create({
      data: {
        userId: user.id,
        busId: bus.id,
      },
    });

    return ticket;
  } catch (error) {
    console.error('Error creating ticket:', error);
    throw error;
  }
};