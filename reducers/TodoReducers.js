import { bindActionCreators } from "redux";
import * as constant from "../Constant";
const initialData = {
  list: [],
};

const TodoReducers = (state = initialData, action) => {
  // console.log(action, "llllllll")
  switch (action.type === constant.HANDLE_ADD) {
    case "HANDLE_ADD":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
            status: false,
            edit: false,
          },
        ],
      };

    case "DELETE_ITEM":
      const newList = state.list.filter(
        (curElem) => curElem.id != action.payload.id
      );

      return {
        ...state,
        list: newList,
      };

    case "STATUS_ITEM":
      const newArray = state.list.map((curElem, index) => {
        if (curElem.id == action.payload.id) {
          return {
            ...curElem,
            status: !curElem.status,
          };
        } else {
          return curElem;
        }
        return {
          ...state,
          list: newArray,
        };
      });

    default:
      return state;
  }
};
export default TodoReducers;
