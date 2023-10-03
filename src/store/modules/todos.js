const ADD = "todos/ADD";
const DEL = "todos/DEL";
const TOGGLE = "todos/TOGGLE";
const CHANGE_INPUT = "todos/CHANGE_INPUT";

let id = 1;
export const add = (text) => ({
  type: ADD,
  text,
});
export const del = (id) => ({
  type: DEL,
  id,
});
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const changeInput = (text) => ({
  type: CHANGE_INPUT,
  text,
});

const initialState = {
  input: "",
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id++,
            text: action.text,
            done: false,
          },
        ],
      };
    case DEL:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case TOGGLE:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.text,
      };
    default:
      return state;
  }
};

export default reducer;
