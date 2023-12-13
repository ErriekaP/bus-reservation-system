import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DumbAdmin from './DumbAdmin';
import { vi } from 'vitest';

describe('DumbAdmin', () => {
  const destinations = [
    {
        "id": "clpxgecyi00004iycmgjgis1l",
        "destination": "Davao-Tagum",
        "ticketLimit": 10,
        "createdAt": "2023-12-09T02:45:32.059Z",
        "updatedAt": "2023-12-11T18:04:14.054Z",
        "ticket": [
            {
                "id": "clpxlaho5000b2fxafx0yp0s5"
            },
            {
                "id": "clpxlto2e0001ddrwyq1531u6"
            },
            {
                "id": "clq0emzt50003136aobi99s4t"
            },
            {
                "id": "clq0guopk0007136ae7j1dd31"
            },
            {
                "id": "clq0h3gx3000f136a061rscpq"
            },
            {
                "id": "clq0h5mmw000h136atth0vok5"
            },
            {
                "id": "clq0k4yuz000314nke6m8756r"
            },
            {
                "id": "clq0k5o2z000514nke7rdruoz"
            },
            {
                "id": "clq0ntvbg0001cwpnm9a1p4ys"
            },
            {
                "id": "clq0zhoky0007a9jid8zvofzo"
            }
        ],
        "remainingTickets": 0
    },
    {
        "id": "clpxges6i00014iycnm6v0w1z",
        "destination": "Davao-Digos",
        "ticketLimit": 25,
        "createdAt": "2023-12-09T02:45:51.786Z",
        "updatedAt": "2023-12-09T02:45:37.357Z",
        "ticket": [
            {
                "id": "clpxj9p4700034iyc19yyds5o"
            },
            {
                "id": "clpxl8k9q00092fxa4ie03yb4"
            },
            {
                "id": "clq0gye49000b136ae72yuct5"
            },
            {
                "id": "clq0gz1ky000d136a0j4y1eo0"
            },
            {
                "id": "clq0h5upy000j136arsrilf9d"
            },
            {
                "id": "clq0k4b0b000114nk9d991hjj"
            },
            {
                "id": "clq18c3wu00032t92bxqdvuzm"
            },
            {
                "id": "clq18d4fz00052t92twymrot2"
            },
            {
                "id": "clq18dw2v00072t921gcdlt46"
            },
            {
                "id": "clq35ytu20001b4zfv6iuxqnt"
            }
        ],
        "remainingTickets": 15
    },
    {
        "id": "clq0lvc340000ua4i0i3fnl81",
        "destination": "Davao-Kidapawan",
        "ticketLimit": 30,
        "createdAt": "2023-12-11T07:42:00.688Z",
        "updatedAt": "2023-12-11T07:42:00.688Z",
        "ticket": [
            {
                "id": "clq0wbtcq0003a9ji3ljatdhx"
            },
            {
                "id": "clq18gkrr00092t92vofz0wxr"
            },
            {
                "id": "clq18h736000b2t92ne05alci"
            },
            {
                "id": "clq18nuik000d2t92hafy1jox"
            }
        ],
        "remainingTickets": 26
    },
    {
        "id": "clq0md4rm0001ua4izwurnumv",
        "destination": "Davao-Mati",
        "ticketLimit": 25,
        "createdAt": "2023-12-11T07:55:51.011Z",
        "updatedAt": "2023-12-11T07:55:51.011Z",
        "ticket": [
            {
                "id": "clq0zhgvd0005a9jixnhigytn"
            },
            {
                "id": "clq35zcqc0003b4zf2or22iqt"
            },
            {
                "id": "clq367dqe0001nuc7bmknsbns"
            },
            {
                "id": "clq36hn8n0003nuc7y6lxtll1"
            }
        ],
        "remainingTickets": 21
    },
    {
        "id": "clq0mdtk10002ua4i8ac31ikl",
        "destination": "Mati-Davao",
        "ticketLimit": 25,
        "createdAt": "2023-12-11T07:56:23.138Z",
        "updatedAt": "2023-12-11T07:56:23.138Z",
        "ticket": [
            {
                "id": "clq0waxzf0001a9ji0uez1zxa"
            }
        ],
        "remainingTickets": 24
    },
    {
        "id": "clq0nwo040004cwpntoq8lqzm",
        "destination": "test",
        "ticketLimit": 20,
        "createdAt": "2023-12-11T08:39:02.020Z",
        "updatedAt": "2023-12-11T08:39:02.020Z",
        "ticket": [],
        "remainingTickets": 20
    }
]

  const handleRedirectMock = vi.fn();
  const handleRedirectToViewMock = vi.fn();
  const handleRedirectToUpdateMock = vi.fn();

  it('renders the component with the correct title', () => {
    render(
      <DumbAdmin
        destinations={destinations}
        handleRedirect={handleRedirectMock}
        handleRedirectToView={handleRedirectToViewMock}
        handleRedirectToUpdate={handleRedirectToUpdateMock}
      />
    );
    const titleElement = screen.getByText('Bus');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the "Add Bus" button', () => {
    const { getByRole } = render(
      <DumbAdmin
        destinations={destinations}
        handleRedirect={handleRedirectMock}
        handleRedirectToView={handleRedirectToViewMock}
        handleRedirectToUpdate={handleRedirectToUpdateMock}
      />
    );
    const addButton = getByRole('button', { name: 'Add Bus' });
    expect(addButton).toBeInTheDocument();
  });

  it('calls the handleRedirect function when "Add Bus" button is clicked', () => {
    const { getByRole } = render(
      <DumbAdmin
        destinations={destinations}
        handleRedirect={handleRedirectMock}
        handleRedirectToView={handleRedirectToViewMock}
        handleRedirectToUpdate={handleRedirectToUpdateMock}
      />
    );
    const addButton = getByRole('button', { name: 'Add Bus' });
    fireEvent.click(addButton);
    expect(handleRedirectMock).toHaveBeenCalled();
  });

  it('renders the list of destinations', () => {
    const { getAllByRole } = render(
      <DumbAdmin
        destinations={destinations}
        handleRedirect={handleRedirectMock}
        handleRedirectToView={handleRedirectToViewMock}
        handleRedirectToUpdate={handleRedirectToUpdateMock}
      />
    );
    const destinationElements = getAllByRole('listitem');
    expect(destinationElements.length).toBe(destinations.length);
  });

  it('calls the handleRedirectToView function when a destination is clicked', () => {
    const { getByRole } = render(
      <DumbAdmin
        destinations={destinations}
        handleRedirect={handleRedirectMock}
        handleRedirectToView={handleRedirectToViewMock}
        handleRedirectToUpdate={handleRedirectToUpdateMock}
      />
    );
    const destinationElement = getByRole('clpxgecyi00004iycmgjgis1l');
    fireEvent.click(destinationElement);
    expect(handleRedirectToViewMock).toHaveBeenCalled();
  });

  it('displays a message when no destinations are available', () => {
    render(<DumbAdmin destinations={[]} />);
    const messageElement = screen.getByText('No Bus found.');
    expect(messageElement).toBeInTheDocument();
  });
});