import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { type FC } from "react";
import type { SelectInputProps } from "../types";
import { MENU_ITEMS } from "./constants";

const SelectInput: FC<SelectInputProps> = ({ gender, onChange }) => (
  <FormControl fullWidth>
    <InputLabel id="gender-label">Gender</InputLabel>
    <Select
      labelId="gender-label"
      label="Gender"
      value={gender ?? ""}
      onChange={(e) => onChange("gender", e.target.value.toString())}
    >
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectInput;
