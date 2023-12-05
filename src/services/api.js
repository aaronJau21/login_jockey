import axios from "axios";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API,
  headers: {
    Accept: "application/json",
    "x-Requested-With": "XMLHttpRequest",
  },
});
