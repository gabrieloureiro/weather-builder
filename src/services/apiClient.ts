import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
