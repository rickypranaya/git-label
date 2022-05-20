import { CREATE_LABEL, DELETE_LABEL, EDIT_LABEL } from "./labelTypes";

const initialState = {
  labels: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LABEL:
      return {
        ...state,
        labels: [action.payload, ...state.labels],
      };
    case DELETE_LABEL:
      return {
        ...state,
        labels: state.labels.filter((label) => label.id != action.payload),
      };
    case EDIT_LABEL:
      let labels = state.labels;
      let obj = action.payload;
      const index = labels.findIndex((object) => {
        return object.id === obj.id;
      });

      if (index !== -1) {
        labels[index].name = obj.name;
        labels[index].description = obj.description;
        labels[index].color = obj.color;
      }
      return {
        ...state,
        labels: labels,
      };
    default:
      return state;
  }
};

export default reducer;
