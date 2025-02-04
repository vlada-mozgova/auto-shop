import { Manufacturer } from "../../pages/Homepage/types.ts";
import { BASE_URL } from "../constants.ts";

export const getManufacturers = async (): Promise<{
  manufacturers: Manufacturer[];
}> => {
  const url = `${BASE_URL}/api/manufacturers`;

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
    throw new Error(`Failed to get manufacturers: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
};
