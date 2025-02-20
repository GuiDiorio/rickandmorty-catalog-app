import React from "react";
import PropTypes from "prop-types";

import CardDefault from "./Card.default";
import CardLink from "./Card.Link";

const Card = ({ variant, ...props }) => {
  const selectVariant = () => {
    switch (variant) {
      case "link":
        return CardLink;
      default:
        return CardDefault;
    }
  };

  const Component = selectVariant();

  return <Component {...props} />;
};

Card.defaultProps = {
  variant: "default",
};

Card.propTypes = {
  variant: PropTypes.string,
};

export default Card;
