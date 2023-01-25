import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HeadingOne from "./HeadingOne.vue";

describe("HeadingOne", () => {
  it("renders properly", () => {
    const wrapper = mount(HeadingOne, {
      slots: {
        default: "My Heading",
      },
    });

    expect(wrapper.text()).toContain("My Heading");
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});
