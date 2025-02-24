import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import {
  CardActionArea,
  Card as MuiCard,
  Stack
} from "@mui/material";
import Card from ".";



const CardLink = ({ media, title, description, url }) => (
  
    <CardActionArea component={Link} to={url}>
      <Stack direction="row">
        <Card sx={{ width: "100%" }} variant="default" media={media} title={title} description={description} />
      </Stack>
    </CardActionArea>
  
);

CardLink.defaultProps = {
  media: "",
  title: "",
  description: "",
  url: "/",
};

CardLink.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default CardLink;
