import React from "react";
import styles from "./styles.module.scss";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button, FormLabel } from "@mui/material";
import { FiltersProps } from "./types";
import useFilters from "../../hooks/useFilters.tsx";

const Filters = ({ filters, handleFilters }: FiltersProps) => {
  const { colors, manufacturers } = useFilters();
  const [filterData, setFilterData] = React.useState(filters);

  const handleColor = (color: string) =>
    setFilterData({
      ...filterData,
      color,
    });

  const handleManufacturer = (manufacturer: string) =>
    setFilterData({
      ...filterData,
      manufacturer,
    });

  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <FormLabel className={styles.label}>Color</FormLabel>
        <Select defaultValue="none" className={styles.select}>
          <MenuItem value="none" onClick={() => handleColor("")}>
            All car colors
          </MenuItem>
          {colors.map((color) => (
            <MenuItem value={color} onClick={() => handleColor(color)}>
              {color}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div className={styles.filter}>
        <FormLabel className={styles.label}>Manufacturer</FormLabel>
        <Select defaultValue="all" className={styles.select}>
          <MenuItem value="all" onClick={() => handleManufacturer("")}>
            All manufacturers
          </MenuItem>
          {manufacturers.map((manufacturer) => (
            <MenuItem
              value={manufacturer.name}
              onClick={() => handleManufacturer(manufacturer.name)}
            >
              {manufacturer.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Button
        variant="contained"
        className="button"
        onClick={() => handleFilters(filterData)}
      >
        Filter
      </Button>
    </div>
  );
};

export default Filters;
