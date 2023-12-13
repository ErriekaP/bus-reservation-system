'use client'

import { useRouter } from 'next/navigation';
import { getTicket } from '../../actions/ticket/getTicket';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getUserIdByEmail } from '../../actions/ticket/getTicket';
import { format } from 'date-fns';
import { useUser } from '@/contexts/userContext';
import { deleteTicket } from '../../actions/ticket/deleteTicket';
import DumbPassenger from './DumbPassenger';

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
    <DumbPassenger  
      handleRedirect={handleRedirect}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      tickets={tickets}
    />
  );
};

export default PassengerPage;