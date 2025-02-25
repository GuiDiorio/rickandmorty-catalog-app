import React from "react";

import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Button from "./Button.default";

const ButtonPagination = ({ onRefresh, pageData }) => {
  const { currentPage, pages, prev, next } = pageData;

  const handlePreviousPage = () => {
    if (prev) {
      onRefresh(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (next) {
      onRefresh(currentPage + 1);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      sx={{ py: 2, backgroundColor: "neutrals.white" }}
    >
      <Button variant="text" onClick={handlePreviousPage} disabled={!prev}>
        Prev
      </Button>
      <Typography variant="body1">
        Page {currentPage} of {pages || 1}
      </Typography>
      <Button variant="text" onClick={handleNextPage} disabled={!next}>
        Next
      </Button>
    </Stack>
  );
};

ButtonPagination.defaultProps = {
  onRefresh: undefined,
  pageData: {},
};
ButtonPagination.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  pageData: PropTypes.shape({
    page: PropTypes.number.isRequired,
    info: PropTypes.object.isRequired,
  }).isRequired,
};

export default ButtonPagination;
