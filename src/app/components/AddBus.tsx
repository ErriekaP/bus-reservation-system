'use client'

import { useState, useEffect } from 'react';
import { createTicket } from '../actions/ticket/createTicket';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { getBusDestinations } from '../actions/bus/getBusDestination';
import { useUser } from '@/contexts/userContext';
import { createBus } from '../actions/bus/createBus'

const CreateTicketPage = () => {
    const [destination, setDestination] = useState('');
    const [ticketLimit, setTicketLimit] = useState<number>(0);
    const [message, setMessage] = useState('');

  
    const handleSubmit = async () => {
        const message = await createBus(destination, ticketLimit);
        setMessage(message);
    };
  
    return (
        <div className='flex flex-col gap-4 m-5'>
            <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
            <input className="block w-full rounded-md border-2 border-black border-solid py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type='text' placeholder="Ticket Limit" value={ticketLimit.toString()} onChange={(e) => setTicketLimit(parseInt(e.target.value, 10) || 0)} />            
            <button className='bg-secondary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow' onClick={handleSubmit}>Add Bus</button>
  
  
            <p>{message}</p>
        </div>
    );
  }

export default CreateTicketPage;