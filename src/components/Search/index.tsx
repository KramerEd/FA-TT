import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useDebouncedCallback } from "../../hooks/useDebounce";
import type { SearchBoxProps } from "../types";

export default function SearchBox({
  value,
  onChange,
  debounceMs = 350,
  label = "Search",
}: SearchBoxProps) {
  const [inner, setInner] = useState(value);
  const debouncedOnChange = useDebouncedCallback(onChange, debounceMs);

  useEffect(() => {
    setInner(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInner(v);
    debouncedOnChange(v);
  };

  return (
    <Box>
      <TextField
        fullWidth
        value={inner}
        label={label}
        placeholder="Type to search characters"
        onChange={handleChange}
      />
    </Box>
  );
}
