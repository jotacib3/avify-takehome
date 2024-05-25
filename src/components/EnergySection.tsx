import React from 'react';
import useEnergy from "../hooks/useEnergy";
import EnergyDisplay from "./EnergyDisplay";

/**
 * EnergySection component uses the useEnergy hook and EnergyDisplay component.
 * It first fetches the data with useEnergy and then passes the data to EnergyDisplay.
 */
const EnergySection: React.FC = () => {
    const {data, isLoading} = useEnergy();

    return (
        <>
            <h1>UK Energy Mix</h1>
            {isLoading ? <>Loading...</> : <EnergyDisplay data={data!}/>}
        </>
    );
};

export default EnergySection