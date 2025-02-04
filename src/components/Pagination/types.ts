import { Filters, Meta } from "../../pages/Homepage/types";

export type PaginationProps = {
  handlePageChange: (page: number) => void;
  metaData: Meta;
  filters: Filters;
};
