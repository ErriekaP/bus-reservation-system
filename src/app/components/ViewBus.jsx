'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { format } from 'date-fns';
import { useUser } from '@/contexts/userContext';
import { getAllBuses, getBusDestinations } from '../actions/bus/getBusDestination';
import { getBusTicket } from '../actions/ticket/getTicket';

const ViewBus = () => {
    const router = useRouter();
    const [tickets, setTickets] = useState([]);
    const { user } = useUser();
    const {data: session} = useSession()
    const [destinations, setDestinations] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState('');
  
    useEffect(() => {
      const fetchTickets = async () => {
        try {
          if (!session) {
            throw new Error('User is not authenticated');
          }
          
          const email = session.user?.email
          const userId = await getUserIdByEmail(email);
          const userTickets = await getBusTicket(userId);
  
          setTickets(userTickets);
          console.log(userTickets)
  
        } catch (error) {
          console.error('Error fetching tickets:', error);
        }
      };
  
      fetchTickets();
    }, [session]);

    return (
      <div>
        <h1>Create Bus</h1>
        <div>
        {destinations.length === 0 ? (
          <p>No Bus found.</p>
        ) : (
          <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                  Bus ID
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                  Destination Name
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                  Date & Time
                  </p>
                </th>
       
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination) => (
                <tr className="even:bg-blue-gray-50/50" key={destination.id}>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {destination.id}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {destination.destination}
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {format(new Date(destination.createdAt), 'MM/dd/yyyy')}
                    </p>
                  </td>
               
                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
  
        )}
      </div>
      </div>
      
    );
  };
  
export default ViewBus
