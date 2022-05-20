import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import LabelSection from "./index";

afterEach(cleanup);

describe("create mode", () => {
  beforeEach(() => {
    const { debug } = render(
      <Provider store={store}>
        <LabelSection type="create" />
      </Provider>
    );
  });

  describe("label input", () => {
    test("label name input has value typed", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const nameInput = inputElement[0];

      fireEvent.change(nameInput, { target: { value: "test name" } });

      expect(nameInput).toHaveValue("test name");
    });

    test("label name input back to default state when create button clicked", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const nameInput = inputElement[0];

      fireEvent.change(nameInput, { target: { value: "test name" } });

      const btnElement = screen.getByTestId("primary-button");
      fireEvent.click(btnElement);
      expect(nameInput).toHaveValue("");
    });
  });

  describe("description input", () => {
    test("description input has value typed", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const descInput = inputElement[1];

      fireEvent.change(descInput, { target: { value: "test desc" } });

      expect(descInput).toHaveValue("test desc");
    });

    test("description input back to default state when create button clicked", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const nameInput = inputElement[0];

      fireEvent.change(nameInput, { target: { value: "test name" } });
      const descInput = inputElement[1];
      fireEvent.change(descInput, { target: { value: "test desc" } });

      const btnElement = screen.getByTestId("primary-button");
      fireEvent.click(btnElement);
      expect(descInput).toHaveValue("");
    });
  });

  describe("color input and picker", () => {
    test("color input value change when color picker value change", () => {
      const colorPicker = screen.getByTestId("color-picker");

      fireEvent.change(colorPicker, { target: { value: "#ffffff" } });
      const colorInput = screen.getAllByTestId("text-input")[2];

      expect(colorInput).toHaveValue("#ffffff");
    });

    test("color input back to default state when create button clicked", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const nameInput = inputElement[0];

      fireEvent.change(nameInput, { target: { value: "test name" } });
      const colorInput = inputElement[2];
      fireEvent.change(colorInput, { target: { value: "#ffffff" } });

      const btnElement = screen.getByTestId("primary-button");
      fireEvent.click(btnElement);
      expect(colorInput).toHaveValue("#c5def5");
    });

    test("color picker back to default state when create button clicked", () => {
      const nameInput = screen.getAllByTestId("text-input")[0];
      fireEvent.change(nameInput, { target: { value: "test name" } });

      const colorPicker = screen.getByTestId("color-picker");
      fireEvent.change(colorPicker, { target: { value: "#ffffff" } });

      const btnElement = screen.getByTestId("primary-button");
      fireEvent.click(btnElement);

      expect(colorPicker).toHaveValue("#c5def5");
    });
  });

  describe("label", () => {
    test("label name updated when name input typed", () => {
      const inputElement = screen.getAllByTestId("text-input");
      const nameInput = inputElement[0];

      fireEvent.change(nameInput, { target: { value: "test label" } });
      const labelElement = screen.getByTestId("label");

      expect(labelElement).toHaveTextContent("test label");
    });

    test("label color updated when color input typed", () => {
      const colorPicker = screen.getByTestId("color-picker");
      fireEvent.change(colorPicker, { target: { value: "#ffffff" } });

      const labelElement = screen.getByTestId("label");

      expect(labelElement).toHaveStyle(`backgroundColor: #ffffff1f`);
      expect(labelElement).toHaveStyle(`color: #ffffff`);
      expect(labelElement).toHaveStyle(`borderColor: #ffffff`);
    });

    test("label back to default state when create button is clicked", () => {
      const nameInput = screen.getAllByTestId("text-input")[0];
      fireEvent.change(nameInput, { target: { value: "test label" } });

      const colorPicker = screen.getByTestId("color-picker");
      fireEvent.change(colorPicker, { target: { value: "#ffffff" } });

      const btnElement = screen.getByTestId("primary-button");
      fireEvent.click(btnElement);

      const labelElement = screen.getByTestId("label");

      expect(labelElement).toHaveTextContent(/label preview/i);
      expect(labelElement).toHaveStyle(`backgroundColor: #c5def51f`);
      expect(labelElement).toHaveStyle(`color: #c5def5`);
      expect(labelElement).toHaveStyle(`borderColor: #c5def5`);
    });
  });
});

describe("edit mode", () => {
  const labelInfo = {
    id: "id",
    name: "bug",
    description: "something is wrong",
    color: "#ffffff",
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <LabelSection type="edit" labelInfo={labelInfo} />
      </Provider>
    );
  });

  test("label name and color is correct state in initial render", () => {
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveTextContent(/bug/i);
    expect(labelElement).toHaveStyle(`backgroundColor: #ffffff1f`);
    expect(labelElement).toHaveStyle(`color: #ffffff`);
    expect(labelElement).toHaveStyle(`borderColor: #ffffff`);
  });

  test("description is rendered in correct state in initial render", () => {
    const descElement = screen.getByTestId("description");
    expect(descElement).toHaveTextContent(/something is wrong/i);
  });

  test("edit section not rendered on initial rendering", () => {
    const inputElements = screen.queryAllByTestId("text-input");
    expect(inputElements.length).toBe(0);
  });

  test("edit section displayed and description hidden when edit button is clicked, then edit button hidden", () => {
    const editButton = screen.getAllByTestId("text-button")[0];
    fireEvent.click(editButton);

    const descElement = screen.queryByTestId("description");
    expect(descElement).not.toBeInTheDocument();
    expect(editButton).not.toBeInTheDocument();

    const inputElements = screen.queryAllByTestId("text-input");
    expect(inputElements.length).toBe(3);
  });

  test("label name can be updated", () => {
    const editButton = screen.getAllByTestId("text-button")[0];
    fireEvent.click(editButton);

    const nameInput = screen.queryAllByTestId("text-input")[0];
    fireEvent.change(nameInput, { target: { value: "issue" } });

    const saveButton = screen.getAllByTestId("primary-button")[1];
    fireEvent.click(saveButton);

    const labelElement = screen.getByTestId("label");
    expect(labelElement).toHaveTextContent(/issue/i);
  });

  // take a look again
  test("label name can be deleted", () => {
    const deleteButton = screen.getAllByTestId("text-button")[1];
    fireEvent.click(deleteButton);

    const labelElement = screen.queryByTestId("label");
    expect(labelElement).toBeInTheDocument();
  });

  test("back to original state if cancel clicked", () => {
    const editButton = screen.getAllByTestId("text-button")[0];
    fireEvent.click(editButton);

    const nameInput = screen.queryAllByTestId("text-input")[0];
    fireEvent.change(nameInput, { target: { value: "issue" } });

    const cancelButton = screen.getAllByTestId("primary-button")[0];
    fireEvent.click(cancelButton);

    const labelElement = screen.queryByTestId("label");
    expect(labelElement).toHaveTextContent("bug");
  });
});
