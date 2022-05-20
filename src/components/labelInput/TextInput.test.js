import { render, screen, cleanup } from "@testing-library/react";
import TextInput from "./TextInput";

afterEach(cleanup);

test("textinput display placeholder from props", () => {
  render(<TextInput placeholder="test placeholder" />);
  const inputElement = screen.getByTestId("text-input");
  expect(inputElement.placeholder).toBe("test placeholder");
});
