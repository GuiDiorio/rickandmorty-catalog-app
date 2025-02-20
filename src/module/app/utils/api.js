import api from "../../../library/api";

/**
 * Fetches a list of items from the specified base URL
 * @param {string} baseURL - The base URL endpoint to fetch data from
 * @returns {Promise<any>} The response data from the API
 * @throws {Error} If the API request fails
 */
const list = async (baseURL) => {
  try {
    const response = await api.get(baseURL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/**
 * Fetches a single item by ID from the specified base URL
 * @param {string} baseURL - The base URL endpoint to fetch data from
 * @param {string|number} id - The ID of the item to fetch
 * @returns {Promise<any>} The response data from the API
 * @throws {Error} If the API request fails
 */
const read = async (baseURL, id) => {
  try {
    const response = await api.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { list, read };
