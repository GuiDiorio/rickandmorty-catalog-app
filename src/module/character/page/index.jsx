import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Layout } from "../../app/components";
import * as characterApi from "../utils/api";
import Fetcher from "../../app/components/Fetcher";

const CharacterPage = () => {
  return (
    <Fetcher request={() => characterApi.list()}>
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
