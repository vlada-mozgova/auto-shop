import React, { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Filters from "../../components/Filters/index.tsx";
import useCars from "../../hooks/useCars.tsx";
import CarCard from "../../components/CarCard/index.tsx";
import CarCardLoading from "../../components/CarCardLoading/index.tsx";
import Pagination from "../../components/Pagination/index.tsx";
import { getCarsOnPage } from "./helpers.ts";

const HomePage = () => {
  const {
    cars,
    filters,
    isLoading,
    metaData,
    handleFilters,
    handlePageChange,
  } = useCars();

  return (
    <section className={styles.homepage}>
      <div className={classNames("container", styles.homepageWrapper)}>
        <Filters handleFilters={handleFilters} filters={filters} />
        <div>
          <h1>Available cars</h1>
          <p>
            Showing {getCarsOnPage(metaData, filters.page)} of{" "}
            {metaData.totalCarsCount} results
          </p>
          {isLoading ? (
            <CarCardLoading />
          ) : (
            <>
              <div className={styles.carsList}>
                {cars.map((car) => (
                  <CarCard key={car.stockNumber} {...car} />
                ))}
              </div>
              <Pagination
                handlePageChange={handlePageChange}
                metaData={metaData}
                filters={filters}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
