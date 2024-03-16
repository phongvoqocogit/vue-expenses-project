import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  const wrapper = mount(Header);
  expect(wrapper.exists()).toBe(true);
});

test("displays the correct header text", () => {
  const wrapper = mount(Header);
  const headerElement = wrapper.find("h2");
  expect(headerElement.text()).toBe("Expense Tracker version 1");
});
