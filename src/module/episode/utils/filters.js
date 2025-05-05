/**
 * Get all unique seasons from an array of episodes
 * @param {Array<Object>} episodes - Array of episode objects
 * @returns {Array<string>} Array of unique seasons
 */
export const getAllSeasons = (episodes) => {
  return [...new Set(episodes?.map((e) => e.episode.split("E")[0]))];
};
