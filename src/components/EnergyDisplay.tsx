import React from 'react';
import {IEnergy} from "../types/IEnergy";
import IGenerationMix from "../types/IGenerationMix";

interface EnergyDisplayProps {
    data: IEnergy;
}

/**
 * EnergyDisplay component is responsible for displaying the data.
 * It receives the data as a prop and renders it.
 */
const EnergyDisplay: React.FC<EnergyDisplayProps> = ({ data }) => (
    <div>
        <h3>Energy Mix from {data.from} to {data.to}</h3>
        {data.generationmix.map((item: IGenerationMix) => (
            <div key={item.fuel}>
                <p>{item.fuel}: {item.perc}%</p>
            </div>
        ))}
    </div>
);

export default EnergyDisplay;