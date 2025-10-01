import { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";

import { useCharacterDetail } from "../hooks/useCharacterDetail";
import { CharacterDetailSkeleton } from "../components/Skeletons";
import { getErrorMessage } from "../utils/errorUtils";
import SelectInput from "../components/SelectedInput";

const CharacterDetailPage = () => {
  const { id = "" } = useParams();
  const { character, isPending, isError, error, update, save, reset } = useCharacterDetail(id);
  const [savedOpen, setSavedOpen] = useState(false);

  useEffect(() => {
    if (character?.name) document.title = `${character.name} — SWAPI Explorer`;
  }, [character?.name]);

  const onSaveLocally = () => {
    save();
    setSavedOpen(true);
  };

  if (isError) return <Alert severity="error">{getErrorMessage(error)}</Alert>;

  if (isPending || !character) return <CharacterDetailSkeleton />;

  return (
    <Box>
      <Button component={RouterLink} to="/" variant="text" sx={{ mb: 2 }}>
        Back to list
      </Button>
      <Stack spacing={2} sx={{ maxWidth: 480 }}>
        <TextField
          label="Name"
          value={character.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <TextField
          label="Height"
          value={character.height}
          onChange={(e) => update("height", e.target.value)}
        />
        <TextField
          label="Mass"
          value={character.mass}
          onChange={(e) => update("mass", e.target.value)}
        />
        <TextField
          label="Hair color"
          value={character.hair_color}
          onChange={(e) => update("hair_color", e.target.value)}
        />
        <TextField
          label="Skin color"
          value={character.skin_color}
          onChange={(e) => update("skin_color", e.target.value)}
        />
        <TextField
          label="Eye color"
          value={character.eye_color}
          onChange={(e) => update("eye_color", e.target.value)}
        />
        <TextField
          label="Birth year"
          value={character.birth_year}
          onChange={(e) => update("birth_year", e.target.value)}
        />

        <SelectInput gender={character.gender} onChange={update} />

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={onSaveLocally}>
            Save locally
          </Button>
          <Button variant="outlined" color="inherit" onClick={reset}>
            Reset edits
          </Button>
        </Stack>
      </Stack>

      <Snackbar
        open={savedOpen}
        autoHideDuration={2000}
        onClose={() => setSavedOpen(false)}
        message="Saved to this browser"
      />
    </Box>
  );
};

export default CharacterDetailPage;
