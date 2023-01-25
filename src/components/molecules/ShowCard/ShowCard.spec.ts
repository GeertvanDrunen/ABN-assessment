import type { Show } from "@/typings/api/shows";
import { mount } from "@vue/test-utils";
import router from "@/router";
import { describe, it, expect } from "vitest";
import ShowCard from "./ShowCard.vue";

describe("ShowCard", () => {
  it("renders properly", () => {
    const show: Show = {
      id: 39037,
      url: "https://www.tvmaze.com/shows/39037/comedy-legends",
      name: "Comedy Legends",
      type: "Documentary",
      language: "English",
      genres: ["Comedy"],
      status: "Running",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2018-10-10",
      ended: null,
      officialSite: "https://www.sky.com/watch/channel/sky-arts/comedy-legends",
      schedule: {
        time: "21:00",
        days: ["Thursday"],
      },
      rating: {
        average: null,
      },
      weight: 79,
      network: {
        id: 69,
        name: "Sky Arts",
        country: {
          name: "United Kingdom",
          code: "GB",
          timezone: "Europe/London",
        },
        officialSite: null,
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
        tvrage: null,
        thetvdb: 354028,
        imdb: null,
      },
      image: {
        medium:
          "https://static.tvmaze.com/uploads/images/medium_portrait/171/428737.jpg",
        original:
          "https://static.tvmaze.com/uploads/images/original_untouched/171/428737.jpg",
      },
      summary:
        "<p>Barry Cryer pays tribute to the heroes of comedy who he has worked with over his many years in the business. Each episode celebrates one legend and includes highlights from their comedy careers as Barry recalls some of his funniest moments working with each of them.</p>",
      updated: 1651518348,
      _links: {
        self: {
          href: "https://api.tvmaze.com/shows/39037",
        },
        previousepisode: {
          href: "https://api.tvmaze.com/episodes/2179128",
        },
      },
    };
    const wrapper = mount(ShowCard, {
      props: {
        show: show,
        isSlide: false,
      },
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.text()).toContain(show.name);
    expect(wrapper.find("img").attributes().src).toBe(show.image?.medium);
    expect(wrapper.find("a").attributes().href).toBe(`/shows/${show.id}`);
  });
});
