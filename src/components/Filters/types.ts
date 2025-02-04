import { Filters } from "./../../pages/Homepage/types";

export type FiltersProps = {
  handleFilters: (filtersData: any) => void;
  filters: Filters;
};
