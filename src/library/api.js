import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL,
});

const get = (url) => api.get(url);

export default { get };
