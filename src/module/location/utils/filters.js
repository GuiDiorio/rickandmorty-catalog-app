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
