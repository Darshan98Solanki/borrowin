import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // note: prefix must be VITE_
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
