import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
} from "@mui/material";

const CardLink = ({ media, title, description, url }) => {
  return (
    <MuiCard>
      <CardActionArea component={Link} to={url}>
        <Stack direction="row">
          {media && (
            <CardMedia
              component="img"
              height="120"
              image={media}
              sx={{ maxWidth: "120px" }}
            />
          )}

          <CardContent>
            <Typography variant="h5" fontWeight={700} component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </CardContent>
        </Stack>
      </CardActionArea>
    </MuiCard>
  );
};

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
