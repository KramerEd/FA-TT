import { KEY_PREFIX } from "../constants";
import type { SwapiCharacter } from "./types";

export type CharacterPatch = Omit<Partial<SwapiCharacter>, "url">;

export const loadCharacterEdit = (id: string): CharacterPatch => {
  const raw = localStorage.getItem(KEY_PREFIX + id);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as CharacterPatch;
  } catch {
    return {};
  }
};

export const getCharacterEdit = (id: string): CharacterPatch | null => {
  const raw = localStorage.getItem(KEY_PREFIX + id);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CharacterPatch;
  } catch {
    return null;
  }
};

export const saveCharacterEdit = (id: string, patch: CharacterPatch): void => {
  localStorage.setItem(KEY_PREFIX + id, JSON.stringify(patch));
};

export const clearCharacterEdit = (id: string): void => {
  localStorage.removeItem(KEY_PREFIX + id);
};
