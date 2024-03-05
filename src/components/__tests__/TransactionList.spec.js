import { mount } from "@vue/test-utils";
import TransactionList from "@/components/TransactionList.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  const wrapper = mount(TransactionList, {
    props: {
      transactions: [],
    },
  });
  expect(wrapper.exists()).toBe(true);
});

test("displays the correct transaction details", () => {
  const transactions = [
    { id: 1, text: "Test Transaction 1", amount: 100 },
    { id: 2, text: "Test Transaction 2", amount: -50 },
  ];
  const wrapper = mount(TransactionList, {
    props: {
      transactions,
    },
  });

  const transactionElements = wrapper.findAll("li");
  expect(transactionElements.length).toBe(transactions.length);

  transactionElements.forEach((transactionElement, index) => {
    expect(transactionElement.text()).toContain(transactions[index].text);
    expect(transactionElement.text()).toContain(transactions[index].amount);
  });
});

test('emits "transactionDeleted" event with correct id when delete button is clicked', async () => {
  const transactions = [
    { id: 1, text: "Test Transaction 1", amount: 100 },
    { id: 2, text: "Test Transaction 2", amount: -50 },
  ];
  const wrapper = mount(TransactionList, {
    props: {
      transactions,
    },
  });

  const deleteButtons = wrapper.findAll(".delete-btn");
  await deleteButtons[0].trigger("click");

  const emittedEvents = wrapper.emitted();
  expect(emittedEvents).toHaveProperty("transactionDeleted");
  expect(emittedEvents.transactionDeleted).toHaveLength(1);
  expect(emittedEvents.transactionDeleted[0]).toEqual([transactions[0].id]);
});
