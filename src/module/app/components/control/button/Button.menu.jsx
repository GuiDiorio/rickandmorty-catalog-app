import React, { useState } from "react";

import { Menu, MenuItem } from "@mui/material";
import { Icon } from "../../display";
import { Button } from "./index";

const ButtonMenu = ({ children, options, onClickOption, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        {...props}
        onClick={handleOpenMenu}
        endIcon={<Icon name="arrowDown" />}
      >
        {children}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {options.map((option, index) => (
          <MenuItem
            key={`${option}-${index}`}
            onClick={() => onClickOption(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

ButtonMenu.propTypes = {
  children: PropTypes.node,
  options: PropTypes.array.isRequired,
  onClickOption: PropTypes.func.isRequired,
};

export default ButtonMenu;
