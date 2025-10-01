import { type SwapiListResponse, type SwapiCharacter } from "./types";
import { createApiError } from "../utils/errorUtils";

const API_BASE = import.meta.env.VITE_API_BASE as string;

export async function fetchCharacters(
  page: number,
  search: string,
  signal?: AbortSignal
): Promise<SwapiListResponse<SwapiCharacter>> {
  try {
    const params = new URLSearchParams();
    if (page > 0) params.set("page", String(page));
    if (search) params.set("search", search);

    const res = await fetch(`${API_BASE}/people/?${params.toString()}`, { signal });

    if (!res.ok) {
      throw createApiError(`Failed to load characters (${res.status})`, res.status);
    }

    return await res.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw createApiError("Request was cancelled");
    }
    throw error;
  }
}

export async function fetchCharacterById(
  id: string,
  signal?: AbortSignal
): Promise<SwapiCharacter> {
  try {
    const res = await fetch(`${API_BASE}/people/${id}/`, { signal });

    if (!res.ok) {
      throw createApiError(`Character not found (${res.status})`, res.status);
    }

    return await res.json();
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw createApiError("Request was cancelled");
    }
    throw error;
  }
}
