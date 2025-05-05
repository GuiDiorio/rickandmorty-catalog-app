import api from "../../../library/api";

/**
 * Fetches a list of items from the specified base URL with pagination
 * @param {string} baseURL - The base URL endpoint to fetch data from
 * @param {number} page - The page number to fetch
 * @returns {Promise<any>} The response data from the API
 * @throws {Error} If the API request fails
 */
const list = async (query) => {
  try {
    const response = await api.get(query);
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

/**
 * Fetches multiple items by their IDs from the specified base URL
 * @param {string} baseURL - The base URL endpoint to fetch data from
 * @param {Array<string|number>} ids - Array of IDs to fetch
 * @returns {Promise<any>} The response data from the API
 * @throws {Error} If the API request fails or if ids is not an array
 */
const readList = async (baseURL, ids) => {
  try {
    const response = await api.get(`${baseURL}/${ids?.join()}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { list, read, readList };
