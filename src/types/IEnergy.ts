import IGenerationMix from "./IGenerationMix";

/**
 * EnergyMix represents the energy generation data for a specific time period.
 * @property {string} from - The start time of the time period.
 * @property {string} to - The end time of the time period.
 * @property {IGenerationMix[]} generation - The array of energy generation data for different types of fuels.
 */
export interface IEnergy {
    from: string;
    to: string;
    generationmix: IGenerationMix[];
}