import { useState } from "react";
import { type SwapiCharacter } from "../services/types";
import {
  loadCharacterEdit,
  saveCharacterEdit,
  clearCharacterEdit,
  type CharacterPatch,
} from "../services/localEdits";

export const useLocalCharacter = (base: SwapiCharacter | undefined, id: string) => {
  const [patch, setPatch] = useState<CharacterPatch>(() => loadCharacterEdit(id));

  const merged = base ? ({ ...base, ...patch } as SwapiCharacter) : undefined;

  const update = (field: keyof CharacterPatch, value: string) => {
    const next = { ...patch, [field]: value };
    setPatch(next);
    saveCharacterEdit(id, next);
  };

  const save = () => {
    saveCharacterEdit(id, patch);
  };

  const reset = () => {
    setPatch({});
    clearCharacterEdit(id);
  };

  return { merged, patch, update, save, reset };
};
