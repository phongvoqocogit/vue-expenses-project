import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import { nextTick } from "vue";
import { expect, test } from "vitest";

// Mock localStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

test("renders the component", () => {
  const wrapper = mount(App);
  expect(wrapper.exists()).toBe(true);
});

test("displays the correct total balance, income, and expenses", async () => {
  const transactions = [
    { id: 1, text: "Test Transaction 1", amount: 100 },
    { id: 2, text: "Test Transaction 2", amount: -50 },
  ];
  localStorage.setItem("transactions", JSON.stringify(transactions));

  const wrapper = mount(App);

  // Wait for next DOM update cycle
  await nextTick();

  const total = wrapper.findComponent({ name: "Balance" }).props("total");
  const income = wrapper
    .findComponent({ name: "IncomeExpenses" })
    .props("income");
  const expenses = wrapper
    .findComponent({ name: "IncomeExpenses" })
    .props("expenses");

  expect(total).toBe(50);
  expect(income).toBe(100);
  expect(expenses).toBe(-50);

  localStorage.clear();
});

test("adds a new transaction correctly", async () => {
  const wrapper = mount(App);

  const addTransactionComponent = wrapper.findComponent({
    name: "AddTransaction",
  });
  await addTransactionComponent.vm.$emit("transactionSubmitted", {
    text: "Test Transaction 1",
    amount: 100,
  });

  // Wait for next DOM update cycle
  await nextTick();

  const transactions = JSON.parse(localStorage.getItem("transactions"));
  expect(transactions).toHaveLength(1);
  expect(transactions[0].text).toBe("Test Transaction 1");
  expect(transactions[0].amount).toBe(100);

  localStorage.clear();
});
