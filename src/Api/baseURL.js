import axios from "axios";

const baseUrl = axios.create({
  // baseURL: "http://online-store.somee.com",
  baseURL: "https://localhost:7152",
});

export default baseUrl;
