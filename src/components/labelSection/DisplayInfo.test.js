import { render, screen, cleanup } from "@testing-library/react";
import DisplayInfo from "./DisplayInfo";

afterEach(cleanup);

test("does not display description when not in display mode", () => {
  const { debug } = render(
    <DisplayInfo displayMode={false} description="desc" />
  );
  const infoElement = screen.queryByTestId("description");
  expect(infoElement).not.toBeInTheDocument();
});

test("display description when in display mode", () => {
  const { debug } = render(
    <DisplayInfo displayMode={true} description="desc" />
  );
  const infoElement = screen.getByTestId("description");
  expect(infoElement).toBeInTheDocument();
  expect(infoElement).toHaveTextContent("desc");
});

test("not display edit button when not in display mode", () => {
  const { debug } = render(
    <DisplayInfo displayMode={false} description="desc" />
  );
  const buttonElements = screen.getAllByTestId("text-button");
  expect(buttonElements.length).toBe(1);
  expect(buttonElements[0]).not.toHaveTextContent(/edit/i);
});

test("display edit button when in display mode", () => {
  const { debug } = render(
    <DisplayInfo displayMode={true} description="desc" />
  );
  const buttonElements = screen.getAllByTestId("text-button");
  expect(buttonElements.length).toBe(2);
  expect(buttonElements[0]).toHaveTextContent(/edit/i);
});

test("always display delete button", () => {
  const { debug, rerender } = render(
    <DisplayInfo displayMode={true} description="desc" />
  );

  expect(screen.getAllByTestId("text-button").pop(-1)).toHaveTextContent(
    /delete/i
  );

  rerender(<DisplayInfo displayMode={false} description="desc" />);

  expect(screen.getAllByTestId("text-button").pop(-1)).toHaveTextContent(
    /delete/i
  );
});
