import { render, screen, cleanup } from "@testing-library/react";
import Label from "./Label";

afterEach(cleanup);

test("label display 'Label Preview' on initial render", () => {
  const { debug } = render(<Label name="" color />);
  const labelElement = screen.getByTestId("label");
  expect(labelElement).toHaveTextContent("Label Preview");
});

test("label display the right color from what its props", () => {
  const { debug } = render(<Label color="#ffffff" />);
  const labelElement = screen.getByTestId("label");

  expect(labelElement).toHaveStyle(`backgroundColor: #ffffff1f`);
  expect(labelElement).toHaveStyle(`color: #ffffff`);
  expect(labelElement).toHaveStyle(`borderColor: #ffffff`);
});
