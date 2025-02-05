import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../components/CarCard/types";
import { getCar } from "../utils/api/get-car.ts";

const useCar = () => {
  const { stockNumber } = useParams<{ stockNumber: string }>();
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    const response = await getCar(stockNumber || "");
    setCar(response.car || {});
  };

  return { car };
};

export default useCar;
