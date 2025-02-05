import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "./index.tsx";
import { BrowserRouter as Router } from "react-router";

// Mock the useCars hook
jest.mock("../../hooks/useCars", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseCars = require("../../hooks/useCars").default;

describe("HomePage", () => {
  beforeEach(() => {
    mockUseCars.mockImplementation(() => ({
      cars: [
        {
          stockNumber: 1,
          modelName: "Model 1",
          manufacturerName: "Manufacturer 1",
          mileage: { number: 1000, unit: "km" },
          fuelType: "Petrol",
          color: "Red",
        },
        {
          stockNumber: 2,
          modelName: "Model 2",
          manufacturerName: "Manufacturer 2",
          mileage: { number: 2000, unit: "km" },
          fuelType: "Diesel",
          color: "Blue",
        },
      ],
      isLoading: false,
      metaData: { totalCarsCount: 2, totalPageCount: 1, currentPage: 1 },
      filters: { page: 1 },
      handleFilters: jest.fn(),
      handlePageChange: jest.fn(),
    }));
  });

  test("renders the HomePage component", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Available cars")).toBeInTheDocument();
    expect(screen.getByText("Showing 2 of 2 results")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Model 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Model 2/i })
    ).toBeInTheDocument();
  });

  test("renders the correct number of cars based on filters", () => {
    mockUseCars.mockImplementationOnce(() => ({
      cars: [
        {
          stockNumber: 1,
          modelName: "Model 1",
          manufacturerName: "Manufacturer 1",
          mileage: { number: 1000, unit: "km" },
          fuelType: "Petrol",
          color: "Red",
        },
      ],
      isLoading: false,
      metaData: { totalCarsCount: 1, totalPageCount: 1, currentPage: 1 },
      filters: { page: 1 },
      handleFilters: jest.fn(),
      handlePageChange: jest.fn(),
    }));

    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Showing 1 of 1 results")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Model 1/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /Model 2/i })
    ).not.toBeInTheDocument();
  });

  test("page navigation works correctly", async () => {
    const handlePageChangeMock = jest.fn();
    mockUseCars.mockImplementationOnce(() => ({
      cars: [
        {
          stockNumber: 1,
          modelName: "Model 1",
          manufacturerName: "Manufacturer 1",
          mileage: { number: 1000, unit: "km" },
          fuelType: "Petrol",
          color: "Red",
        },
        {
          stockNumber: 2,
          modelName: "Model 2",
          manufacturerName: "Manufacturer 2",
          mileage: { number: 2000, unit: "km" },
          fuelType: "Diesel",
          color: "Blue",
        },
      ],
      isLoading: false,
      metaData: { totalCarsCount: 2, totalPageCount: 2, currentPage: 1 },
      filters: { page: 1 },
      handleFilters: jest.fn(),
      handlePageChange: handlePageChangeMock,
    }));

    render(
      <Router>
        <HomePage />
      </Router>
    );

    fireEvent.click(screen.getByText("Next"));

    await waitFor(() => {
      expect(handlePageChangeMock).toHaveBeenCalledWith(2);
    });
  });

  test("correctly renders pagination", () => {
    mockUseCars.mockImplementationOnce(() => ({
      cars: [
        {
          stockNumber: 1,
          modelName: "Model 1",
          manufacturerName: "Manufacturer 1",
          mileage: { number: 1000, unit: "km" },
          fuelType: "Petrol",
          color: "Red",
        },
        {
          stockNumber: 2,
          modelName: "Model 2",
          manufacturerName: "Manufacturer 2",
          mileage: { number: 2000, unit: "km" },
          fuelType: "Diesel",
          color: "Blue",
        },
      ],
      isLoading: false,
      metaData: { totalCarsCount: 2, totalPageCount: 2, currentPage: 1 },
      filters: { page: 1 },
      handleFilters: jest.fn(),
      handlePageChange: jest.fn(),
    }));

    render(
      <Router>
        <HomePage />
      </Router>
    );

    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
  });
});
