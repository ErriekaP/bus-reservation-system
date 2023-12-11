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

  // export const getAllBuses = async () => {
  //   try {
  //     return await prisma.bus.findMany();
  //   } catch (error) {
  //     console.error('Error fetching all buses:', error);
  //     throw error;
  //   }
  // };

  export const getBusDestination = async (busId: any) => {
    try {
      if (busId) {
        const bus = await prisma.bus.findFirst({
          where: {
            id: busId,
          },
          select: {
            destination: true,
          },
        });
  
        if (bus) {
          return bus.destination;
        } else {
          throw new Error(`No bus found with ID: ${busId}`);
        }
      } else {
        const destinations = await prisma.bus.findMany({
          select: {
            destination: true,
          },
        });
  
        return destinations.map((bus) => bus.destination);
      }
    } catch (error) {
      console.error('Error fetching bus destinations:', error);
      throw error;
    }
  };

  export const getAllBuses = async () => {
    try {
      const buses = await prisma.bus.findMany({
        include: {
          ticket: {
            select: {
              id: true,
            },
          },
        },
      });
  
      const busesWithRemainingTickets = buses.map((bus) => {
        const remainingTickets = bus.ticketLimit - bus.ticket.length;
        return {
          ...bus,
          remainingTickets,
        };
      });
  
      return busesWithRemainingTickets;
    } catch (error) {
      console.error('Error fetching all buses:', error);
      throw error;
    }
  };