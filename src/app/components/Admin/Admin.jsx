'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getAllBuses, getBusDestinations } from '../../actions/bus/getBusDestination';
import DumbAdmin from './DumbAdmin';

const Admin = () => {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const fetchedDestinations = await getAllBuses();
        setDestinations(fetchedDestinations);
        console.log(fetchedDestinations)
      } catch (error) {
        console.error('Error fetching destinations:', error);
        
      }
    };

    fetchDestinations();
  }, []); 

  const handleRedirect = () => {
    router.push('/auth/addBus');
  };

  const handleRedirectToView = (busId) => {
    router.push(`/auth/bus/${busId}`);
  };

  const handleRedirectToUpdate = (busId) => {
    router.push(`/auth/updateBus/${busId}`);
  };

  return (
    <DumbAdmin   
      destinations={destinations}
      handleRedirect={handleRedirect}
      handleRedirectToView={handleRedirectToView}
      handleRedirectToUpdate={handleRedirectToUpdate}
    />
  );
};

export default Admin;