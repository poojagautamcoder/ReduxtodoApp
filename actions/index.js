import * as action from "../Constant";

export const addTodo = (data) => {
  return {
    type: " action.HANDLE_ADD",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      status: false,
      edit: false,
    },
  };
};
export const deleteTodo = (id) => {
  //   console.log(id, "ggggggggggggggggggggg");
  return {
    type: "action.HANDLE_FORM_DELETE",
    payload: {
      id: id,
    },
  };
};
export const handleFormChecked = (id) => {
  return {
    type: "action.HANDLE_FORM_CHECKED",
    payload: { id, status: false },
  };
};
export const handleFormEdit = () => {
  return {
    type: "action.HANDLE_FORM_EDIT",
    Payload: { edit },
  };
};
export const handleFormUpdate = () => {
  return {
    type: "action.HANDLE_FORM_UPDATE",
  };
};

export const handleFilter = () => {
  return {
    type: "action.HANDLE_FILTER",
  };
};
