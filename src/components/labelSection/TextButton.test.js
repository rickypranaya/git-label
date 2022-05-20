import { render, screen, cleanup } from "@testing-library/react";
import TextButton from "./TextButton";

afterEach(cleanup);

test("text button display the right name", () => {
  render(<TextButton name="edit" />);
  const buttonElement = screen.getByTestId("text-button");
  expect(buttonElement).toHaveTextContent("edit");
});
