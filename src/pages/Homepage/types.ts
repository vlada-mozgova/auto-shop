export type Filters = {
  manufacturer: string;
  color: string;
  page: number;
};

export type Meta = {
  totalCarsCount: number;
  totalPageCount: number;
};

export type Manufacturer = {
  name: string;
  models: { name: string }[];
};
