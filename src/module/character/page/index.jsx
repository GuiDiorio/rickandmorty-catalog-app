import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Layout } from "../../app/components";
import Fetcher from "../../app/components/Fetcher";

import { list } from "../../app/utils/api";

const CharacterPage = () => {
  return (
    <Fetcher request={() => list("/character")}>
      {({ data: allCharacters }) => (
        <Layout>
          <Box height="100%">
            <Typography variant="h1">Characters</Typography>
            <Stack>
              {allCharacters.map((character) => (
                <Typography key={character.id}>{character.name}</Typography>
              ))}
            </Stack>
          </Box>
        </Layout>
      )}
    </Fetcher>
  );
};

CharacterPage.defaultProps = {};
CharacterPage.propTypes = {};

export default CharacterPage;
