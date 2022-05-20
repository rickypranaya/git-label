import reducer from "./labelReducers";
import { editLabel } from "./labelActions";

test("reducer edit label should not change if id is different", () => {
  const prevState = {
    labels: [
      {
        id: 1,
        name: "bug",
        description: "something is wrong",
        color: "#ffffff",
      },
    ],
  };
  const nextState = {
    labels: [
      {
        id: 0,
        name: "issue",
        description: "need help",
        color: "#ffffff",
      },
    ],
  };
  expect(reducer(prevState, editLabel(nextState))).toEqual(prevState);
});
