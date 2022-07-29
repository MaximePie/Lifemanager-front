import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export function getFromServer(path: string) {
  return axiosInstance.get(path);
}

/**
 * Que fait la fonction ?
 * @param path {string} - Le chemin d'accès à notre BD
 * @param body
 * @return La promesse
 */
export function postOnServer(path: string, body: any) {
  return axiosInstance.post(path, body);
}
