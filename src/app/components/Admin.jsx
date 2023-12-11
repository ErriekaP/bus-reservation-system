'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getAllBuses, getBusDestinations } from '../actions/bus/getBusDestination';

const Admin = () => {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const fetchedDestinations = await getAllBuses();
        setDestinations(fetchedDestinations);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []); 

  const handleRedirect = () => {
    router.push('/auth/addBus');
  };

  const handleRedirectToView = (destinationId) => {
    router.push(`/auth/${destinationId}`);
  };

  return (
    <div>
      <h1>Create Bus</h1>
      <button
        className="bg-primary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow"
        onClick={handleRedirect}
      >
        Add Bus
      </button>
      <div>
        {destinations.length === 0 ? (
          <p>No Bus found.</p>
        ) : (
          <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  {/* ... (previous table headers) */}
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
                    <td className="p-4">
                      <button
                        className="bg-primary hover:bg-[#267961] text-black text-sm font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow"
                        onClick={() => handleRedirectToView(destination.id)}
                      >
                        View
                      </button>
                    </td>
                    <td className="p-4">
                      <button
                        className="bg-secondary hover:bg-[#2D5073] text-black text-sm font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow"
                      >
                        Update
                      </button>
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

export default Admin;