import React from "react";
import PropTypes from "prop-types";

import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";

const CardDefault = ({ media, title, description }) => {
  return (
    <MuiCard>
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
    </MuiCard>
  );
};

CardDefault.defaultProps = {
  media: "",
  title: "",
  description: "",
};

CardDefault.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardDefault;
