import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL,
});

/**
 * @function get
 * @description Performs a GET request to the specified endpoint
 * @param {string} url - The endpoint URL
 * @returns {Promise<import('axios').AxiosResponse>} The axios response promise
 */
const get = (url) => api.get(url);

export default { get };
