import React from "react";

import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, ...props }) => {
  return <MuiButton {...props}>{children}</MuiButton>;
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
};

Button.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object,
};

export default Button;
