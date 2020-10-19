import jwtDecode from 'jwt-decode';

import http from './httpService';
import { apiUrl } from '../config.json';
const tokenKey = 'token';

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export async function getUserById(user_id) {
    const { data } = await http.get(`${apiUrl}/users/${user_id}`);
    return data;
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(tokenKey, data.token);
}

export default {
  login,
  getCurrentUser,
  logout,
  getJwt,
  getUserById,
};
