import { sortShowsByRating } from "@/misc/sortByRating";
import type { Show } from "@/typings/api/shows";
import { describe, it, expect } from "vitest";

describe("sortShowsByRating", () => {
  it("Sorts shows by rating", () => {
    const shows: Show[] = [
      {
        id: 1,
        url: "https://www.tvmaze.com/shows/1/under-the-dome",
        name: "Under the Dome",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Science-Fiction", "Thriller"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2013-06-24",
        ended: "2015-09-10",
        officialSite: "http://www.cbs.com/shows/under-the-dome/",
        schedule: {
          time: "22:00",
          days: ["Thursday"],
        },
        rating: {
          average: 6.5,
        },
        weight: 97,
        network: {
          id: 2,
          name: "CBS",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.cbs.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 25988,
          thetvdb: 264492,
          imdb: "tt1553656",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        },
        summary:
          "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        updated: 1631010933,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/1",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/185054",
          },
        },
      },
      {
        id: 2,
        url: "https://www.tvmaze.com/shows/2/person-of-interest",
        name: "Person of Interest",
        type: "Scripted",
        language: "English",
        genres: ["Action", "Crime", "Science-Fiction"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2011-09-22",
        ended: "2016-06-21",
        officialSite: "http://www.cbs.com/shows/person_of_interest/",
        schedule: {
          time: "22:00",
          days: ["Tuesday"],
        },
        rating: {
          average: 8.8,
        },
        weight: 99,
        network: {
          id: 2,
          name: "CBS",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.cbs.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 28376,
          thetvdb: 248742,
          imdb: "tt1839578",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg",
        },
        summary:
          "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
        updated: 1673914196,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/2",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/659372",
          },
        },
      },
      {
        id: 3,
        url: "https://www.tvmaze.com/shows/3/bitten",
        name: "Bitten",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Horror", "Romance"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2014-01-11",
        ended: "2016-04-15",
        officialSite: "http://bitten.space.ca/",
        schedule: {
          time: "22:00",
          days: ["Friday"],
        },
        rating: {
          average: 7.5,
        },
        weight: 91,
        network: {
          id: 7,
          name: "CTV Sci-Fi Channel",
          country: {
            name: "Canada",
            code: "CA",
            timezone: "America/Halifax",
          },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 34965,
          thetvdb: 269550,
          imdb: "tt2365946",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg",
        },
        summary:
          '<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>',
        updated: 1665307838,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/3",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/631862",
          },
        },
      },
      {
        id: 4,
        url: "https://www.tvmaze.com/shows/4/arrow",
        name: "Arrow",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Action", "Science-Fiction"],
        status: "Ended",
        runtime: 60,
        averageRuntime: 60,
        premiered: "2012-10-10",
        ended: "2020-01-28",
        officialSite: "http://www.cwtv.com/shows/arrow",
        schedule: {
          time: "21:00",
          days: ["Tuesday"],
        },
        rating: {
          average: 7.4,
        },
        weight: 98,
        network: {
          id: 5,
          name: "The CW",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.cwtv.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 30715,
          thetvdb: 257655,
          imdb: "tt2193021",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg",
        },
        summary:
          "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
        updated: 1671542677,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/4",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1744752",
          },
        },
      },
      {
        id: 5,
        url: "https://www.tvmaze.com/shows/5/true-detective",
        name: "True Detective",
        type: "Scripted",
        language: "English",
        genres: ["Drama", "Crime", "Thriller"],
        status: "Running",
        runtime: 60,
        averageRuntime: 62,
        premiered: "2014-01-12",
        ended: null,
        officialSite: "http://www.hbo.com/true-detective",
        schedule: {
          time: "21:00",
          days: ["Sunday"],
        },
        rating: {
          average: 8.2,
        },
        weight: 100,
        network: {
          id: 8,
          name: "HBO",
          country: {
            name: "United States",
            code: "US",
            timezone: "America/New_York",
          },
          officialSite: "https://www.hbo.com/",
        },
        webChannel: null,
        dvdCountry: null,
        externals: {
          tvrage: 31369,
          thetvdb: 270633,
          imdb: "tt2356777",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/178/445621.jpg",
        },
        summary:
          "<p>Touch darkness and darkness touches you back. <b>True Detective</b> centers on troubled cops and the investigations that drive them to the edge. Each season features a new cast and a new case.</p><p><i><b>True Detective</b></i> is an American anthology crime drama television series created and written by Nic Pizzolatto. </p>",
        updated: 1673178420,
        _links: {
          self: {
            href: "https://api.tvmaze.com/shows/5",
          },
          previousepisode: {
            href: "https://api.tvmaze.com/episodes/1590271",
          },
        },
      },
    ];

    const sortedShows = sortShowsByRating(shows);
    expect(sortedShows).toEqual(sortShowsByRating(shows));
  });

  it("it returns undefined if shows is undefined", () => {
    const shows = undefined;

    const sortedShows = sortShowsByRating(shows);

    expect(sortedShows).toBeUndefined();
  });
});
