import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HeadingThree from "./HeadingThree.vue";

describe("HeadingThree", () => {
  it("renders properly", () => {
    const wrapper = mount(HeadingThree, {
      slots: {
        default: "My Heading",
      },
    });

    expect(wrapper.text()).toContain("My Heading");
    expect(wrapper.find("h3").exists()).toBe(true);
  });
});
