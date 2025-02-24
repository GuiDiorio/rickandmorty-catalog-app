
/**
 * Get all unique seasons from an array of episodes
 * @param {Array<Object>} episodes - Array of episode objects
 * @returns {Array<string>} Array of unique seasons
 */
export const getAllSeasons = (episodes) => {
  return [...new Set(episodes?.map((e) => e.episode.split("E")[0]))];
};

/**
 * Filter episodes based on selected seasons
 * @param {Array<Object>} episodes - Array of episode objects
 * @param {Array<string>} seasons - Array of selected seasons
 * @returns {Array<Object>} Array of filtered episodes
 */
export const filterEpisodes = (episodes, seasons) => {
  return episodes?.filter((e) => seasons.length === 0 || seasons.includes(e.episode.split("E")[0]));
};
