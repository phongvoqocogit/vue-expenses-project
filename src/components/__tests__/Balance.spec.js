import { mount } from "@vue/test-utils";
import Balance from "@/components/Balance.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  const wrapper = mount(Balance, {
    props: {
      total: 0,
    },
  });
  expect(wrapper.exists()).toBe(true);
});

test("displays the correct total balance", () => {
  const total = 100;
  const wrapper = mount(Balance, {
    props: {
      total,
    },
  });

  const balanceElement = wrapper.find("#balance");
  expect(balanceElement.text()).toBe(`$${total}`);
});
