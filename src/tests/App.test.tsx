import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from '../app';


const mockFetch = jest.spyOn(global, 'fetch');

test('displays energy data correctly', async () => {
    mockFetch.mockResolvedValueOnce(
        new Response(JSON.stringify({
            data: {
                from: "2019-08-12T12:30Z",
                to: "2019-08-12T13:00Z",
                generationmix: [
                    { fuel: "biomass", perc: 4.8 },
                    { fuel: "coal", perc: 2.5 },
                    { fuel: "imports", perc: 8.7 },
                    { fuel: "gas", perc: 46.5 },
                    { fuel: "nuclear", perc: 16.1 },
                    { fuel: "other", perc: 0.3 },
                    { fuel: "hydro", perc: 0.9 },
                    { fuel: "solar", perc: 14.6 },
                    { fuel: "wind", perc: 5.6 }
                ]
            },
        }), {
            status: 200,
            headers: {
                'Content-type': 'application/json'
            }
        })
    );
    const queryClient = new QueryClient();
    render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );

    await waitFor(() => screen.getByText('Energy Mix from 2019-08-12T12:30Z to 2019-08-12T13:00Z'));

    expect(screen.getByText('biomass: 4.8%')).toBeInTheDocument();
    expect(screen.getByText('coal: 2.5%')).toBeInTheDocument();
    expect(screen.getByText('imports: 8.7%')).toBeInTheDocument();
    expect(screen.getByText('gas: 46.5%')).toBeInTheDocument();
    expect(screen.getByText('nuclear: 16.1%')).toBeInTheDocument();
    expect(screen.getByText('other: 0.3%')).toBeInTheDocument();
    expect(screen.getByText('hydro: 0.9%')).toBeInTheDocument();
    expect(screen.getByText('solar: 14.6%')).toBeInTheDocument();
    expect(screen.getByText('wind: 5.6%')).toBeInTheDocument();
});