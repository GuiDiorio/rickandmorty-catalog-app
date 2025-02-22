/**
 * Extracts all unique species from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique species
 */
export const getAllSpecies = (characters) => {
  const species = characters.map((character) => character?.species);

  return [...new Set(species)];
};

/**
 * Extracts all unique genders from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique genders
 */
export const getAllGenders = (characters) => {
  const genders = characters.map((character) => character?.gender);

  return [...new Set(genders)];
};

/**
 * Extracts all unique status values from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique status values
 */
export const getAllStatus = (characters) => {
  const status = characters.map((character) => character?.status);

  return [...new Set(status)];
};
