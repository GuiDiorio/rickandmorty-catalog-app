import React, { useState } from "react";
import PropTypes from "prop-types";
import { Menu, MenuItem } from "@mui/material";
import { Icon } from "../../display";
import { Button } from "./index";

const ButtonMenu = ({ label, options, onClickOption, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOptionSelect = (value) => {
    setSelected(value);
    onClickOption(value);
    handleCloseMenu();
  };

  return (
    <>
      <Button
        {...props}
        onClick={handleOpenMenu}
        endIcon={<Icon name="arrowDown" />}
      >
        {label}: {selected || "All"}
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        {options.map((option, index) => (
          <MenuItem
            key={`${option}-${index}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

ButtonMenu.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onClickOption: PropTypes.func.isRequired,
};

export default ButtonMenu;
