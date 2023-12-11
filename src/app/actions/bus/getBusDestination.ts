"use server";

import prisma from "@/app/lib/prisma";

export const getBusDestinations = async () => {
    try {
      const destinations = await prisma.bus.findMany({
        select: {
          destination: true,
        },
      });
  
      return destinations.map((bus) => bus.destination);

    } catch (error) {
      console.error('Error fetching bus destinations:', error);
      throw error;
    } 
  };

  export const getAllBuses = async () => {
    try {
      return await prisma.bus.findMany();
    } catch (error) {
      console.error('Error fetching all buses:', error);
      throw error;
    }
  };