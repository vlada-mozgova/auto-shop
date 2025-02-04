import { Meta } from "./types";

export const getCarsOnPage = (metaData: Meta, page: number): number => {
  const { totalCarsCount } = metaData;
  const carsPerPage = 10;
  const lastPage = Math.ceil(totalCarsCount / carsPerPage);

  if (page > lastPage) return 0;

  return page < lastPage
    ? carsPerPage
    : totalCarsCount % carsPerPage || carsPerPage;
};
