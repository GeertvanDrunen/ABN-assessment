import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SearchInput from "./SearchInput.vue";

describe("SearchInput", () => {
  it("emits onInputChanged event with proper value", async () => {
    const wrapper = mount(SearchInput);

    const input = wrapper.find("input");
    expect(input).toBeDefined();

    input.setValue("Hello");
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(wrapper.emitted()).toHaveProperty("onInputChanged");
    expect(wrapper.emitted("onInputChanged")?.[0]).toContain("Hello");
  });
});
