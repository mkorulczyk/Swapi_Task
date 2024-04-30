import { axiosInstance } from '../services/apiConfig';
import { IPeople } from '../types/people';

export const fetchPeople = async (id: number): Promise<IPeople> => {
    return await axiosInstance().get(`https://swapi.dev/api/people/${id}`).then(response => {
        return response.data;
    });
};