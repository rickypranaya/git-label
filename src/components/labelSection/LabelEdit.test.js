import { render, screen, cleanup } from "@testing-library/react";
import LabelEdit from "./LabelEdit";

afterEach(cleanup);

test("render label name, description and color input form", () => {
  const { debug } = render(<LabelEdit checkInput={() => true} />);
  const inputElements = screen.getAllByTestId("label-input");
  expect(inputElements.length).toBe(3);
  expect(inputElements[0]).toHaveTextContent(/label name/i);
  expect(inputElements[1]).toHaveTextContent(/description/i);
  expect(inputElements[2]).toHaveTextContent(/color/i);
});

test("does not display cancel, button is 'create label' on create mode", () => {
  const { debug } = render(
    <LabelEdit editMode={false} checkInput={() => true} />
  );
  const btnElements = screen.getAllByTestId("primary-button");
  expect(btnElements.length).toBe(1);
  expect(btnElements[0]).not.toHaveTextContent(/cancel/i);
  expect(btnElements[0]).toHaveTextContent(/create label/i);
});

test("display cancel, button is 'save changes' on edit mode", () => {
  const { debug } = render(
    <LabelEdit editMode={true} checkInput={() => true} />
  );
  const btnElements = screen.getAllByTestId("primary-button");
  expect(btnElements.length).toBe(2);
  expect(btnElements[0]).toHaveTextContent(/cancel/i);
  expect(btnElements[1]).toHaveTextContent(/save changes/i);
});
