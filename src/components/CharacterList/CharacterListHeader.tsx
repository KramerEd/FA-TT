import { Box } from "@mui/material";
import SearchBox from "../Search";
import { setSearch } from "../../services/navigation";
import type { SetURLSearchParams } from "react-router-dom";

interface CharacterListHeaderProps {
  search: string;
  setParams: SetURLSearchParams;
}

const CharacterListHeader = ({ search, setParams }: CharacterListHeaderProps) => (
  <Box sx={{ mb: 2 }}>
    <SearchBox
      value={search}
      onChange={(value) => setSearch(value, setParams)}
      label="Search characters"
    />
  </Box>
);

export default CharacterListHeader;
