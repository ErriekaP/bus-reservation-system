'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getBusDestinations } from '../actions/bus/getBusDestination';
import { format } from 'date-fns';
import { getTicketsByBusId } from '../actions/bus/getTicket';

// Define the ViewBus component
const ViewBus = ({ viewBus }) => {
  const [destinations, setDestinations] = useState([]);
  const [tickets, setTickets] = useState([]); // Assuming you have a state for tickets
  const { data: session } = useSession();

  // Fetch bus destinations and tickets when the component mounts
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const fetchedDestinations = await getBusDestinations();
        setDestinations(fetchedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    const fetchTickets = async () => {
      try {
        // Assuming you have a function to fetch tickets by bus ID
        const fetchedTickets = await getTicketsByBusId(viewBus);
        setTickets(fetchedTickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchDestinations();
    fetchTickets();
  }, [viewBus, session]);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-full max-w-6xl px-8 flex items-center">
        <h1 className="text-3xl">Tickets for Bus: {viewBus}</h1>
      </div>
      <div className="flex justify-center max-w-6xl w-full">
        {tickets.length === 0 ? (
          <p>No tickets found.</p>
        ) : (
          <div className="w-full relative flex-col h-full text-gray-700 bg-white shadow-md bg-clip-border mx-8 my-4 bg-opacity-60 p-8">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                      Ticket ID
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                      Bus Destination
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
                {tickets.map((ticket) => (
                  <tr className="even:bg-blue-gray-50/50" key={ticket.id}>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {ticket.id}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {ticket.bus.destination}
                      </p>
                    </td>
                    <td className="p-4">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        {format(new Date(ticket.createdAt), 'MM/dd/yyyy')}
                      </p>
                    </td>
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

export default ViewBus;