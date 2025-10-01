import { useQuery } from "@tanstack/react-query";
import { fetchCharacterById } from "../services/swapi";
import { useLocalCharacter } from "./useLocalCharacter";

export const useCharacterDetail = (id: string) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["character", id],
    queryFn: ({ signal }) => fetchCharacterById(id, signal),
  });

  const { merged, update, save, reset } = useLocalCharacter(data, id);

  return {
    character: merged,
    isPending,
    isError,
    error,
    update,
    save,
    reset,
  };
};
