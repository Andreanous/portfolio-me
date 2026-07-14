import axios from "axios";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const rawUrl = import.meta.env.VITE_API_URL || "/api";
export const API_URL = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;

