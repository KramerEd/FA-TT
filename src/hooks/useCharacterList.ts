import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/swapi";
import { getCharacterEdit } from "../services/localEdits";
import { getCharacterIdFromUrl } from "../utils/urlUtils";

export const useCharacterList = (page: number, search: string) => {
  const queryKey = ["people", { page, search }];

  const { data, isPending, isError, error } = useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchCharacters(page, search, signal),
  });

  const mergedCharacters =
    data?.results.map((character) => {
      const id = getCharacterIdFromUrl(character.url);
      const patch = getCharacterEdit(id);
      return patch ? { ...character, ...patch } : character;
    }) ?? [];

  return {
    characters: mergedCharacters,
    totalCount: data?.count ?? 0,
    isPending,
    isError,
    error,
  };
};
