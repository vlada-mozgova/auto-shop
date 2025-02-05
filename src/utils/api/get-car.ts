import { Car } from "../../components/CarCard/types.ts";
import { BASE_URL } from "../constants.ts";

export const getCar = async (
  stockNumber: string
): Promise<{
  car: Car;
}> => {
  const url = `${BASE_URL}/api/cars/${stockNumber}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = response.status
      ? response.statusText
      : errorData.message;
    throw new Error(`Failed to get car: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
};
