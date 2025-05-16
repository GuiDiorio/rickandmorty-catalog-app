import React from "react";
import PropTypes from "prop-types";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({
  count,
  page,
  defaultPage,
  onChange,
  hideNextButton,
  hidePrevButton,
  ...props
}) => (
  <MuiPagination
    count={count}
    page={page}
    defaultPage={defaultPage}
    onChange={onChange}
    hideNextButton={hideNextButton}
    hidePrevButton={hidePrevButton}
    {...props}
  />
);

Pagination.defaultProps = {
  count: 0,
  page: 1,
  defaultPage: 1,
  onChange: () => {},
  hideNextButton: false,
  hidePrevButton: false,
};

Pagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  defaultPage: PropTypes.number,
  onChange: PropTypes.func,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
};

export default Pagination;
