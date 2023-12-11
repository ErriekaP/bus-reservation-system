"use server";

import prisma from "@/app/lib/prisma";

export const updateBusDestination = async (busId: string, newDestination: string, limit: number) => {
  try {
    // Find the current bus
    const existingBus = await prisma.bus.findFirst({
      where: {
        id: busId,
      },
    });

    if (!existingBus) {
      throw new Error(`No bus found with ID: ${busId}`);
    }

    // Update the destination of the bus
    const updatedBus = await prisma.bus.update({
      where: {
        id: busId,
      },
      data: {
        destination: newDestination,
        ticketLimit: limit,
        // Include any other fields you want to update here
      },
    });

    return updatedBus;
  } catch (error) {
    console.error('Error updating bus destination:', error);
    throw error;
  }
};