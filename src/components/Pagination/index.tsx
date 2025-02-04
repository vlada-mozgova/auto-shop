import { Typography } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import { PaginationProps } from "./types";

const Pagination = ({
  handlePageChange,
  filters,
  metaData,
}: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button onClick={() => handlePageChange(1)}>First</button>
      <button
        onClick={() => handlePageChange(filters.page - 1)}
        disabled={filters.page === 1}
      >
        Previous
      </button>
      <Typography>
        Page {filters.page} of {metaData.totalPageCount}
      </Typography>
      <button
        onClick={() => handlePageChange(filters.page + 1)}
        disabled={filters.page === metaData.totalPageCount}
      >
        Next
      </button>
      <button onClick={() => handlePageChange(metaData.totalPageCount)}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
