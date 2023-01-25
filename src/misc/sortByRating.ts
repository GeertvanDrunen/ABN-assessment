import type { Show } from "@/typings/api/shows";

export const sortShowsByRating = (shows: Show[] | undefined) => {
  return shows?.sort((a, b) => {
    if (a.rating.average !== b.rating.average) {
      return (b?.rating?.average ?? 0) - (a?.rating?.average ?? 0);
    }
    return b.weight - a.weight;
  });
};
