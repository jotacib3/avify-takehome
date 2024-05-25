import { useQuery } from 'react-query';
import { IEnergy } from "../types/IEnergy";

/**
 * useEnergy is a custom hook that fetches the UK energy mix data from the API.
 * It uses the useQuery hook from react-query for data fetching.
 */
const useEnergy = () => {
    return useQuery<IEnergy, Error>('generation', async () => {
        const response = await fetch('https://api.carbonintensity.org.uk/generation');
        const data = await response.json();
        return data.data;
    });
};

export default useEnergy;