import type { SwapiCharacter } from "../services/types";

export function getCharacterDetails(character: SwapiCharacter) {
  return {
    name: character.name,
    gender: character.gender,
    birthYear: character.birth_year,
    height: character.height,
    mass: character.mass,
    hairColor: character.hair_color,
    skinColor: character.skin_color,
    eyeColor: character.eye_color,
  };
}
