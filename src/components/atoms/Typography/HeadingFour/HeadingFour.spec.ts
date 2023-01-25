import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HeadingFour from "./HeadingFour.vue";

describe("HeadingFour", () => {
  it("renders properly", () => {
    const wrapper = mount(HeadingFour, {
      slots: {
        default: "My Heading",
      },
    });

    expect(wrapper.text()).toContain("My Heading");
    expect(wrapper.find("h4").exists()).toBe(true);
  });
});
