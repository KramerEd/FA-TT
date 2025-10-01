import type { SwapiCharacter } from "../services/types";
import type { CharacterPatch } from "../services/localEdits";

export type CharacterCardProps = {
  character: SwapiCharacter;
};

export type PaginationBarProps = {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
};

export type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
  label?: string;
};

export type SelectInputProps = {
  gender: string | null;
  onChange: (field: keyof CharacterPatch, value: string) => void;
};
