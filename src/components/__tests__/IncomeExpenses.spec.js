import { mount } from "@vue/test-utils";
import IncomeExpenses from "@/components/IncomeExpenses.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  const wrapper = mount(IncomeExpenses, {
    props: {
      income: 1000,
      expenses: 500,
    },
  });
  expect(wrapper.exists()).toBe(true);
});

test("displays the correct income", () => {
  const wrapper = mount(IncomeExpenses, {
    props: {
      income: 1000,
      expenses: 500,
    },
  });
  const incomeElement = wrapper.find("#money-plus");
  expect(incomeElement.text()).toBe("$+1000");
});

test("displays the correct expenses", () => {
  const wrapper = mount(IncomeExpenses, {
    props: {
      income: 1000,
      expenses: -500,
    },
  });
  const expensesElement = wrapper.find("#money-minus");
  expect(expensesElement.text()).toBe("$-500");
});
