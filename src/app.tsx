import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import EnergySection from "./components/EnergySection";

// Create a client
const queryClient = new QueryClient();

/**
 *  App component is the root component of the application.
 **/
const App: React.FC = () => {

    return (
           <QueryClientProvider client={queryClient}>
                    <EnergySection />
           </QueryClientProvider>
    );
};

export {
    App
}