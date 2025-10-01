import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { getCharacterIdFromUrl, buildCharacterUrl } from "../../utils/urlUtils";
import { getCharacterDetails } from "../../utils/characterUtils";
import { type FC } from "react";
import type { CharacterCardProps } from "../types";

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const id = getCharacterIdFromUrl(character.url);
  const details = getCharacterDetails(character);

  return (
    <Card variant="outlined">
      <CardActionArea component={RouterLink} to={buildCharacterUrl(id)}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {details.name}
          </Typography>
          <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr", columnGap: 2, rowGap: 0.5 }}>
            <Typography variant="body2">Gender</Typography>
            <Typography variant="body2" color="text.secondary">
              {details.gender}
            </Typography>
            <Typography variant="body2">Birth year</Typography>
            <Typography variant="body2" color="text.secondary">
              {details.birthYear}
            </Typography>
            <Typography variant="body2">Height</Typography>
            <Typography variant="body2" color="text.secondary">
              {details.height}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CharacterCard;
