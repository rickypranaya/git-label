import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Button from "./index";

afterEach(cleanup);

test("button display the right name", () => {
  render(<Button name="create label" />);
  const buttonElement = screen.getByTestId("primary-button");
  expect(buttonElement).toHaveTextContent("create label");
});

test("button is not disabled by default", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("primary-button");
  expect(buttonElement).not.toBeDisabled();
});

test("button is disabled when enabled props passed is false", () => {
  render(<Button enabled={false} />);
  const buttonElement = screen.getByTestId("primary-button");
  expect(buttonElement).toBeDisabled();
});

test("button is green color when prop type is default", () => {
  render(<Button type="default" />);
  const buttonElement = screen.getByTestId("primary-button");
  expect(buttonElement).toHaveClass("bg-green-600");
});

test("button is gray color when prop type is cancel", () => {
  render(<Button type="cancel" />);
  const buttonElement = screen.getByTestId("primary-button");
  expect(buttonElement).toHaveClass("bg-neutral-700");
});
