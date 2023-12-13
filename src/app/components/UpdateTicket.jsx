'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getBusDestinations } from '../actions/bus/getBusDestination';

import { updateTicketDestination } from '../actions/ticket/updateTicket';

const UpdateTickets = ({ ticketId }) => {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const fetchedDestinations = await getBusDestinations();
        setDestinations(fetchedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  const handleUpdateTicket = async () => {
    try {
      // Use the ticket ID (passed as prop) to update the destination
      await updateTicketDestination(ticketId, selectedDestination);

      console.log('Ticket updated successfully!');
    } catch (error) {
      console.error('Error updating ticket:', error);
    }
  };

  return (
    <div className='flex flex-col gap-4 m-5 justify-center items-center'>
      <div className='flex flex-col gap-4 m-5 max-lg-md justify-center items-center'>
        <h1 className='text-xl'>Updating the ticket <span className='font-bold'>{ticketId}</span></h1>
        <label>
          Select Destination:
          <select
            className='block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value="" disabled>
              Choose a destination
            </option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </label>
        <button
          className="bg-primary hover:bg-[#267961] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow mr-4"
          onClick={handleUpdateTicket}
        >
          Update Ticket
        </button>
      </div>
    </div>
  );
};

export default UpdateTickets;