'use client'

import { useRouter } from 'next/navigation';
import { getTicket } from '../actions/ticket/getTicket';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserIdByEmail } from '../actions/ticket/getTicket';
import { format } from 'date-fns';
import { useUser } from '@/contexts/userContext';
import { deleteTicket } from '../actions/ticket/deleteTicket';

const PassengerPage = () => {
  const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const { user } = useUser();
  const {data: session} = useSession()
  const [selectedDestination, setSelectedDestination] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        if (!session) {
          throw new Error('User is not authenticated');
        }
        
        const email = session.user?.email
        const userId = await getUserIdByEmail(email);
        const userTickets = await getTicket(userId);

        setTickets(userTickets);
        console.log(userTickets)

      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, [session]);

  const handleRedirect = () => {
    // You can use the router to programmatically navigate to another page
    router.push('/auth/addTicket');
  };

  const handleUpdate = (ticketId) => {
    //router.push('/auth/updateTicket');
    // Fetch the updated list of tickets after deletion

    //router.push(`/auth/ticketId/${ticketId}`);
    router.push(`/auth/${ticketId}`);
  };

  const handleDelete = async (ticketId) => {
    try {   
      await deleteTicket(ticketId);

       // Fetch the updated list of tickets after deletion
       const email = session.user?.email;
       const userId = await getUserIdByEmail(email);
       const deletedTickets = await getTicket(userId);

       // Update the component state with the updated tickets
      setTickets(deletedTickets);
      console.log('Ticket deleted successfully');
      
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
    router.refresh();
    
  };

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-full max-w-6xl px-8 flex justify-between items-center">
        <h1 className="text-3xl">Tickets</h1>
        <button className="bg-primary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow " onClick={handleRedirect}>Add Ticket</button>
      </div>
      <div className="flex justify-center max-w-6xl w-full">
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <div className="w-full relative flex-col h-full text-gray-700 bg-white shadow-md bg-clip-border mx-8 my-4 bg-opacity-60 p-8">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                Ticket ID
                </p>
              </th>
              <th className="p-4 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                Bus Destination
                </p>
              </th>
              <th className="p-4 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                Date & Time
                </p>
              </th>
              <th className="p-4 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
              </th>
              <th className="p-4 bg-blue-gray-50">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
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
                <td className="p-4 flex justify-end gap-8"> 
                <button
                      className="bg-secondary hover:bg-[#2D5073] text-black text-sm font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow"
                      onClick={() => handleUpdate(ticket.id)}
                    >
                      Update
                    </button>
                    <button className="bg-accent hover:bg-[#9A1D05] text-black text-sm font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow " 
                onClick={() => handleDelete(ticket.id)} >Delete </button>
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

export default PassengerPage;