export const BASE_URL = "https://api.tvmaze.com";

export const GET_ALL_SHOWS = `${BASE_URL}/shows`;

export const GET_SHOWS_BY_QUERY = (query: string) =>
  `${BASE_URL}/search/shows?q=${query}`;

export const GET_SHOW_BY_ID = (id: string) => `${BASE_URL}/shows/${id}`;
