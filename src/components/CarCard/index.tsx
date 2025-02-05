import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Car } from "./types";
import styles from "./styles.module.scss";

const CarCard = ({
  color,
  fuelType,
  manufacturerName,
  mileage,
  modelName,
  pictureUrl,
  stockNumber,
}: Car) => {
  return (
    <Card className={styles.card}>
      {pictureUrl ? (
        <img src={pictureUrl} alt={modelName} className={styles.image} />
      ) : (
        <div className={styles.imagePlaceholder} />
      )}
      <CardContent className={styles.cardContent}>
        <Typography variant="h6">
          {manufacturerName} {modelName}
        </Typography>
        <Typography>
          Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType} -{" "}
          {color}
        </Typography>
        <a href={`/car/${stockNumber}`}>View details</a>
      </CardContent>
    </Card>
  );
};

export default CarCard;
