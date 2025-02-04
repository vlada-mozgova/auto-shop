import { useEffect, useState } from "react";
import { Car } from "../components/CarCard/types";
import { Filters, Meta } from "../pages/Homepage/types";
import { getCars } from "../utils/api/get-cars.ts";

const useCars = () => {
  const initialFilters = {
    page: 1,
    color: "",
    manufacturer: "",
  };
  const [cars, setCars] = useState<Car[]>([]);
  const [metaData, setMetaData] = useState<Meta>({} as Meta);

  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState<Filters>(initialFilters);

  useEffect(() => {
    fetchCars(initialFilters);
  }, []);

  const fetchCars = async (filtersData: Filters) => {
    setLoading(true);
    setFilters(filtersData);
    const response = await getCars(filtersData);
    setCars(response.cars || []);
    setMetaData({
      totalPageCount: response.totalPageCount,
      totalCarsCount: response.totalCarsCount,
    });

    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    fetchCars({ ...filters, page });
  };
  const handleFilters = (filtersData: Filters) => {
    fetchCars(filtersData);
  };

  return {
    isLoading,
    filters,
    cars,
    metaData,
    handlePageChange,
    handleFilters,
  };
};

export default useCars;
