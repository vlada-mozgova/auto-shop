import { BASE_URL } from "../constants.ts";

export const getColors = async (): Promise<{ colors: string[] }> => {
  const url = `${BASE_URL}/api/colors`;

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
    throw new Error(`Failed to get colors: ${errorMessage}`);
  }

  const data = await response.json();
  return data;
};
