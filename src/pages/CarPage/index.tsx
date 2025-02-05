import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import useCar from "../../hooks/useCar.tsx";
import { Button } from "@mui/material";
import useFavoriteCars from "../../hooks/useFavoriteCars.tsx";

const CarPage = () => {
  const { car } = useCar();
  const { favorites, addFavorite, removeFavorite } = useFavoriteCars();

  if (!car?.stockNumber) {
    return <div>Loading...</div>;
  }

  const { color, fuelType, manufacturerName, mileage, modelName, stockNumber } =
    car;

  return (
    <section className={styles.carPage}>
      <div className={styles.imagePlaceholder} />
      <div className={classNames("container", styles.carPageWrapper)}>
        <div className={styles.carData}>
          <h1>
            {manufacturerName} {modelName}
          </h1>
          <span>
            Stock # {stockNumber} - {mileage.number} {mileage.unit} - {fuelType}{" "}
            - {color}
          </span>
          <p>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather
            conditions.
          </p>
        </div>
        <div className={styles.additionalInfo}>
          <p>
            {favorites.includes(stockNumber)
              ? "If you don't like this car anymore, click the button and remove it from your collection of favourite items."
              : "If you like this car, click the button and save it in your collection of favourite items."}
          </p>
          <Button
            variant="contained"
            className="button"
            onClick={() =>
              favorites.includes(stockNumber)
                ? removeFavorite(stockNumber)
                : addFavorite(stockNumber)
            }
          >
            {favorites.includes(stockNumber) ? "Remove" : "Save"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarPage;
