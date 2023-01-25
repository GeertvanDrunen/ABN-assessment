import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import IconLink from "./IconLink.vue";

describe("IconLink", () => {
  it("renders properly", () => {
    const wrapper = mount(IconLink, {
      props: {
        icon: "search",
        title: "Search",
      },
    });
    expect(wrapper.text()).toContain("Search");

    const svg = wrapper.find("svg");
    expect(svg).toBeTruthy();

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("onClick");
  });
});
