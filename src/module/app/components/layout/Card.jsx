import * as React from "react";
import PropTypes from "prop-types";

import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
} from "@mui/material";

const Card = ({ media, title, description }) => {
  return (
    <MuiCard>
      <CardActionArea>
        <Stack direction="row">
          {media && (
            <CardMedia
              component="img"
              height="200"
              image={media}
              alt="green iguana"
              sx={{ maxWidth: 225 }}
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

Card.defaultProps = {
  media: "",
  title: "",
  description: "",
};

Card.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
