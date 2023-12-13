'use client'
 import { FC } from "react";
 import UpdateTickets from '@/app/components/UpdateTicket'

 interface pageProps{
  params: {ticket: String}
 }

const page: FC<pageProps> = ({params}) => {
    return <div>
      <UpdateTickets ticketId={params.ticket} />
    </div>
  }
 
 export default page