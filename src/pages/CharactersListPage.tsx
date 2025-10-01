import Box from "@mui/material/Box";
import { CharactersSkeletonGrid } from "../components/Skeletons";

import { useCharacterList } from "../hooks/useCharacterList";
import { useCharacterListParams } from "../hooks/useCharacterListParams";

import {
  CharacterListError,
  CharacterListHeader,
  CharacterListContent,
} from "../components/CharacterList";

const CharactersListPage = () => {
  const { page, search, setParams } = useCharacterListParams();
  const { characters, totalCount, isPending, isError, error } = useCharacterList(page, search);

  if (isError) {
    return <CharacterListError error={error} />;
  }

  if (isPending) {
    return <CharactersSkeletonGrid />;
  }

  return (
    <Box>
      <head>
        <title>Characters — Star Wars SPA</title>
      </head>

      <CharacterListHeader search={search} setParams={setParams} />
      <CharacterListContent
        characters={characters}
        page={page}
        totalCount={totalCount}
        setParams={setParams}
      />
    </Box>
  );
};

export default CharactersListPage;
