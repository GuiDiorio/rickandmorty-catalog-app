
/**
 * Get all unique types from an array of locations
 * @param {Array<Object>} locations - Array of location objects
 * @returns {Array<string>} Array of unique types
 */
export const getAllTypes = (locations) => {
  return [...new Set(locations?.map((location) => location.type))];
};

/**
 * Get all unique dimensions from an array of locations
 * @param {Array<Object>} locations - Array of location objects
 * @returns {Array<string>} Array of unique dimensions
 */
export const getAllDimensions = (locations) => {
  return [...new Set(locations?.map((location) => location.dimension))];
};

/**
 * Filters locations based on types and dimensions
 * @param {Array<Object>} locations - Array of location objects
 * @param {Array<string>} types - Array of types to filter by
 * @param {Array<string>} dimensions - Array of dimensions to filter by
 * @returns {Array<Object>} Array of filtered locations
 */
export const filterLocations = (locations, types, dimensions) => {
  return locations?.filter((location) => {
    const matchesType = types.length === 0 || types.includes(location.type);
    const matchesDimension = dimensions.length === 0 || dimensions.includes(location.dimension);

    return matchesType && matchesDimension;
  });
};