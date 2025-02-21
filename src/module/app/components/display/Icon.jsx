import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const icons = {
  arrowDown: KeyboardArrowDownIcon,
};

const Icon = ({ name, ...props }) => {
  const Component = icons?.[name] || React.Fragment;
  return <Component {...props} />;
};

export default Icon;
