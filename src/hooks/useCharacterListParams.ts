import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export const useCharacterListParams = () => {
  const [params, setParams] = useSearchParams();

  const page = useMemo(() => Math.max(1, Number(params.get("page") || 1)), [params]);
  const search = useMemo(() => params.get("search") || "", [params]);

  return {
    page,
    search,
    setParams,
  };
};
