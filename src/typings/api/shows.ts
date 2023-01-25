interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number | null;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

interface Externals {
  tvrage: any | null;
  thetvdb: number | null;
  imdb: any | null;
}

interface Image {
  medium: string;
  original: string;
}

interface Self {
  href: string;
}

interface PreviousEpisode {
  href: string;
}

interface Links {
  self: Self;
  previousepisode: PreviousEpisode;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: any | null;
  dvdCountry: any | null;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  _links: Links;
}

export interface ShowSearchItem {
  score: number;
  show: Show;
}
