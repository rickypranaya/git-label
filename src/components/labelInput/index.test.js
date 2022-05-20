import { render, screen, cleanup } from "@testing-library/react";
import LabelInput from "./index";

afterEach(cleanup);

test("LabelInput display the right label", () => {
  render(<LabelInput label="test label" />);
  const labelElement = screen.getByTestId("label-input");
  expect(labelElement).toHaveTextContent("test label");
});

test("Colorpicker is displayed when label is Color", () => {
  render(<LabelInput label="Color" />);
  const labelElement = screen.getByTestId("color-picker");
  expect(labelElement).toBeInTheDocument();
});

test("Colorpicker is not displayed when label is not Color", () => {
  render(<LabelInput label="not color" />);
  const labelElement = screen.queryByTestId("color-picker");
  expect(labelElement).not.toBeInTheDocument();
});
