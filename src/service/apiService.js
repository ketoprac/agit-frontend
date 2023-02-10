import axios from "axios";
import { getToken } from "./getToken";

const token = getToken();
export const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
});