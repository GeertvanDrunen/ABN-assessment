import type { Ref } from "vue";
import { useQuery } from "vue-query";
import { fetchAllShows, fetchSearchShows, fetchShow } from "./get";

const ALLSHOWS = "allShows";
const SHOWS = "shows";
const SHOWDETAILS = "showDetails";

export function useShowsSearchQuery(query: string | Ref<string>) {
  return useQuery({
    queryKey: [SHOWS, query],
    queryFn: () =>
      fetchSearchShows(typeof query === "string" ? query : query.value),
  });
}

export function useAllShowsQuery() {
  return useQuery({
    queryKey: ALLSHOWS,
    queryFn: () => fetchAllShows(),
  });
}

export function useShowDetailsQuery(id: string) {
  return useQuery([SHOWDETAILS, id], () => fetchShow(id));
}
