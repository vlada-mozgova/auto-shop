import { Car } from "../../components/CarCard/types";
import { BASE_URL } from "../constants.ts";

export const getCars = async ({
  page = 1,
  color,
  manufacturer,
}: {
  page: number;
  color?: string;
  manufacturer?: string;
}): Promise<{
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
}> => {
  const params = new URLSearchParams();
  params.append("sort", "asc");
  params.append("page", page.toString());
  if (color) params.append("color", color);
  if (manufacturer) params.append("manufacturer", manufacturer);
  const url = `${BASE_URL}/api/cars?${params.toString()}`;

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
    throw new Error(`Failed to get cars: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
};
