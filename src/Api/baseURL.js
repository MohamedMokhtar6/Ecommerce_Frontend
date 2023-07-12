import axios from "axios";

const baseUrl = axios.create({ baseURL: "https://localhost:7152" });

export default baseUrl;
