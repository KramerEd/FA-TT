import { memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CharacterCard from "../Card";
import PaginationBar from "../Pagination";
import { GRID_PAGE_SIZE } from "../../constants";
import { setPage } from "../../services/navigation";
import type { SetURLSearchParams } from "react-router-dom";
import type { SwapiCharacter } from "../../services/types";

interface CharacterListContentProps {
  characters: SwapiCharacter[];
  page: number;
  totalCount: number;
  setParams: SetURLSearchParams;
}

const CharacterListContent = ({
  characters,
  page,
  totalCount,
  setParams,
}: CharacterListContentProps) => {
  if (characters.length === 0) {
    return (
      <Box sx={{ backgroundColor: "background.default", padding: 2, borderRadius: 1 }}>
        <Typography>No results</Typography>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid key={character.url} size={{ xs: 12, sm: 6 }}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
      <Box bgcolor={"background.default"} mt={2} borderRadius={1}>
        <PaginationBar
          page={page}
          total={totalCount}
          pageSize={GRID_PAGE_SIZE}
          onChange={(value) => setPage(value, setParams)}
        />
      </Box>
    </>
  );
};

export default CharacterListContent;
