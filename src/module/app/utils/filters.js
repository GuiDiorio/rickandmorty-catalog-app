const FILTERS = {
  CHARACTER: {
    fields: ["species", "gender", "status"],
    species: [
      "Alien",
      "Animal",
      "Cronenberg",
      "Disease",
      "Human",
      "Humanoid",
      "Mythological Creature",
      "Poopybutthole",
      "Robot",
      "Vampire",
      "unknown",
    ],
    gender: ["Female", "Male", "Genderless", "unknown"],
    status: ["Alive", "Dead", "unknown"],
  },

  EPISODE: {
    fields: ["season"],
    season: ["S01", "S02", "S03", "S04", "S05"],
  },

  LOCATION: {
    fields: ["type", "dimension"],
    type: [
      "Planet",
      "Cluster",
      "Space station",
      "Microverse",
      "TV",
      "Resort",
      "Fantasy town",
      "Dream",
      "Dimension",
      "Menagerie",
      "Game",
      "Customs",
      "Daycare",
      "Dwarf planet (Celestial Dwarf)",
      "Miniverse",
      "Teenyverse",
      "Box",
      "Spacecraft",
      "Arcade",
      "Spa",
    ],
    dimension: [
      "Dimension C-137",
      "Replacement Dimension",
      "Post-Apocalyptic Dimension",
      "Cronenberg Dimension",
      "Fantasy Dimension",
      "Dimension 5-126",
      "Testicle Monster Dimension",
      "Cromulon Dimension",
      "Unknown",
    ],
  },
};

export { FILTERS };
