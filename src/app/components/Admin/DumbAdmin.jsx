// 'use client'

// import React from 'react'
// import { format } from 'date-fns';

// const DumbAdmin = () => {
//   return (
//     <div className="w-full flex justify-center flex-col items-center py-12">
//     </div>
//   );
// };

// export default DumbAdmin;


 'use client'

import React from 'react'
import { format } from 'date-fns';

const DumbAdmin = ({
  destinations,
  handleRedirect,
  handleRedirectToView,
  handleRedirectToUpdate,
}) => {
  return (
    <div className="w-full flex justify-center flex-col items-center py-12">
      <div className="w-full max-w-6xl px-8 flex justify-between items-center">
        <h1 className="text-3xl">Bus</h1>
        <button
          className="bg-primary hover:bg-[#2D5073] text-black font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow"
          onClick={handleRedirect}
        >
          Add Bus
        </button>
      </div>
      <div className="flex justify-center max-w-6xl w-full">
        {destinations.length === 0 ? (
          <p>No Bus found.</p>
        ) : (
          <div className="w-full relative flex-col h-full text-gray-700 bg-white shadow-md bg-clip-border mx-8 my-4 bg-opacity-60 p-8">
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
                  Bus Destination
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                  Remaining Tickets
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-black">
                  Date & Time
                  </p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
                <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                </th>
              </tr>
            </thead>
            <tbody>
                {destinations.map((destination, idx) => (
                  <tr className="even:bg-blue-gray-50/50" key={destination.id} role='listitem'>
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
                      {destination.remainingTickets} / {destination.ticketLimit}
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
                        onClick={() => handleRedirectToView(destination.id, destination.destination)}
                        role={destination.id}
                      >
                        View
                      </button>
                    </td>
                    <td className="p-4">
                      <button
                        className="bg-secondary hover:bg-[#2D5073] text-black text-sm font-global-font py-2 px-4 border-2 border-black border-solid rounded-lg shadow" 
                        onClick={() => handleRedirectToUpdate(destination.id)}
                      >
                        Update
                      </button>
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
    
    export default DumbAdmin;
 