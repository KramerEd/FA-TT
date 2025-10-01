import Alert from "@mui/material/Alert";
import { getErrorMessage } from "../../utils/errorUtils";

interface CharacterListErrorProps {
  error: unknown;
}

const CharacterListError = ({ error }: CharacterListErrorProps) => {
  return <Alert severity="error">{getErrorMessage(error)}</Alert>;
};

export default CharacterListError;
