import React, { useState } from "react";

import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";
import { Icon } from "../../display";
import { Button } from "./index";

const ButtonMenu = ({ children, options, selectedOptions, setSelectedOptions, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionSelect = (value) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
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
            onClick={() => handleOptionSelect(option)}
            sx={{
              bgcolor: selectedOptions.includes(option)
                ? "action.selected"
                : "inherit",
            }}
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
