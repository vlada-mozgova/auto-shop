import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CarPage from "./index.tsx";
import { BrowserRouter as Router } from "react-router";
import useCar from "../../hooks/useCar.tsx";
import useFavoriteCars from "../../hooks/useFavoriteCars.tsx";

// Mock the hooks
jest.mock("../../hooks/useCar", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../../hooks/useFavoriteCars", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseCar = useCar as jest.Mock;
const mockUseFavoriteCars = useFavoriteCars as jest.Mock;

describe("CarPage", () => {
  beforeEach(() => {
    mockUseCar.mockImplementation(() => ({
      car: {
        stockNumber: 1,
        modelName: "Model 1",
        manufacturerName: "Manufacturer 1",
        mileage: { number: 1000, unit: "km" },
        fuelType: "Petrol",
        color: "Red",
      },
    }));

    mockUseFavoriteCars.mockImplementation(() => ({
      favorites: [1],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    }));
  });

  test("renders the loading state when no car data is available", () => {
    mockUseCar.mockImplementationOnce(() => ({
      car: null,
    }));

    render(
      <Router>
        <CarPage />
      </Router>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders car details", () => {
    render(
      <Router>
        <CarPage />
      </Router>
    );

    expect(screen.getByText("Manufacturer 1 Model 1")).toBeInTheDocument();
    expect(
      screen.getByText("Stock # 1 - 1000 km - Petrol - Red")
    ).toBeInTheDocument();
  });

  test("renders the 'Save' button if the car is not in the favorites list", () => {
    mockUseFavoriteCars.mockImplementationOnce(() => ({
      favorites: [],
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    }));

    render(
      <Router>
        <CarPage />
      </Router>
    );

    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("renders the 'Remove' button if the car is in the favorites list", () => {
    render(
      <Router>
        <CarPage />
      </Router>
    );

    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  test("calls addFavorite when the car is not in favorites", async () => {
    const addFavoriteMock = jest.fn();
    mockUseFavoriteCars.mockImplementationOnce(() => ({
      favorites: [],
      addFavorite: addFavoriteMock,
      removeFavorite: jest.fn(),
    }));

    render(
      <Router>
        <CarPage />
      </Router>
    );

    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(addFavoriteMock).toHaveBeenCalledWith(1);
    });
  });

  test("calls removeFavorite when the car is in favorites", async () => {
    const removeFavoriteMock = jest.fn();
    mockUseFavoriteCars.mockImplementationOnce(() => ({
      favorites: [1],
      addFavorite: jest.fn(),
      removeFavorite: removeFavoriteMock,
    }));

    render(
      <Router>
        <CarPage />
      </Router>
    );

    fireEvent.click(screen.getByText("Remove"));

    await waitFor(() => {
      expect(removeFavoriteMock).toHaveBeenCalledWith(1);
    });
  });
});
