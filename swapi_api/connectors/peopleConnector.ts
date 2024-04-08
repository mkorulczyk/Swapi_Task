import { axiosInstance } from '../services/apiConfig';
import { IPeople } from '../types/people';


export const fetchPeople = async (id: number): Promise<IPeople> => {
    return axiosInstance().get(`https://swapi.dev/api/people/${id}`);
}




