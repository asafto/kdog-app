// import jwtDecode from "jwt-decode";

import http from './httpService';
import { apiUrl } from '../config.json';

export async function login(email, password) {
  await http.post(`${apiUrl}/auth`, { email, password });
  
}

export default {
  login,
  // getCurrentUser,
  // logout,
  // getJwt,
};
