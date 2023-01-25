import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import router from "@/router";
import Header from "./HeaderComponent.vue";

describe("Header", () => {
  it("Renders and navigates properly", () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
      },
    });
    const push = vi.spyOn(router, "push");

    wrapper.find("a").trigger("click");
    expect(push).toHaveBeenCalledOnce();
  });
});
