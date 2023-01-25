import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Content from "./ContentComponent.vue";

describe("Content", () => {
  it("renders properly", () => {
    const wrapper = mount(Content, {
      slots: {
        default: "Beautiful content",
      },
    });

    expect(wrapper.text()).toContain("Beautiful content");
  });
});
