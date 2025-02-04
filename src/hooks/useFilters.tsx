import { useEffect, useState } from "react";
import { Manufacturer } from "../pages/Homepage/types.ts";
import { getColors } from "../utils/api/get-colors.ts";
import { getManufacturers } from "../utils/api/get-manufacturers.ts";

const useFilters = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

  useEffect(() => {
    fetchFilters();
  }, []);

  const fetchFilters = async () => {
    const [colorsResult, manufacturersResult] = await Promise.allSettled([
      getColors(),
      getManufacturers(),
    ]);

    if (colorsResult.status === "fulfilled") {
      setColors(colorsResult.value.colors);
    } else {
      setColors([]);
    }

    if (manufacturersResult.status === "fulfilled") {
      setManufacturers(manufacturersResult.value.manufacturers);
    } else {
      setManufacturers([]);
    }
  };

  return {
    colors,
    manufacturers,
  };
};

export default useFilters;
