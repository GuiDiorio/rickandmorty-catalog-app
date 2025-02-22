import {
  Button,
  Grid2 as Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Card, Icon, PageLayout } from "../../app/components";

import { useFetch } from "../../app/hooks";
import { list } from "../../app/utils/api";

const List = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  console.log(selectedFilters);
  const {
    data: allCharacters,
    isLoading,
    notFound,
  } = useFetch(() => list("/character"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = (value) => {
    setSelectedFilters((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (notFound) return <Typography>Not found</Typography>;

  return (
    <PageLayout>
      <Stack spacing={4} direction="column">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h1">Characters</Typography>
          <Stack direction="row" spacing={2}>
            <Typography variant="body1">Filter By:</Typography>
            <Button
              onClick={handleClick}
              variant="outlined"
              endIcon={<Icon name="arrowDown" />}
            >
              Species
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => handleFilterSelect("Human")}
                sx={{
                  bgcolor: selectedFilters.includes("Human")
                    ? "action.selected"
                    : "inherit",
                }}
              >
                Human
              </MenuItem>
              <MenuItem
                onClick={() => handleFilterSelect("Alien")}
                sx={{
                  bgcolor: selectedFilters.includes("Alien")
                    ? "action.selected"
                    : "inherit",
                }}
              >
                Alien
              </MenuItem>
              <MenuItem
                onClick={() => handleFilterSelect("Robot")}
                sx={{
                  bgcolor: selectedFilters.includes("Robot")
                    ? "action.selected"
                    : "inherit",
                }}
              >
                Robot
              </MenuItem>
              <MenuItem
                onClick={() => handleFilterSelect("Animal")}
                sx={{
                  bgcolor: selectedFilters.includes("Animal")
                    ? "action.selected"
                    : "inherit",
                }}
              >
                Animal
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Grid
          container
          columnSpacing={2}
          rowSpacing={5}
          justifyContent="space-between"
        >
          {allCharacters.map((character) => (
            <Grid size={6} key={character.id}>
              <Card
                variant="link"
                url={`/characters/${character.id}`}
                media={character.image}
                title={character.name}
                description={character.species}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </PageLayout>
  );
};

List.defaultProps = {};
List.propTypes = {};

export default List;
