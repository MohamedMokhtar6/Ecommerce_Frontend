import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://online-store.somee.com",
});

export default baseUrl;
