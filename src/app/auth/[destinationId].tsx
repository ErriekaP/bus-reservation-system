// pages/auth/[destinationId].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const DestinationDetails = () => {
  const router = useRouter();
  const { destinationId } = router.query;

  // Fetch destination details using destinationId and display them

  return (
    <div>
      <h1>Destination Details</h1>
      <p>Destination ID: {destinationId}</p>
      {/* Display other details of the destination */}
    </div>
  );
};

export default DestinationDetails;