import { Skeleton } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";

const CarCardLoading = () => {
  return (
    <div className={styles.carsList}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={styles.card}>
          <Skeleton variant="rectangular" width={130} height={96} />
          <div className={styles.cardContent}>
            <Skeleton variant="rectangular" width={300} height={32} />
            <Skeleton variant="rectangular" width={300} height={20} />
            <Skeleton variant="rectangular" width={100} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCardLoading;
