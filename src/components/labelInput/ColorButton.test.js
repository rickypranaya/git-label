import { render, screen, cleanup } from "@testing-library/react";
import ColorButton from "./ColorButton";

afterEach(cleanup);

test("color picker initial value pass from props", () => {
  render(<ColorButton value="#ffffff" />);
  const colorPickerElement = screen.getByTestId("color-picker");
  expect(colorPickerElement).toHaveValue("#ffffff");
});
