import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function getFromServer(path: string) {
  return axiosInstance.get(path);
}

export function postOnServer(path: string, body: any) {
  return axiosInstance.post(path, body);
}
