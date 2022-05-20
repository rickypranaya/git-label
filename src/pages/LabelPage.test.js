import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import LabelPage from "./LabelPage";
import { Provider } from "react-redux";
import store from "../redux/store";

afterEach(cleanup);
beforeEach(() => {
  render(
    <Provider store={store}>
      <LabelPage />
    </Provider>
  );
});

test("0 label displayed on initial render", () => {
  const countElement = screen.getByTestId("label-count");
  const textBtnElements = screen.queryAllByTestId("text-button");

  expect(countElement).toHaveTextContent("0 label");
  expect(textBtnElements.length).toBe(0);
});

const addLabel = (value) => {
  const inputElement = screen.getAllByTestId("text-input");
  const nameInput = inputElement[0];
  const btnElement = screen.getByTestId("primary-button");

  fireEvent.change(nameInput, { target: { value: value } });
  fireEvent.click(btnElement);
};

test("2 labels displayed when 2 labels added ", () => {
  addLabel("label1");
  addLabel("label2");

  const countElement = screen.getByTestId("label-count");
  const textBtnElements = screen.queryAllByTestId("text-button");

  expect(countElement).toHaveTextContent("2 labels");
  expect(textBtnElements.length).toBe(4);
});
