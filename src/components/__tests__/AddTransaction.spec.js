import { mount } from "@vue/test-utils";
import AddTransaction from "@/components/AddTransaction.vue";
import { expect, test } from "vitest";

test("renders the component", () => {
  const wrapper = mount(AddTransaction);
  expect(wrapper.exists()).toBe(true);
});

test('emits "transactionSubmitted" event with correct payload when form is submitted', async () => {
  const wrapper = mount(AddTransaction);
  const textInput = wrapper.find("#transaction-text");
  const amountInput = wrapper.find("#transaction-amount");

  await textInput.setValue("Test Transaction");
  await amountInput.setValue("100");

  await wrapper.find("form").trigger("submit.prevent");

  const emittedEvents = wrapper.emitted();
  expect(emittedEvents).toHaveProperty("transactionSubmitted");
  expect(emittedEvents.transactionSubmitted).toHaveLength(1);
  expect(emittedEvents.transactionSubmitted[0]).toEqual([
    { text: "Test Transaction", amount: 100 },
  ]);
});
