export function getCharacterIdFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

export function buildCharacterUrl(id: string): string {
  return `/people/${id}`;
}

export function isValidCharacterId(id: string): boolean {
  return /^\d+$/.test(id);
}
