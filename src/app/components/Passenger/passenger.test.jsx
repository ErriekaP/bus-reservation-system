import React from 'react';
import { render, screen } from '@testing-library/react';
import DumbPassenger from './DumbPassenger';

describe('DumbPassenger', () => {
  const tickets = [
    {
        "id": "clq0zhoky0007a9jid8zvofzo",
        "busId": "clpxges6i00014iycnm6v0w1z",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-11T14:03:18.322Z",
        "updatedAt": "2023-12-13T04:42:08.913Z",
        "bus": {
            "id": "clpxges6i00014iycnm6v0w1z",
            "destination": "Davao-Digos",
            "ticketLimit": 25,
            "createdAt": "2023-12-09T02:45:51.786Z",
            "updatedAt": "2023-12-09T02:45:37.357Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq18dw2v00072t921gcdlt46",
        "busId": "clpxges6i00014iycnm6v0w1z",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-11T18:12:17.960Z",
        "updatedAt": "2023-12-11T18:12:17.960Z",
        "bus": {
            "id": "clpxges6i00014iycnm6v0w1z",
            "destination": "Davao-Digos",
            "ticketLimit": 25,
            "createdAt": "2023-12-09T02:45:51.786Z",
            "updatedAt": "2023-12-09T02:45:37.357Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq18h736000b2t92ne05alci",
        "busId": "clq0lvc340000ua4i0i3fnl81",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-11T18:14:52.194Z",
        "updatedAt": "2023-12-11T18:14:52.194Z",
        "bus": {
            "id": "clq0lvc340000ua4i0i3fnl81",
            "destination": "Davao-Kidapawan",
            "ticketLimit": 30,
            "createdAt": "2023-12-11T07:42:00.688Z",
            "updatedAt": "2023-12-11T07:42:00.688Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq18nuik000d2t92hafy1jox",
        "busId": "clq0lvc340000ua4i0i3fnl81",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-11T18:20:02.492Z",
        "updatedAt": "2023-12-13T02:39:40.951Z",
        "bus": {
            "id": "clq0lvc340000ua4i0i3fnl81",
            "destination": "Davao-Kidapawan",
            "ticketLimit": 30,
            "createdAt": "2023-12-11T07:42:00.688Z",
            "updatedAt": "2023-12-11T07:42:00.688Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq36hn8n0003nuc7y6lxtll1",
        "busId": "clq0md4rm0001ua4izwurnumv",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-13T02:54:46.247Z",
        "updatedAt": "2023-12-13T02:54:46.247Z",
        "bus": {
            "id": "clq0md4rm0001ua4izwurnumv",
            "destination": "Davao-Mati",
            "ticketLimit": 25,
            "createdAt": "2023-12-11T07:55:51.011Z",
            "updatedAt": "2023-12-11T07:55:51.011Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq3abvxy0001zna7naxwwxjt",
        "busId": "clq0mdtk10002ua4i8ac31ikl",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-13T04:42:16.054Z",
        "updatedAt": "2023-12-13T04:42:16.054Z",
        "bus": {
            "id": "clq0mdtk10002ua4i8ac31ikl",
            "destination": "Mati-Davao",
            "ticketLimit": 25,
            "createdAt": "2023-12-11T07:56:23.138Z",
            "updatedAt": "2023-12-11T07:56:23.138Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    },
    {
        "id": "clq3ac30i0003zna7p5nhs2iv",
        "busId": "clq0md4rm0001ua4izwurnumv",
        "userId": "clpunvzrb000024tdn0my1k5j",
        "createdAt": "2023-12-13T04:42:25.219Z",
        "updatedAt": "2023-12-13T04:42:25.219Z",
        "bus": {
            "id": "clq0md4rm0001ua4izwurnumv",
            "destination": "Davao-Mati",
            "ticketLimit": 25,
            "createdAt": "2023-12-11T07:55:51.011Z",
            "updatedAt": "2023-12-11T07:55:51.011Z"
        },
        "ticket": {
            "id": "clpunvzrb000024tdn0my1k5j",
            "userType": "passenger",
            "name": "test",
            "email": "test@gmail.com",
            "pass": "yes123",
            "createdAt": "2023-12-07T03:51:53.542Z",
            "updatedAt": "2023-12-07T05:40:09.004Z"
        }
    }
]

  beforeEach(() => {
    render(<DumbPassenger tickets={tickets} />);
  });

  it('renders the table header correctly', () => {
    const ticketIdHeader = screen.getByText('Ticket ID');
    expect(ticketIdHeader).toBeInTheDocument();

    const destinationHeader = screen.getByText('Bus Destination');
    expect(destinationHeader).toBeInTheDocument();

    const dateTimeHeader = screen.getByText('Date & Time');
    expect(dateTimeHeader).toBeInTheDocument();
  });

  it('renders the correct number of ticket rows', () => {
    const ticketRows = screen.getAllByRole('row');
    // Subtract 1 to exclude the table header row
    expect(ticketRows.length - 1).toBe(tickets.length);
  });

  it('displays the ticket details correctly', () => {
    const ticketIdCell = screen.getByText('clq3abvxy0001zna7naxwwxjt');
    expect(ticketIdCell).toBeInTheDocument();

    const destinationCell = screen.getByText('Mati-Davao');
    expect(destinationCell).toBeInTheDocument();

    const dateTimeCell = screen.getByText('12/11/2023');
    expect(dateTimeCell).toBeInTheDocument();
  });

  it('displays a message when no tickets are available', () => {
    render(<DumbPassenger tickets={[]} />);
    const messageElement = screen.getByText('No tickets found.');
    expect(messageElement).toBeInTheDocument();
  });
});