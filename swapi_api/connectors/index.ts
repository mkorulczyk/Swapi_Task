import axios, { AxiosResponse} from 'axios';

// Interfejs dla danych o użytkowniku
export interface User {
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

// Klient API
class APIClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async getUser(userId: number): Promise<User> {
        try {
            const response: AxiosResponse<User> = await axios.get<User>(`${this.baseURL}/${userId}`);
            return response.data;
        } catch (error) {
            console.error('An error occurred while fetching user data:', error);
            return {} as User;
        }
    }
}

const apiClient = new APIClient('https://swapi.dev/api/people/');

apiClient.getUser(1)
    .then(user => console.log('User:', user))
    .catch(error => console.error('Failed to get user:', error));


