import type { Show, ShowSearchItem } from "@/typings/api/shows";
import {
  GET_ALL_SHOWS,
  GET_SHOWS_BY_QUERY,
  GET_SHOW_BY_ID,
} from "../endpoints";

export async function fetchAllShows(): Promise<Show[]> {
  try {
    const response = await fetch(GET_ALL_SHOWS);
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching all shows:", error);
    return Promise.reject(error);
  }
}

export async function fetchSearchShows(
  query: string
): Promise<ShowSearchItem[]> {
  try {
    const response = await fetch(GET_SHOWS_BY_QUERY(query));
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching shows:", error);
    return Promise.reject(error);
  }
}

export async function fetchShow(id: string): Promise<Show> {
  try {
    const response = await fetch(GET_SHOW_BY_ID(id));
    return await response.json();
  } catch (error) {
    console.error("Something went wrong fetching a show:", error);
    return Promise.reject(error);
  }
}
