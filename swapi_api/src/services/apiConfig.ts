import axios, { AxiosResponse, AxiosInstance } from 'axios';

const responseSuccessHandler = (response: AxiosResponse) => response;
const responseErrorHandler= (error: any) => console.error('An error occurred while fetching data:', error);

export const getAxiosInstance = (config?: any): AxiosInstance => {
  config = config || {};
  const instance = axios.create({ ...config });
  instance.interceptors.response.use(responseSuccessHandler, error => responseErrorHandler(error));

  return instance;
};

export const axiosInstance = getAxiosInstance;