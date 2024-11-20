import { LoginCredentials, RegisterCredentials } from '@/models/auth-models';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});



export const login = async (credentials: LoginCredentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
  const response = await api.post('/users/register', credentials);
  return response.data;
};