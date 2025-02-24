import { Grid2 as Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Card } from "../../app/components";

const CharacterList = ({ characters, size = 4 }) => (
  <Grid container direction="row" columnSpacing={2} rowSpacing={5}>
    {characters.map((character) => (
      <Grid size={size} key={character.id}>
        <Card
          variant="link"
          url={`/characters/${character.id}`}
          media={character.image}
          title={character.name}
          description={`${character.species} - ${character.status}`}
        />
      </Grid>
    ))}
  </Grid>
);

CharacterList.defaultProps = {
  characters: [],
  size: 4,
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  size: PropTypes.number,
};

export default CharacterList;
