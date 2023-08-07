import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get("/genres").then((response) => response.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;
