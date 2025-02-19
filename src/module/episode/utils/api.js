import api from "../../../library/api";

const BASE_URL = "/episode";

const list = async () => {
  try {
    const response = await api.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    throw error;
  }
};

const read = async (id) => {
  try {
    const response = await api.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching episode by id:", error);
    throw error;
  }
};

export { list, read };
