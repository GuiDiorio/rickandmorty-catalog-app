/**
 * Extracts all unique species from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique species
 */
export const getAllSpecies = (characters) => {
  const species = characters?.map((character) => character?.species);

  return [...new Set(species)];
};

/**
 * Extracts all unique genders from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique genders
 */
export const getAllGenders = (characters) => {
  const genders = characters?.map((character) => character?.gender);

  return [...new Set(genders)];
};

/**
 * Extracts all unique status values from an array of characters
 * @param {Object} params - The parameters object
 * @param {Array<Object>} params.characters - Array of character objects
 * @returns {Array<string>} Array of unique status values
 */
export const getAllStatus = (characters) => {
  const status = characters?.map((character) => character?.status);

  return [...new Set(status)];
};

/**
 * Filters characters based on species, genders, and status
 * @param {Array<Object>} characters - Array of character objects
 * @param {Array<string>} species - Array of species to filter by
 * @param {Array<string>} genders - Array of genders to filter by
 * @param {Array<string>} status - Array of statuses to filter by
 * @returns {Array<Object>} Array of filtered characters
 */
export const filterCharacters = (characters, species, genders, status) => {
  return characters?.filter((character) => {
    const matchesSpecies = species.length === 0 || species.includes(character.species);
    const matchesGender = genders.length === 0 || genders.includes(character.gender);
    const matchesStatus = status.length === 0 || status.includes(character.status);

    return matchesSpecies && matchesGender && matchesStatus;
  });
};
