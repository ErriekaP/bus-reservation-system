'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getBusDestinations, getBusDestination } from '../actions/bus/getBusDestination';
import { updateBusDestination } from '../actions/bus/updateBus';

const UpdateBus = ({ busId }) => {
  const router = useRouter();
  const [selectedDestination, setSelectedDestination] = useState('');
  const [destinations, setDestinations] = useState('');
  const [ticketLimit, setTicketLimit] = useState(0);

  const handleUpdateBus = async () => {

    try {
      // Use the bus ID (passed as prop) to update the destination
      await updateBusDestination(busId, destinations,ticketLimit);
      console.log('Bus updated successfully!');
    } catch (error) {
      console.error('Error updating Bus:', error);
    }
  };

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const initialDestination = await getBusDestination(busId);
        setSelectedDestination(initialDestination);
      } catch (error) {
        console.error('Error fetching initial destination:', error);
      }
    };

    fetchDestination();
  }, [busId]);
  return (
    <div className='flex flex-col gap-4 m-5 justify-center items-center'>
      <div className='flex flex-col gap-4 m-5 max-w-md justify-center items-center'>
        <h1>Tickets for Bus: {busId}</h1>
        <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder={selectedDestination} value={destinations} onChange={(e) => setDestinations(e.target.value)} />
        <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder="Ticket Limit" value={ticketLimit.toString()} onChange={(e) => setTicketLimit(parseInt(e.target.value, 10) || 0)} />            
        <button
          className="bg-primary hover:bg-[#267961] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow mr-4"
          onClick={handleUpdateBus}
        >
          Update Bus
        </button>
      </div>
    </div>
  );
};

export default UpdateBus;

