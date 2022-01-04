// import { createAction } from "redux-actions";
import {createAction} from "redux-actions";
import * as constant from "../Constant";

export const handleSubmit = createAction(constant.HANDLE_SUBMIT);
export const handleFilter = createAction(constant.HANDLE_FILTER);
export const handleFormChecked = createAction(constant.HANDLE_FORM_CHECKED);
export const handleFormEdit = createAction(constant.HANDLE_FORM_EDIT);
export const handleFormUpdate = createAction(constant.HANDLE_FORM_UPDATE);
