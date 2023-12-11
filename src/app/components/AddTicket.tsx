'use client'

import { useState, useEffect } from 'react';
import { createTicket } from '../actions/ticket/createTicket';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getBusDestinations, getAllBuses } from '../actions/bus/getBusDestination';
import { useUser } from '@/contexts/userContext';

const CreateTicketPage: React.FC = () => {
  const router = useRouter();
  const [destinations, setDestinations] = useState<string[]>([]);
  const [selectedDestination, setSelectedDestination] = useState('');
  const { user } = useUser();

  const handleCreateTicket = async () => {
    try {

      const userId = user?.id;
      await createTicket(userId, selectedDestination);
      console.log('Ticket created successfully!');
    
    } catch (error) {
      console.error('Error creating ticket:', error);
   
    }
  };

  useEffect(() => {
    // Fetch bus destinations when the component mounts
    const fetchDestinations = async () => {
      try {
        const fetchedDestinations = await getBusDestinations();
        setDestinations(fetchedDestinations);
        console.log(setDestinations)
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []); 

  return (
    <div className='flex flex-col gap-4 m-5'>
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
      <button className="bg-primary hover:bg-[#267961] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow mr-4" onClick={handleCreateTicket}>Create Ticket</button>
    </div>
  );
};

export default CreateTicketPage;