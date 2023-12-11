"use server";

import prisma from "@/app/lib/prisma";


export const updateTicketDestination = async (ticketId: string, newDestination: string) => {
  try {
    // Find the current ticket
    const existingTicket = await prisma.ticket.findFirst({
      where: {
        id: ticketId,
      },
    });

    if (!existingTicket) {
      throw new Error(`No ticket found with ID: ${ticketId}`);
    }

    // Find the bus with the new destination name
    const bus = await prisma.bus.findFirst({
      where: {
        destination: newDestination,
      },
    });

    if (!bus) {
      throw new Error(`No bus found with destination: ${newDestination}`);
    }

    // Update the destination of the ticket
    const updatedTicket = await prisma.ticket.update({
      where: {
        id: existingTicket.id,
      },
      data: {
        busId: bus.id,
        // Include any other fields you want to update here
      },
    });

    return updatedTicket;
  } catch (error) {
    console.error('Error updating ticket destination:', error);
    throw error;
  }
};