// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import AllButtons from "../genericcomponent/AllButtons";
// import AllInput from "../genericcomponent/AllInput";
// import styles from "../styles/Form.css";
// import { addTodo } from "../actions/index";

// const Todo = (props) => {
//   const { inputData, setInputData } = props;
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h2 className="heading">Todos List</h2>
//       <div className="addItems">
//         <AllInput
//           className="form-control inputstyle"
//           value={inputData}
//           onChange={(event) => setInputData(event.target.value)}
//         />
//         <AllButtons
//           className="btn-addtodo"
//           onClick={() => dispatch(addTodo(inputData), setInputData(""))}
//         >
//           +
//         </AllButtons>
//       </div>
//     </div>
//   );
// };

// export default Todo;




import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  handleFormInput,
  handleFormChecked,
  handleFormDate,
  handleSubmit,
} from './Redux/createActions';
const Todo = () => {
  const formInputs = useSelector((state) => {
    const {
      todoReducer: { formInput, startDate, complete },
    } = state;
    return { formInput, startDate, complete };
  });

  const dispatch = useDispatch();
  return (
    <div className='shadow-lg rounded-lg p-4 px-5 border'>
      <header className='text-center mb-2'>
        <h1 className='font-semibold text-base'>Todo App</h1>
      </header>
      <form
        className='md:flex md:flex-col '
        onSubmit={(e) => dispatch(handleSubmit(e))}
      >
        <input
          type='text'
          className=' flex-1 focus:outline-none p-2 px-3 w-full  rounded-lg shadow-lg'
          placeholder='Add your list'
          name='data'
          value={formInputs.formInput}
          onChange={(e) => dispatch(handleFormInput(e))}
        />

        <section className='my-10 flex'>
          <DatePicker
            selected={formInputs.startDate}
            onChange={(e) => dispatch(handleFormDate(e))}
            type='date'
            className='border-2 '
            id='date'
          />
        </section>

        <section className='mr-auto mb-3'>
          <label htmlFor='completed' className='mr-1'>
            completed:
          </label>
          <input
            id='completed'
            type='checkbox'
            className='border border-blue-400 rounded-md shadow-lg ml-2'
            name='check'
            checked={formInputs.complete}
            onChange={() => dispatch(handleFormChecked())}
          />
        </section>

        <button
          type='submit'
          className='py-1 px-3 md:w-3/4 rounded-lg bg-blue-400 text-white w-full text-center mx-auto '
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Todo;
