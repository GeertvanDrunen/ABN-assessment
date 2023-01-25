import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import HeadingTwo from "./HeadingTwo.vue";

describe("HeadingTwo", () => {
  it("renders properly", () => {
    const wrapper = mount(HeadingTwo, {
      slots: {
        default: "My Heading",
      },
    });

    expect(wrapper.text()).toContain("My Heading");
    expect(wrapper.find("h2").exists()).toBe(true);
  });
});
