import { axiosInstance } from '../services/apiConfig';

export interface IPeople {
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    skin_color: string;
    created: Date;
    edited: Date;
    url: string;
}

export const fetchPeople = async(id: number): Promise<IPeople> =>{ 
    return axiosInstance().get(`https://swapi.dev/api/people/${id}`);
}




